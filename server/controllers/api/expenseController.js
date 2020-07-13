const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const ExpenseController = require('express').Router();

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
    
    // res.json(req.user.expenses); working get route

    
    res.json(
        [
            {
                date: "06/1/2020",
                category: "Mortgage",
                amount: 1200 ,
                comment: "Paid extra this month"
            },
            {
                date: "06/5/2020",
                category: "Car Lease",
                amount: 350 ,
                comment: ""
            },
            {
                date: "06/8/2020",
                category: "Car Insurance",
                amount: 120 ,
                comment: "Received a rona discount"
            }
        ]
    )

})

// Update Expense - May not need
ExpenseController.get('/', ({body, params}, res) => {
    // update expense
    //db.Expense.find({})

})

// Delete Expense
ExpenseController.get('/:id', (req, res) => {
    // delete expense
})

module.exports = ExpenseController