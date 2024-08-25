class Basket {
    constructor({catalogService, offerService, deliveryService}) {
      this.catalogService = catalogService;
      this.offerService = offerService;
      this.deliveryService = deliveryService;
      this.items = [];
    }
  
    /**
     * Add a product to the basket
     * @param {string} productCode
     */
    add(productCode) {
      const product = this.catalogService.getProduct(productCode);
      if (product) {
        this.items[this.items.length] = product;
      }
    }
  
    /**
     * Calculate the total of all items in the basket, including any discounts and delivery costs
     * @returns {number} The total cost of all items in the basket
     */
    total() {
      const items = this.items;
      const itemsLength = items.length;
      let subtotal = 0;
      let discount = 0;
  
      // loop through all items in the basket and calculate the subtotal and discount
      for (let i = 0; i < itemsLength; i++) {
        const item = items[i];
        subtotal += item.price;
        // apply any offers to the item and add the discounted price to the total discount
        discount += this.offerService.applyOffers([item])[0].price;
      }
  
      // calculate the delivery cost based on the subtotal
      const deliveryCost = this.deliveryService.calculateDeliveryCost(subtotal - discount);
  
      // return the total cost of all items in the basket, including discounts and delivery costs
      return subtotal - discount + deliveryCost;
    }
  }
  
  module.exports = Basket;
