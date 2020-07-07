const db = require('../../models');
const ExpenseController = require('express').Router();

ExpenseController.post('api/expense', (req, res) => {
    // add new expense
})

ExpenseController.get('api/expense', (req, res) => {
    // get all expense
})

ExpenseController.get('api/expense/:id', ({body, params}, res) => {
    // update expense
})

ExpenseController.get('api/expense/:id', (req, res) => {
    // delete expense
})