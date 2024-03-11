import { DiscountCalculator } from "../../src/calculatorDiscount";


describe('DiscountCalculator', () => {
  let calculator: DiscountCalculator;

  beforeEach(() => {
    calculator = new DiscountCalculator();
  });

  test('should not apply discount with an empty code', () => {
    expect(calculator.calculateDiscount(100, '')).toBe(100);
  });

  test('should apply a 10% discount with code SAVE10NOW', () => {
    expect(calculator.calculateDiscount(100, 'SAVE10NOW')).toBe(90);
  });

  test('should apply a 20% discount with code DISCOUNT20OFF', () => {
    expect(calculator.calculateDiscount(100, 'DISCOUNT20OFF')).toBe(80);
  });

  test('should throw an error for negative prices', () => {
    expect(() => calculator.calculateDiscount(-100, 'SAVE10NOW')).toThrow('Negatives not allowed');
  });

  test('should throw an error for invalid discount codes', () => {
    expect(() => calculator.calculateDiscount(100, 'INVALID')).toThrow('Invalid discount code');
  });
});
