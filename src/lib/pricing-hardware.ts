export const MONTHLY_PRICE_WITHOUT_HARDWARE = 49
export const MONTHLY_PRICE_WITH_HARDWARE = 49

export function monthlyPriceForHardware(withHardware: boolean): number {
  return withHardware ? MONTHLY_PRICE_WITH_HARDWARE : MONTHLY_PRICE_WITHOUT_HARDWARE
}

export function displayPrice(monthlyBase: number, isYearly: boolean): number {
  return isYearly ? Math.round(monthlyBase * 12 * 0.9) : monthlyBase
}
