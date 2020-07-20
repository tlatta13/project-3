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

    //db.expense.findAll

    // get all expenses
    res.json(req.user.expenses);
    
    // res.json(
    //     [
    //         {
    //             date: "06/1/2020",
    //             category: "Mortgage",
    //             amount: 1200 ,
    //             comment: "Paid extra this month"
    //         },
    //         {
    //             date: "06/5/2020",
    //             category: "Car Lease",
    //             amount: 350 ,
    //             comment: ""
    //         },
    //         {
    //             date: "06/17/2020",
    //             category: "Car Insurance",
    //             amount: 120 ,
    //             comment: "Received a rona discount"
    //         }
    //         ,
    //         {
    //             date: "06/23/2020",
    //             category: "Health & Wellness",
    //             amount: 200 ,
    //             comment: "Dentist Appt."
    //         },
    //         {
    //             date: "06/15/2020",
    //             category: "Home",
    //             amount: 120 ,
    //             comment: "Window Cleaning"
    //         },
    //         {
    //             date: "06/12/2020",
    //             category: "Food & Dining",
    //             amount: 65 ,
    //             comment: "Dinner with friends"
    //         }
    //     ]
    // )
})

// Update Expense - May not need
ExpenseController.get('/', ({body, params}, res) => {
    // update expense
    //db.Expense.find({})

})

// Delete Expense
ExpenseController.delete('/:userid/:expensesid', (req, res) => {
    console.log(req.params.userid,req.params.expensesid)
    db.Users.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.userid)},{$pull: {expenses: {_id:mongoose.Types.ObjectId(req.params.expensesid)}}}, function(err, data){
        if(err) {
          return res.status(500).json({'error' : 'error in deleting address'});
        }

        res.json(data);

      });
    // delete expense
})

module.exports = ExpenseController