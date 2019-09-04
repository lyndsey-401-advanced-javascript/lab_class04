'use strict';

const DataModel = require('../memory.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { type:string, required: true },
      price: { type:number, required: true },
      weight: {type:number, required: true},
      quantity_in_stock: {type:number, required: true}
    };
  }
}

module.exports = Products;
