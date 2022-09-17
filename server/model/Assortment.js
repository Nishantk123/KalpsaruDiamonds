const mongoose = require("mongoose");


const assortmentSchema = new mongoose.Schema({
  sr_no: { type: String, default: null },
  date: { type: Date, default: null },
  currency: { type: String, default: null },
  covn_rate: { type: String, default: null },
  vatav: { type: String, default: null },
  price_list: { type: String, default: null },
  ref_no:{ type: String, default: null },
  note:{ type: String, default: null },
  bal_cts:{ type: String, default: null },
  rate:{ type: String, default: null },
  amount:{ type: String, default: null },
  daimond_list:[
    {
    ref_no: {type: String},
    shape: {type: String},
    size: {type: String},
    color: {type: String},
    clarity: {type: String},
    cts: {type: String},
    rate: {type: String},
    amount: {type: String},
    n_rate: {type: String},
    n_amt: {type: String},
    p_rate: {type: String},
    p_amt: {type: String},
    s_rate: {type: String},
    s_amount: {type: String},
    }
  ],
});

module.exports = mongoose.model("Assortment", assortmentSchema);
