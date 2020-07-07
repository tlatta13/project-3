const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const IncomeController = require('express').Router();

IncomeController.post('/', JWTVerifier, (req, res) => {
    // add new income
})

// GET /api/income
IncomeController.get('/', JWTVerifier, (req, res) => {
    // get all income
    res.json(req.user.incomes);
})

IncomeController.get('/:id', JWTVerifier, ({body, params}, res) => {
    // update income
})

IncomeController.get('/:id', JWTVerifier, (req, res) => {
    // delete income
})

module.exports = IncomeController;