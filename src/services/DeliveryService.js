class DeliveryService {
    constructor(rules) {
      this.rules = rules.sort((a, b) => b.threshold - a.threshold)
                       .reduce((map, rule) => (map[rule.threshold] = rule, map), {});
    }
  
    calculateDeliveryCost(total) {
      for (let i = 0; i < this.rules.length; i++) {
        if (total >= this.rules[i].threshold) {
          return this.rules[i].cost;
        }
      }
      return 0;
    }
  }
  
  module.exports = DeliveryService;