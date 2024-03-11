import DiscountStrategy from "./interface/DiscountStrategy";
import { NoDiscountStrategy, TenPercentDiscountStrategy, TwentyPercentDiscountStrategy, FiftyPercentDiscountStrategy } from "./patterns/DiscountStrategyPatterns";

export class DiscountCalculator {
    private usedCodes: Set<string> = new Set();

    calculateDiscount(price: number, discountCode: string): number {
        if (price < 0) {
            throw new Error('Negatives not allowed');
        }

        if (this.usedCodes.has(discountCode)) {
            throw new Error('Discount code already used');
        }

        const strategy = this.getStrategy(discountCode);

        if (strategy instanceof FiftyPercentDiscountStrategy) {
            this.usedCodes.add(discountCode);
        }

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
                if (this.isFiftyPercentCode(discountCode)) {
                    return new FiftyPercentDiscountStrategy();
                }
                throw new Error('Invalid discount code');
        }
    }

    private isFiftyPercentCode(discountCode: string): boolean {
        const fiftyPercentCodes = ['CODE50A', 'CODE50B']; 
        return fiftyPercentCodes.includes(discountCode);
    }
}
