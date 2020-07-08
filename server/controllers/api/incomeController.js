const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const IncomeController = require('express').Router();

// POST /api/income
IncomeController.post('/', JWTVerifier, (req, res) => {
    // add new income
    req.user.incomes.unshift(
        {
            date: req.body.date,
            category: req.body.category,
            amount: req.body.amount,
            comment: req.body.comment
        }
    )
    var subdoc =req.user.expenses[0];
    console.log(subdoc);
    subdoc.inNew

    req.user.save(function (err) {
        if (err) return handleError(err)
        console.log('New Expense Add')
    })
})

// GET /api/income
IncomeController.get('/', JWTVerifier, (req, res) => {
    // get all income
    // res.json(req.user.incomes); working route
    res.json(
        {
            date: "06/1/2020",
            category: "Paycheck",
            amount: 4000 ,
            comment: ""
        },
        {
            date: "06/10/2020",
            category: "Gift",
            amount: 500 ,
            comment: "Birthday gift from Mom"
        },
        {
            date: "06/8/2020",
            category: "Commission",
            amount: 800 ,
            comment: "July sales commission"
        }
    )
})

// GET /api/income/:id
IncomeController.get('/:id', JWTVerifier, ({body, params}, res) => {
    // update income
})

// GET /api/income/
IncomeController.get('/:id', JWTVerifier, (req, res) => {
    // delete income
})

module.exports = IncomeController;