class Products {
    /**
     * @class Products
     * @classdesc Model for a product
     */
    constructor(code, name, price) {
      /**
       * @property {string} code - Code of the product
       */
      this.code = code;
      /**
       * @property {string} name - Name of the product
       */
      this.name = name;
      /**
       * @property {number} price - Price of the product
       */
      this.price = price;
    }
  }
  
  module.exports = Products;
