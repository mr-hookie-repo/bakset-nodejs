class Basket {
    constructor({catalogService, offerService, deliveryService}) {
      this.catalogService = catalogService;
      this.offerService = offerService;
      this.deliveryService = deliveryService;
      this.items = [];
    }
  
    add(productCode) {
      const product = this.catalogService.getProduct(productCode);
      if (product) {
        this.items[this.items.length] = product;
      }
    }
  
    total() {
      const items = this.items;
      const itemsLength = items.length;
      let subtotal = 0;
      let discount = 0;
      for (let i = 0; i < itemsLength; i++) {
        subtotal += items[i].price;
        discount += this.offerService.applyOffers([items[i]])[0].price;
      }
      const deliveryCost = this.deliveryService.calculateDeliveryCost(subtotal - discount);
      return subtotal - discount + deliveryCost;
    }
  }
  
  module.exports = Basket;