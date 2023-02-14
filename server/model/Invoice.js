const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoice_number: { type: String, default: null },
  date: { type: Date, unique: false, index: false },
  qty: { type: String, default: null},
  broker: { type: String, default: null},
  customer: { type: String, default: null},
  due_date: { type: String, default: null},
  cust_type: { type: String, default: null},
  book_type: { type: String, default: null},
  currency: { type: String, default: null},
  convt_rate: { type: String, default: null},
  remark: { type: String, default: null},
  ref_invoice_number: { type: String, default: null},
  ggross_amount: { type: String, default: null},
  sgst_amount: { type: String, default: null},
  sgst_acc: { type: String, default: null},
  net_amount: { type: String, default: null},
  bussiness_type: { type: String, default: null},
  current_doller_price:{type: String, default: null},

});

module.exports = mongoose.model("Invoice", invoiceSchema);
