/**
 * Calculate the effective interest rate (rate of return : ROI).
 * @param fv future value of the investment.
 * @param pv present value of the investment (initial).
 * @returns the roi (10% = 0.1). If present value = 0, returns Infinity. If present value = 0, returns Infinity.
 */
function roi(fv: number, pv: number) {
    if (pv === 0) return Infinity
    return (fv - pv) / pv
}

/**
 * Calculate the effective interest rate.
 * @param nper_per_year number of periods in a year.
 * @param nominal_interest the annual interest rate.
 * @returns the effective interest rate per period. If number of period = 0, returns NaN.
 */
function effective_rate(nominal_interest: number, nper_per_year: number) {
    if (nper_per_year == 0) return NaN
    return (1 + nominal_interest / nper_per_year) ** nper_per_year - 1
}

export { roi, effective_rate }
