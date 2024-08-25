class DeliveryService {
    /**
     * @class DeliveryService
     * @classdesc A service that handles calculating delivery costs based on a set of rules
     * @param {Array.<Object>} rules An array of objects with a threshold and a cost
     * @returns {DeliveryService}
     */
    constructor(rules) {
      /**
       * A map of cost rules to their respective thresholds
       * @type {Map.<number, Object>}
       */
      this.rules = rules.sort((a, b) => b.threshold - a.threshold)
                       .reduce((map, rule) => (map[rule.threshold] = rule, map), {});
    }
  
    /**
     * Calculates the delivery cost based on the total of the items
     * in the basket.
     * @param {number} total The total of the items in the basket
     * @returns {number} The delivery cost
     */
    calculateDeliveryCost(total) {
      // Iterate over the rules in descending order of threshold
      // so that the first rule that matches the total is used
      for (let i = 0; i < this.rules.length; i++) {
        // If the total is greater than or equal to the threshold
        // of the rule, return the cost of the rule
        if (total >= this.rules[i].threshold) {
          return this.rules[i].cost;
        }
      }
      // If no rule matches the total, return 0
      return 0;
    }
  }
  
  module.exports = DeliveryService;
