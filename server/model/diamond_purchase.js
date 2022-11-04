const mongoose = require("mongoose");
const diamondPurchaseSchema = new mongoose.Schema({
  quality: {type: String},
  packet_size: {type: String},
  lot_number: {type: String},
  shape: {type: String},
  ct_weight: {type: String},
  cost_price: {type: String},
  expected_sp: {type: String},
  actual_sp: {type: String},
  export: {type: String},
  current_doller_price:{type: String, default: null},
});

module.exports = mongoose.model("diamond", diamondPurchaseSchema);
