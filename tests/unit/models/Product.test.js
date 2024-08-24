const Product = require('../../../src/models/Product');

describe('Product', () => {
  it('should create a product with correct properties', () => {
    const product = new Product('R01', 'Red Widget', 32.95);
    expect(product.code).toBe('R01');
    expect(product.name).toBe('Red Widget');
    expect(product.price).toBe(32.95);
  });
});
