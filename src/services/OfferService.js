class OfferService {
    /**
     * OfferService is a class that stores and applies offers to a list of items in a basket.
     * @class
     * @param {Array} offers - An array of Offer objects to be applied to the items in the basket
     */
    constructor() {
      /**
       * An array of Offer objects. The array is sorted in descending order of the threshold.
       * @type {Array}
       */
      this.offers = [];
    }
  
    /**
     * Adds an offer to the OfferService. The offers are sorted in descending order of the threshold.
     * @param {Offer} offer - The offer to be added to the OfferService
     */
    addOffer(offer) {
      this.offers.splice(this._getInsertIndex(offer.threshold), 0, offer);
    }

    /**
     * Internal method to get the index where an offer should be inserted to maintain the descending
     * order of the threshold.
     * @param {number} threshold - The threshold of the offer
     * @returns {number} The index where the offer should be inserted
     */
    _getInsertIndex(threshold) {
      for (let i = 0; i < this.offers.length; i++) {
        if (this.offers[i].threshold < threshold) {
          return i;
        }
      }
      return this.offers.length;
    }
  
    /**
     * Applies all the offers in the OfferService to a list of items. The method reduces the list of
     * offers into a single array of items, by concatenating the results of each offer's apply method.
     * @param {Array} items - The list of items to apply the offers to
     * @returns {Array} The list of items with the offers applied
     */
    applyOffers(items) {
      return this.offers.reduce((total, offer) => total.concat(offer.apply(items)), []);
    }
  }
  
  module.exports = OfferService;
  
