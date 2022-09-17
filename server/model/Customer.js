const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  account_name: { type: String, default: null },
  alias: { type: String, default: null },
  annexure: { type: String, default: null },
  active: { type: Boolean, default: false },
  internal: { type: Boolean, default: false },
  kyc: { type: Boolean, default: false },
  related_account:{ type: String, default: null },
  country:{ type: String, default: null },
  state:{ type: String, default: null },
  city:{ type: String, default: null },
  type:{ type: String, default: null },
  debit_limit:{ type: String, default: null },
  percentage:{ type: String, default: null },
  value:{ type: String, default: null },
  interest:{ type: String, default: null },
  lead:{ type: String, default: null },
  sales_man:{ type: Array, default: [] },
  terms:{ type: Array, default: [] },
  broker:{ type: String, default: null },
  assign_to_group:{ type: Array, default: [] },
  date:{ type: Date, default: null },
  notes:{ type: String, default: null },
  user_image:{ type: String, default: null },
});

module.exports = mongoose.model("Customer", customerSchema);
