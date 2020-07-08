const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const ExpenseController = require('express').Router();

ExpenseController.post('/', (req, res) => {
    // add new expense
    req.user.expenses.unshift(
        {
            date: req.body.date,
            category: req.body.category,
            amount: req.body.amount,
            comment: req.body.comment
        }
    )
    var subdoc =req.user.expenses[0];
    console.log(subdoc);
    subdoc.isNew

    req.user.save(function (err) {
        if (err) return handleError(err)
        console.log('New Expense Add')
    })
})

// GET /api/expense
ExpenseController.get('/', JWTVerifier, (req, res) => {
    // get all expenses
    // res.json(req.user.expenses); working get route
    res.json(
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
    )
})

ExpenseController.get('/:id', ({body, params}, res) => {
    // update expense
})

ExpenseController.get('/:id', (req, res) => {
    // delete expense
})

module.exports = ExpenseController