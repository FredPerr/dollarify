/**
 * Calculate the future value of a recurring fixed payment
 * @param pmt The payment/contribution amount
 * @param npmt The number of payments made.
 *
 */
function fv_recurring_fixed_payments(pmt: number, npmt: number) {
    return pmt * npmt
}

/**
 * Calculate the number of payments made to reach future value with fixed contributions.
 *
 * @param pmt contribution value
 * @param fv future value of all the payments
 *
 * @returns the number of payments made to reach the future value. If future value = 0, returns 0; if payment = 0, return Infinity.
 *
 */
function number_payments_fixed_payments(pmt: number, fv: number) {
    if (fv === 0) return 0

    if (pmt === 0) return Infinity
    return fv / pmt
}

/**
 * Calculate the value of fixed payment from future value and number of payments.
 *
 * @param fv future value after all payments made
 * @param npmt number of payments made
 * @returns fixed payment amount. If future value = 0, returns 0; if number of payments = 0, return NaN
 *
 */
function payment_value_fixed_payments(fv: number, npmt: number) {
    if (fv === 0) return 0
    if (npmt === 0) return NaN
    return fv / npmt
}

export {
    number_payments_fixed_payments,
    payment_value_fixed_payments,
    fv_recurring_fixed_payments,
}
