import { DiscountCalculator } from "../../src/calculatorDiscount";


describe('DiscountCalculator', () => {
  let calculator: DiscountCalculator;

  beforeEach(() => {
    calculator = new DiscountCalculator();
  });

  test('W przypadku podania pustego kodu rabat nie będzie udzielany.', () => {
    expect(calculator.calculateDiscount(100, '')).toBe(100);
  });

  test('Dodaj rabat 10%, który będzie naliczany po podaniu kodu kuponu SAVE10NOW', () => {
    expect(calculator.calculateDiscount(100, 'SAVE10NOW')).toBe(90);
  });

  test('Dodaj rabat 20%, który będzie naliczany po podaniu kodu kuponu DISCOUNT20OFF.', () => {
    expect(calculator.calculateDiscount(100, 'DISCOUNT20OFF')).toBe(80);
  });

  test('Wywołanie metody CalculateDiscount z ujemną ceną powinno rzucić wyjątkiem ArgumentException z komunikatem "Negatives not allowed".', () => {
    expect(() => calculator.calculateDiscount(-100, 'SAVE10NOW')).toThrow('Negatives not allowed');
  });

  test('W przypadku błędnego kodu powinien być zwracany wyjątek ArgumentException z komunikatem "Invalid discount code"', () => {
    expect(() => calculator.calculateDiscount(100, 'INVALID')).toThrow('Invalid discount code');
  });
});
