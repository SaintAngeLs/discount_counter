import DiscountStrategy from "../interface/DiscountStrategy";

export class NoDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
      return price;
    }
}
  
export class TenPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
        return price * 0.9;
    }
}

export class TwentyPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
        return price * 0.8;
    }
}

export class FiftyPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number): number {
        return price * 0.5; 
    }
}

