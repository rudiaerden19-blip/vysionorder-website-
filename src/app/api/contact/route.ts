import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import { VYSION_KASSA_ORIGIN } from '@/lib/vysion-site'

const contactFormSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
})

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function sendViaZoho(data: z.infer<typeof contactFormSchema>) {
  const { firstName, lastName, email, message } = data
  const fn = escapeHtml(firstName)
  const ln = escapeHtml(lastName)
  const em = escapeHtml(email)
  const msg = escapeHtml(message)

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Vysion Order Website" <${process.env.ZOHO_EMAIL}>`,
    to: process.env.ZOHO_EMAIL,
    replyTo: email,
    subject: `Vysion Order contact: ${fn} ${ln}`,
    html: `<p><strong>${fn} ${ln}</strong> (${em})</p><p>${msg}</p><p><em>Via vysionorder.com</em></p>`,
  })
}

async function proxyToKassaPlatform(body: unknown) {
  const upstream = await fetch(`${VYSION_KASSA_ORIGIN}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Vysion-Contact-Source': 'vysionorder.com',
    },
    body: JSON.stringify(body),
  })
  const data = await upstream.json().catch(() => ({}))
  if (!upstream.ok) {
    const err =
      typeof data === 'object' && data && 'error' in data && typeof data.error === 'string'
        ? data.error
        : 'Verzenden mislukt.'
    return NextResponse.json({ error: err }, { status: upstream.status })
  }
  return NextResponse.json({ success: true })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Ongeldige gegevens.' }, { status: 400 })
    }

    if (process.env.ZOHO_EMAIL && process.env.ZOHO_PASSWORD) {
      await sendViaZoho(parsed.data)
      return NextResponse.json({ success: true })
    }

    return proxyToKassaPlatform(parsed.data)
  } catch {
    return NextResponse.json({ error: 'Verzenden mislukt.' }, { status: 500 })
  }
}
