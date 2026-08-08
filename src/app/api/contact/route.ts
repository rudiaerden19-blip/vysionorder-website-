import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Ongeldige gegevens.' }, { status: 400 })
    }

    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      return NextResponse.json(
        { error: 'Contactformulier is tijdelijk niet beschikbaar.' },
        { status: 503 },
      )
    }

    const { firstName, lastName, email, message } = parsed.data
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
      html: `<p><strong>${fn} ${ln}</strong> (${em})</p><p>${msg}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Verzenden mislukt.' }, { status: 500 })
  }
}
