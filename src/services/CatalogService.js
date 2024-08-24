const Product = require('../models/Product');

class CatalogService {
  constructor() {
    this.products = {};
  }

  addProduct(product) {
    this.products[product.code] = product;
  }

  getProduct(code) {
    return this.products[code];
  }
}

module.exports = CatalogService;

