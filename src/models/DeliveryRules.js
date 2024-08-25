class DeliveryRules {
    /**
     * @class DeliveryRules
     * @classdesc Represents a single delivery rule
     * @param {number} threshold - The amount of the basket that this rule applies to
     * @param {number} cost - The cost of delivery for this rule
     */
    constructor(threshold, cost) {
      /**
       * The amount of the basket that this rule applies to
       * @type {number}
       * @private
       */
      this._threshold = threshold;

      /**
       * The cost of delivery for this rule
       * @type {number}
       * @private
       */
      this._cost = cost;
    }

    /**
     * Checks if the delivery rule matches the given amount
     * @param {number} amount - The amount to check
     * @returns {boolean} True if the rule matches, false otherwise
     */
    matches(amount) {
      return amount >= this._threshold;
    }

    /**
     * Gets the cost of delivery for this rule
     * @returns {number} The cost of delivery
     */
    cost() {
      return this._cost;
    }
  }
  
  module.exports = DeliveryRules;
