const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const ExpenseController = require('express').Router();
const mongoose = require ('mongoose')
// Error Handler
const handleError = (err, res) => {
    console.log(err)
    res.sendStatus(500)
}

// POST /api/expense
ExpenseController.post('/', JWTVerifier, async (req, res) => {
    // add new expense
    req.user.expenses.push(
        {
            date: req.body.date,
            category: req.body.category,
            amount: req.body.amount,
            comment: req.body.comment
        }
    );

    req.user.save(function (err) {
        if (err) return handleError(err, res)
        console.log('New Expense Add')
        res.sendStatus(200)
    })
    
})

// GET /api/expense
ExpenseController.get('/', JWTVerifier, (req, res) => {
    // get all expenses
    res.json(req.user.expenses);
})

// Update Expense - May not need
ExpenseController.get('/', ({body, params}, res) => {
    // update expense
    //db.Expense.find({})

})

// Delete Expense
// ExpenseController.delete('/:userid/:expensesid', (req, res) => {
//     console.log(req.params.userid,req.params.expensesid)
//     db.Users.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.userid)},{$pull: {expenses: {_id:mongoose.Types.ObjectId(req.params.expensesid)}}}, function(err, data){
//         if(err) {
//           return res.status(500).json({'error' : 'error in deleting expense'});
//         }

//         res.json(data);

//       });
// })

ExpenseController.delete('/:expensesid', JWTVerifier, (req, res) => {
    console.log(req.params.expensesid)
    req.user.expenses.findByIdAndDelete({_id:req.params.expensesid}, function(err, data){
        if(err) {
          return res.status(500).json({'error' : 'error deleting expense'});
        }

        res.json(data);

      });
})

module.exports = ExpenseController