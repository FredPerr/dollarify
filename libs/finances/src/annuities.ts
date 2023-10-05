/**
 * Future value of ordinary annuity
 * @see https://www.investopedia.com/retirement/calculating-present-and-future-value-of-annuities/
 *
 * @param pmt payment amount per period (equivalent to cash flow per period).
 * @param interest annual interest rate.
 * @param nper_per_year number of periods per year (bi-annually = 2).
 * @param nper number of payments/periods.
 * @returns final total of the payments with interests.
 */
function fv_ordinary_annuity(
    pmt: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return Math.round((100 * pmt * ((1 + r_per) ** nper - 1)) / r_per) / 100
}

/**
 * Present value of ordinary annuity
 * @see https://www.investopedia.com/retirement/calculating-present-and-future-value-of-annuities/
 *
 * @param pmt payment amount per period (equivalent to cash flow per period).
 * @param nper_per_year number of periods per year (bi-annually = 2).
 * @param nper number of payments/periods.
 * @returns initial value required to  of the payments with interests.
 */
function pv_ordinary_annuity(
    pmt: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return (
        Math.round((100 * pmt * (1 - (1 + r_per) ** (nper * -1))) / r_per) / 100
    )
}

/**
 * Future value of due annuity
 * @see https://www.investopedia.com/retirement/calculating-present-and-future-value-of-annuities/
 *
 * @param pmt  - payment amount per period (equivalent to cash flow per period).
 * @param interest - annual interest rate.
 *  @param nper_per_year -  number of periods per year (bi-annually = 2).
 * @param nper - number of payments/periods.
 *  @returns final total of the payments with interests.
 */
function fv_due_annuity(
    pmt: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return (
        Math.round(
            ((100 * pmt * ((1 + r_per) ** nper - 1)) / r_per) * (1 + r_per)
        ) / 100
    )
}

/**
 * Present value of due annuity
 *  @see https://www.investopedia.com/retirement/calculating-present-and-future-value-of-annuities/

 * @param pmt - payment amount per period (equivalent to cash flow per period).
 * @param interest - annual interest rate.
 * @param nper_per_year - number of periods per year (bi-annually = 2).
 * @param nper - number of payments/periods.
 * @returns initial value required to  of the payments with interests.
 */
function pv_due_annuity(
    pmt: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return (
        Math.round(
            ((100 * pmt * (1 - (1 + r_per) ** (nper * -1))) / r_per) *
                (1 + r_per)
        ) / 100
    )
}

export {
    fv_ordinary_annuity,
    pv_ordinary_annuity,
    pv_due_annuity,
    fv_due_annuity,
}
