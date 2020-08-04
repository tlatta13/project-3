const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  date: { 
    type: Date, 
    default: Date.now 
  },
  category: { 
    type: String,
    default: "Other"
  },
  amount: { 
    type: Number,
    required: 'Please enter an amount' 
  },
  comment: { 
    type: String,
  },
  type: {
      type: String,
      default: "Income"
  }
});

const ExpenseSchema = new Schema({
  date: { 
    type: Date, 
    default: Date.now 
  },
  category: { 
    type: String,
    required: 'Please enter a category',
    default: 'Other'
  },
  amount: { 
    type: Number,
    required: 'Please enter an amount' 
  },
  comment: { 
    type: String,
  },
  type: {
      type: String,
      default: "Expense"
  }
});

const SavingSchema = new Schema({
  date: { 
    type: Date, 
    default: Date.now 
  },
  category: { 
    type: String,
    // required: 'Please enter a category'
  },
  amount: { 
    type: Number,
    required: 'Please enter an amount' 
  },
  comment: { 
    type: String,
    default: 'Other'
  },
  type: {
      type: String,
      default: "Savings"
  }
});

// Main Schema - Parent: User | Children: Income, Expense, Savings
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


