import DiscountStrategy from "./interface/DiscountStrategy";
import { NoDiscountStrategy, 
    TenPercentDiscountStrategy, 
    TwentyPercentDiscountStrategy } from "./patterns/stratery-patterns";

export class DiscountCalculator {
    calculateDiscount(price: number, discountCode: string): number {
        
      if (price < 0) {
        throw new Error('Negatives not allowed');
      }
  
      const strategy = this.getStrategy(discountCode);
      return strategy.applyDiscount(price);
    }
  
    private getStrategy(discountCode: string): DiscountStrategy {
      switch (discountCode) {
        case 'SAVE10NOW':
          return new TenPercentDiscountStrategy();
        case 'DISCOUNT20OFF':
          return new TwentyPercentDiscountStrategy();
        case '':
          return new NoDiscountStrategy();
        default:
          throw new Error('Invalid discount code');
      }
    }
}
  