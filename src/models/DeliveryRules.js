class DeliveryRules {
    constructor(threshold, cost) {
      this._threshold = threshold;
      this._cost = cost;
    }

    matches(amount) {
      return amount >= this._threshold;
    }

    cost() {
      return this._cost;
    }
  }
  
  module.exports = DeliveryRules;