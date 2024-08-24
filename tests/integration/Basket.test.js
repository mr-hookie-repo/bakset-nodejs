const { Basket, CatalogService, OfferService, DeliveryService } = require('../../src');
const Product = require('../../src/models/Product');
const Offer = require('../../src/models/Offer');
const DeliveryRule = require('../../src/models/DeliveryRule');

describe('Basket Integration', () => {
  let basket, catalogService, offerService, deliveryService;

  beforeEach(() => {
    catalogService = new CatalogService();
    catalogService.addProduct(new Product('R01', 'Red Widget', 32.95));
    catalogService.addProduct(new Product('G01', 'Green Widget', 24.95));
    catalogService.addProduct(new Product('B01', 'Blue Widget', 7.95));

    offerService = new OfferService();
    offerService.addOffer(new Offer('R01', 'BOGO_HALF_PRICE', 0.5));

    const deliveryRules = [
      new DeliveryRule(90, 0),
      new DeliveryRule(50, 2.95),
      new DeliveryRule(0, 4.95),
    ];
    deliveryService = new DeliveryService(deliveryRules);

    basket = new Basket(catalogService, offerService, deliveryService);
  });

  it('should calculate correct total for B01, G01', () => {
    basket.add('B01');
    basket.add('G01');
    expect(basket.total()).toBeCloseTo(37.85, 2);
  });

  it('should calculate correct total for R01, R01', () => {
    basket.add('R01');
    basket.add('R01');
    expect(basket.total()).toBeCloseTo(54.37, 2);
  });

  it('should calculate correct total for R01, G01', () => {
    basket.add('R01');
    basket.add('G01');
    expect(basket.total()).toBeCloseTo(60.85, 2);
  });

  it('should calculate correct total for B01, B01, R01, R01, R01', () => {
    basket.add('B01');
    basket.add('B01');
    basket.add('R01');
    basket.add('R01');
    basket.add('R01');
    expect(basket.total()).toBeCloseTo(98.27, 2);
  });
});