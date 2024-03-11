interface DiscountStrategy {
  applyDiscount(price: number): number;
}

export default DiscountStrategy;
