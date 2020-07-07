const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  date: { type: Date, default: Date.now },
  category: { name: String },
  amount: { type: Number } ,
  // account: { type: String },
  comment: { type: String },
  type: {
      type: String,
      default: "Income"
  }
});

const ExpenseSchema = new Schema({
  date: { type: Date, default: Date.now },
  category: { name: String },
  amount: { type: Number } ,
  // account: { type: String },
  comment: { type: String },
  type: {
      type: String,
      default: "Income"
  }
});

const SavingSchema = new Schema({
  date: { type: Date, default: Date.now },
  category: { name: String },
  amount: { type: Number } ,
  // account: { type: String },
  comment: { type: String },
  type: {
      type: String,
      default: "Saving"
  }
});

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'A password is required',
    validate: [
      function (input) {
        return input.length >= 4
      },
      'Password should be four characters or longer'
    ]
  },
  incomes: [IncomeSchema],
  expenses: [ExpenseSchema],
  savings: [SavingSchema]
})

UserSchema.methods.comparePassword = function(challenge) {
  return this.password === challenge;
}

let User = mongoose.model('User', UserSchema);

module.exports = User;
