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

// Delete Expense
ExpenseController.delete('/:deleteId', JWTVerifier, (req, res) => {
    // console.log(req.user)
    req.user.update({$pull:{expenses:{_id: req.params.deleteId}}}, (err) => {
        if(err) return handleError(err, res)
        console.log('Expense Deleted')
        res.sendStatus(200);
      });
})

module.exports = ExpenseController