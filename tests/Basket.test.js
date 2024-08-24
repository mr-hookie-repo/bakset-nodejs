const Basket = require('../../src/Basket');

describe('Basket', () => {
  let mockCatalogService, mockOfferService, mockDeliveryService, basket;

  beforeEach(() => {
    mockCatalogService = {
      getProduct: jest.fn()
    };
    mockOfferService = {
      applyOffers: jest.fn()
    };
    mockDeliveryService = {
      calculateDeliveryCost: jest.fn()
    };
    basket = new Basket(mockCatalogService, mockOfferService, mockDeliveryService);
  });

  it('should add products to the basket', () => {
    const product = { code: 'R01', price: 32.95 };
    mockCatalogService.getProduct.mockReturnValue(product);
    basket.add('R01');
    expect(basket.items).toContain(product);
  });

  it('should calculate total correctly', () => {
    basket.items = [{ price: 10 }, { price: 20 }];
    mockOfferService.applyOffers.mockReturnValue(5);
    mockDeliveryService.calculateDeliveryCost.mockReturnValue(2.95);
    expect(basket.total()).toBe(27.95);
  });
});