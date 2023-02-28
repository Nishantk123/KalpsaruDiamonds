const mongoose = require("mongoose");

const generalAccountSchema = new mongoose.Schema({
  account_number: { type: String, default: null },
  alias: { type: String, default: null },
  annexure: { type: String, default: null },
  address: { type: String, default: null },
  country: { type: String, default: null },
  type: { type: String, default: null },
  main_party: { type: String, default: null },
  city: { type: String, default: null },
  phoneno1: { type: String, default: null },
  phoneno2: { type: String, default: null },
  fax_no: { type: String, default: null },
  website: { type: String, default: null },
  email_id: { type: String, default: null },
  opening_balance: { type: String, default: null },
  assign_to_group: { type: String, default: null },
});

module.exports = mongoose.model("GeneralAccount", generalAccountSchema);
