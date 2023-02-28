const mongoose = require("mongoose");
const RojmelSchema = new mongoose.Schema({
  cr_amount: {type: String, default: null},
  cr_vigat: {type: String, default: null},
  cr_date: {type: String, default: null},
  dr_amount: {type: String, default: null},
  dr_vigat: {type: String, default: null},
  dr_date: {type: String, default: null},
});
module.exports = mongoose.model("Rojmel", RojmelSchema);
