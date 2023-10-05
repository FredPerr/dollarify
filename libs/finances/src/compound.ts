/**
   Calculate the total principal with interests over time.
  
   @param principal - start value to compound.
   @param interest - annual interest rate.
   @param nper_per_year - number of periods per year (bi-annually = 2).
   @param nper - number of periods to compound.
  */
function fv_compound_interest(
    principal: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return Math.round(100 * principal * (1 + r_per) ** nper) / 100
}

/**
 * Calculate the interests added by compounding.
 *
 * @param principal - start value to compound.
 * @param interest - annual interest rate.
 * @param nper_per_year - number of periods per year (bi-annually = 2).
 * @param nper - number of periods to compound.
 */
function interests_compound_interest(
    principal: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return Math.round(100 * principal * ((1 + r_per) ** nper - 1)) / 100
}

/**
 * Calculate the principal of an already compounded total amount.
 *
 * @param fv - future value to remove compounding from.
 * @param interest - annual interest rate.
 * @param nper_per_year - number of periods per year (bi-annually = 2).
 * @param nper - number of periods to compound.
 */
function principal_compound_interest(
    fv: number,
    interest: number,
    nper_per_year: number,
    nper: number
) {
    const r_per = interest / nper_per_year
    return Math.round((100 * fv) / (1 + r_per) ** nper) / 100
}

/**
 * Calculate the number of periods required to attain a future value.
 *
 * @param fv - future value to remove compounding from.
 * @param principal - start value.
 * @param interest - annual interest rate.
 * @param nper_per_year - number  of periods per year (bi-annually = 2).
 */
function periods_compound_interest(
    fv: number,
    principal: number,
    interest: number,
    nper_per_year: number
) {
    const r_per = interest / nper_per_year
    return Math.log(fv / principal) / Math.log(1 + r_per)
}

/**
 * Calculate the interest rate per period of an already compounded total amount.
 *
 * @param fv - future value to remove compounding from.
 * @param principal - start value.
 * @param nper - number of periods.
 */
function rate_per_period_compound_interest(
    fv: number,
    principal: number,
    nper: number
) {
    return (fv / principal) ** (1 / nper) - 1
}

export {
    fv_compound_interest,
    principal_compound_interest,
    interests_compound_interest,
    periods_compound_interest,
    rate_per_period_compound_interest,
}
