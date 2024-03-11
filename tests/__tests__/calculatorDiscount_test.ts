import { DiscountCalculator } from "../../src/DiscountCalculator";


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

  test('Pierwsze użycie kodu DISCOUNT20OFF powinno udzielić 50% rabatu.', () => {
    expect(calculator.calculateDiscount(100, 'CODE50A')).toBe(50);
  });

  test('Drugi raz kod DISCOUNT20OFF nie powinien udzielić rabatu i zgłosić wyjątek.', () => {
    calculator.calculateDiscount(100, 'CODE50A'); // Pierwsze użycie
    expect(() => calculator.calculateDiscount(100, 'CODE50A')).toThrow('Discount code already used');
  });

  test('Pierwsze użycie kodu DISCOUNT20OFF powinno udzielić 50% rabatu.', () => {
    expect(calculator.calculateDiscount(100, 'CODE50B')).toBe(50);
  });

  test('Drugi raz kod DISCOUNT20OFF nie powinien udzielić rabatu i zgłosić wyjątek.', () => {
    calculator.calculateDiscount(100, 'CODE50B'); // Pierwsze użycie
    expect(() => calculator.calculateDiscount(100, 'CODE50B')).toThrow('Discount code already used');
  });
});
