const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    date: { type: Date, default: Date.now },
    category: { name: String },
    amount: Number,
    account: String,
    comment: String,
    type: {
        type: String,
        default: "Expense"
    }
});

let Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;