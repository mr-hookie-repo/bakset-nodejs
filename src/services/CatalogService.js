const Product = require('../models/Product');
class CatalogService {
  /**
   * CatalogService is a class that is responsible for managing the catalog of
   * products. It provides methods to add and retrieve products.
   * @constructor
   */
  constructor() {
    /**
     * The products object is where the catalog of products is stored. It is an
     * object that uses the product codes as keys and stores the product objects
     * as values.
     * @type {Object}
     */
    this.products = {};
  }

  /**
   * Adds a product to the product catalog.
   * @param {Product} product - The product to add to the catalog.
   */
  addProduct(product) {
    this.products[product.code] = product;
  }

  /**
   * Retrieves a product from the catalog by code.
   * @param {String} code - The code of the product to retrieve.
   * @return {Product} The product object that matches the given code or
   *     undefined if no product matches the given code.
   */
  getProduct(code) {
    return this.products[code];
  }
}

module.exports = CatalogService;
