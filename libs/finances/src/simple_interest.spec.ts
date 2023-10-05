import {
    fv_simple_interest,
    interest_simple_interest,
    principal_interest,
} from './simple_interest'

describe('Simple interest equations', () => {
    it('should calculate the right future value', () => {
        expect(fv_simple_interest(1000, 0.1)).toBeCloseTo(1100, 4)
    })
    it('should calculate the right added interests', () => {
        expect(interest_simple_interest(1000, 0.1)).toBeCloseTo(100, 4)
    })
    it('should calculate the principal from future value', () => {
        expect(principal_interest(1100, 0.1)).toBeCloseTo(1000, 4)
        expect(principal_interest(1000, -1.0)).toBe(Infinity)
        expect(principal_interest(1000, -0.1)).toBeCloseTo(1111.11, 2)
    })
})
