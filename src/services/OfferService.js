class OfferService {
    constructor() {
      this.offers = [];
    }
  
    addOffer(offer) {
      this.offers[this.offers.length] = offer;
    }
  
    applyOffers(items) {
      return this.offers.reduce((total, offer) => total.concat(offer.apply(items)), []);
    }
  }
  
  module.exports = OfferService;
  
