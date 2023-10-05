import { roi, effective_rate } from './effective_rate'

describe('Effective rate calculation', () => {
    it('should calculate the correct ROI', () => {
        expect(roi(110.0, 100.0)).toBeCloseTo(0.1)
        expect(roi(0, 10)).toBe(-1)
        expect(roi(10, 0)).toBe(Infinity)
    })
    it('should calculate the effective rate', () => {
        expect(effective_rate(0.1, 12)).toBeCloseTo(0.1047, 4)
        expect(effective_rate(0.101, 2)).toBeCloseTo(0.1036, 4)
    })
})
