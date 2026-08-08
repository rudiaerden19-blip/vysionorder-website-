/** Canonieke marketing-site Vysion Order. */
export const VYSION_CANONICAL_ORIGIN = 'https://www.vysionorder.com' as const

export const VYSION_ORDER_ORIGIN = VYSION_CANONICAL_ORIGIN

export const VYSION_KASSA_ORIGIN = 'https://www.vysion-kassa.com' as const

export const VYSION_TABLEVYSION_ORIGIN = 'https://www.tablevysion.com' as const

export const VYSION_BRAND_SITE_NAME = 'Vysion Order' as const

export const VYSION_BRAND_PRODUCT_NAME = 'Vysion Order' as const

export function vysionKassaUrl(path = ''): string {
  if (!path || path === '/') return VYSION_KASSA_ORIGIN
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${VYSION_KASSA_ORIGIN}${normalized}`
}
