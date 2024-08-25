class Offer {
    /**
     * Offer constructor.
     * 
     * @param {string} productCode - The code of the product the offer applies to.
     * @param {string} type - The type of the offer. Accepted values: 'BOGO_HALF_PRICE', 'TWO_FOR_ONE'.
     * @param {number} value - The value of the offer. Currently only used for 'BOGO_HALF_PRICE' type.
     */
    constructor(productCode, type, value) {
      /**
       * The code of the product the offer applies to.
       * @type {string}
       */
      this.productCode = productCode;

      /**
       * The type of the offer.
       * @type {string}
       */
      this.type = type;

      /**
       * The value of the offer. Currently only used for 'BOGO_HALF_PRICE' type.
       * @type {number}
       */
      this.value = value;
    }
  
    apply(items) {
      // Implementation of offer logic
      return items.filter(item => item.code !== this.productCode);
    }
  }
  
  module.exports = Offer;
  
  
