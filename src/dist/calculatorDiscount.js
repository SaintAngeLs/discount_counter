"use strict";
exports.__esModule = true;
exports.DiscountCalculator = void 0;
var DiscountCalculator = /** @class */ (function () {
    function DiscountCalculator() {
    }
    DiscountCalculator.prototype.calculateDiscount = function (price, discountCode) {
        if (price < 0) {
            throw new Error('Negatives not allowed');
        }
        var strategy = this.getStrategy(discountCode);
        return strategy.applyDiscount(price);
    };
    DiscountCalculator.prototype.getStrategy = function (discountCode) {
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
    };
    return DiscountCalculator;
}());
exports.DiscountCalculator = DiscountCalculator;
