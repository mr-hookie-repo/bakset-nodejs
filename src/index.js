const Product = require('./models/Product');
const Offer = require('./models/Offer');
const DeliveryRule = require('./models/DeliveryRule');
const CatalogService = require('./services/CatalogService');
const OfferService = require('./services/OfferService');
const DeliveryService = require('./services/DeliveryService');
const Basket = require('./Basket');

// Initialize services
const catalogService = new CatalogService();
catalogService.addProduct(new Product('R01', 'Red Widget', 32.95));
catalogService.addProduct(new Product('G01', 'Green Widget', 24.95));
catalogService.addProduct(new Product('B01', 'Blue Widget', 7.95));

const offerService = new OfferService();
offerService.addOffer(new Offer('R01', 'BOGO_HALF_PRICE', 0.5));

const deliveryRules = [
  new DeliveryRule(90, 0),
  new DeliveryRule(50, 2.95),
  new DeliveryRule(0, 4.95),
];
const deliveryService = new DeliveryService(deliveryRules);

// Create and use the basket
const basket = new Basket(catalogService, offerService, deliveryService);
basket.add('B01');
basket.add('G01');
console.log(basket.total()); // Expected: 37.85

module.exports = { Basket, CatalogService, OfferService, DeliveryService };
