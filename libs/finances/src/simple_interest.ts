/**
 * Calculate the future value of a principal with an interest rate.
 * @param principal the start principal value.
 * @param interest the annual interest rate.
 */
function fv_simple_interest(principal: number, interest: number) {
    return principal * (1 + interest)
}

/**
 * Calculate the interest added to a principal.
 * @param principal the start principal value.
 * @param interest the annual interest rate.
 */
function interest_simple_interest(principal: number, interest: number) {
    return principal * (1 + interest) - principal
}

/**
 * Calculate the initial principal value of a future value of simple interest amount.
 * @param fv future value of after interests added to principle.
 * @param interest the annual interest rate.
 */
function principal_interest(fv: number, interest: number) {
    if (interest === 0) return Infinity

    return fv / (1 + interest)
}

export { fv_simple_interest, principal_interest, interest_simple_interest }
