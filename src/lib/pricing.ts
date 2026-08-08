/** Vysion Order abonnement (excl. BTW). */
export const VYSION_ORDER_MONTHLY = 49

export function displayPrice(monthlyBase: number, isYearly: boolean): number {
  return isYearly ? Math.round(monthlyBase * 12 * 0.9) : monthlyBase
}
