/** Zelfde checklist op #inbegrepen en #prijzen — één bron, geen verschillende marketinglijsten. */
export const ORDER_INCLUDED_FEATURE_KEYS = [
  'onlinePlatform',
  'freeWebsite',
  'whatsapp',
  'loyalty',
  'groupOrders',
  'tableReservation',
  'posLink',
  'giftVouchers',
  'labelPrint',
  'qrMenu',
  'qrReviews',
  'googleLink',
  'menuEditor',
  'payments',
  'notifications',
  'promotions',
  'channels',
  'noCommission',
] as const

export type OrderIncludedFeatureKey = (typeof ORDER_INCLUDED_FEATURE_KEYS)[number]
