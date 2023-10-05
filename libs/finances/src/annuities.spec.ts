import {
    fv_ordinary_annuity,
    pv_ordinary_annuity,
    fv_due_annuity,
    pv_due_annuity,
} from './annuities'

describe('Annuities calculations', () => {
    it('should calculate the correct future value of ordinary annuity', () => {
        expect(fv_ordinary_annuity(1000, 0.05, 1, 5)).toBeCloseTo(5525.63)
        expect(fv_ordinary_annuity(100, 0.1, 12, 60)).toBeCloseTo(7743.71)
    })
    it('should calculate the correct present value of ordinary annuity', () => {
        expect(pv_ordinary_annuity(1000, 0.05, 1, 5)).toBeCloseTo(4329.48)
        expect(pv_ordinary_annuity(100, 0.1, 12, 60)).toBeCloseTo(4706.54)
    })
    it('should calculate the correct future value of due annuity', () => {
        expect(fv_due_annuity(1000, 0.05, 1, 5)).toBeCloseTo(5801.91)
        expect(fv_due_annuity(100, 0.1, 12, 60)).toBeCloseTo(7808.24)
    })
    it('should calculate the correct present value of due annuity', () => {
        expect(pv_due_annuity(1000, 0.05, 1, 5)).toBeCloseTo(4545.95)
        expect(pv_due_annuity(100, 0.1, 12, 60)).toBeCloseTo(4745.76)
    })
})
