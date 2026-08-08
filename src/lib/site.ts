export const SITE_NAME = 'Vysion Order'

export const OFFICIAL_SITE_URL = 'https://www.vysionorder.com'

export const MAIN_PLATFORM_URL = 'https://www.vysion-kassa.com'

export const TABLEVYSION_SITE_URL = 'https://www.tablevysion.com'

export const PRODUCT_LINE = 'online_bestellen' as const

export const LOGIN_PATH = '/inloggen'

export const LOGIN_URL = `${MAIN_PLATFORM_URL}/login?lang=nl&productLine=${PRODUCT_LINE}`

/** Registratie op het platform (online bestellen-productlijn). */
export const REGISTER_URL = `${MAIN_PLATFORM_URL}/registreer?line=${PRODUCT_LINE}&lang=nl`
