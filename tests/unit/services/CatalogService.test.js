const CatalogService = require('../../../src/services/CatalogService');
const Product = require('../../../src/models/Product');

describe('CatalogService', () => {
  let catalogService;

  beforeEach(() => {
    catalogService = new CatalogService();
  });

  it('should add and retrieve products', () => {
    const product = new Product('R01', 'Red Widget', 32.95);
    catalogService.addProduct(product);
    expect(catalogService.getProduct('R01')).toEqual(product);
  });

  it('should return undefined for non-existent product', () => {
    expect(catalogService.getProduct('NONEXISTENT')).toBeUndefined();
  });
});