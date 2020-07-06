const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    date: { type: Date, default: Date.now },
    category: { name: String },
    amount: Number,
    account: String,
    comment: String,
    type: {
        type: String,
        default: "Income"
    }
});

let Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;