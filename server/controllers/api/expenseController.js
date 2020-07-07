const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const ExpenseController = require('express').Router();

ExpenseController.post('/', (req, res) => {
    // add new expense
})

// GET /api/expense
ExpenseController.get('/', JWTVerifier, (req, res) => {
    // get all expenses
    res.json(req.user.expenses);
})

ExpenseController.get('/:id', ({body, params}, res) => {
    // update expense
})

ExpenseController.get('/:id', (req, res) => {
    // delete expense
})