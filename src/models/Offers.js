class Offers {
    constructor(productCode, type, value) {
      this.productCode = productCode;
      this.type = type;
      this.value = value;
    }
  
    apply(items) {
      // Implementation of offer logic
      return items.filter(item => item.code !== this.productCode);
    }
  }
  
  module.exports = Offers;
  
  