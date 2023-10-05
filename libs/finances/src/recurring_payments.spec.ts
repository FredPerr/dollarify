import {
    fv_recurring_fixed_payments,
    payment_value_fixed_payments,
    number_payments_fixed_payments,
} from './recurring_payments'

describe('Recurring payments equations', () => {
    it('should calculate the future value of payment', () => {
        expect(fv_recurring_fixed_payments(100, 10)).toBeCloseTo(1000)
    })
    it('should calculate the number of payments', () => {
        expect(number_payments_fixed_payments(100, 1000)).toBeCloseTo(10)
    })
    it('should calculate the payment value', () => {
        expect(payment_value_fixed_payments(1000, 10)).toBeCloseTo(100)
    })
})
