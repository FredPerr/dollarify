import {
    fv_compound_interest,
    interests_compound_interest,
    principal_compound_interest,
    rate_per_period_compound_interest,
    periods_compound_interest,
} from './compound'

describe('Compounding interest formula', () => {
    const t1 = {
        P: 10000,
        i: 0.05,
        nper: 3,
        y: 1, // number of periods per year
        fv: 11576.25,
    }

    const t2 = {
        P: 1000,
        i: 0.1,
        nper: 60,
        y: 12,
        fv: 1645.31,
    }
    it('should calculate the correct final value of compounding', () => {
        expect(fv_compound_interest(t1.P, t1.i, t1.y, t1.nper)).toBeCloseTo(
            t1.fv
        )
        expect(fv_compound_interest(t2.P, t2.i, t2.y, t2.nper)).toBeCloseTo(
            t2.fv
        )
    })
    it('should calculate the correct interests value of compounding', () => {
        expect(
            interests_compound_interest(t1.P, t1.i, t1.y, t1.nper)
        ).toBeCloseTo(t1.fv - t1.P)
        expect(
            interests_compound_interest(t2.P, t2.i, t2.y, t2.nper)
        ).toBeCloseTo(t2.fv - t2.P)
    })
    it('should calculate the correct starting value of compounding total', () => {
        expect(
            principal_compound_interest(t1.fv, t1.i, t1.y, t1.nper)
        ).toBeCloseTo(t1.P, 1)
        expect(
            principal_compound_interest(t2.fv, t2.i, t2.y, t2.nper)
        ).toBeCloseTo(t2.P, 1)
    })
    it('should calculate the interest rate per period compounding', () => {
        expect(
            rate_per_period_compound_interest(t1.fv, t1.P, t1.nper)
        ).toBeCloseTo(t1.i / t1.y)
        expect(
            rate_per_period_compound_interest(t2.fv, t2.P, t2.nper)
        ).toBeCloseTo(t2.i / t2.y)
    })
    it('should calculate the number of periods required to reach final value', () => {
        expect(periods_compound_interest(t1.fv, t1.P, t1.i, t1.y)).toBeCloseTo(
            t1.nper
        )
        expect(periods_compound_interest(t2.fv, t2.P, t2.i, t2.y)).toBeCloseTo(
            t2.nper
        )
    })
})
