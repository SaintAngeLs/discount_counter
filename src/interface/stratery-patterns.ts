class NoDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
      return price;
    }
}
  
class TenPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
        return price * 0.9;
    }
}

class TwentyPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
        return price * 0.8;
    }
}
