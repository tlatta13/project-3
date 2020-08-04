const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const IncomeController = require('express').Router();

// Error Handler
const handleError = (err, res) => {
    console.log(err)
    res.sendStatus(500)
}

// POST /api/income
IncomeController.post('/', JWTVerifier, (req, res) => {
    // add new income
    req.user.incomes.push(
        {
            date: req.body.date,
            category: req.body.category,
            amount: req.body.amount,
            comment: req.body.comment
        }
    );
    req.user.save(function (err) {
        if (err) return handleError(err, res)
        console.log('New Income Added')
        res.sendStatus(200)
    })
})

// GET /api/income
IncomeController.get('/', JWTVerifier, (req, res) => {
    // get all income
    res.json(req.user.incomes);
})

// Delete income
IncomeController.delete('/:deleteId', JWTVerifier, (req, res) => {
    console.log(req.user)
    req.user.update({$pull:{incomes:{_id: req.params.deleteId}}}, (err) => {
        if (err) return handleError(err, res)
        console.log('Income deleted')
        res.sendStatus(200)
    })

})


module.exports = IncomeController;