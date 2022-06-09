const mongoose = require("mongoose")

const supplementary = new mongoose.Schema({
    date: {type: Date},
    party: {type: String},
    amount: {type: String},
    int_rate: {type: String},
    interest_amount: {type: String},
    maturity: {type: String},
    amount_receivable: {type: String},
    amount_recd: {type: String},
    balance: {type: String},
})


module.exports = mongoose.model("supplementary", supplementary);