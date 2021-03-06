const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const SavingsController = require('express').Router();
const mongoose = require ('mongoose')
// Error Handler
const handleError = (err, res) => {
    console.log(err)
    res.sendStatus(500)
}

// POST /api/income
SavingsController.post('/', JWTVerifier, (req, res) => {
    // add new income
    req.user.savings.push(
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
SavingsController.get('/', JWTVerifier, (req, res) => {
    // get all income
    res.json(req.user.savings);
})

// Delete savings
SavingsController.delete('/:deleteId', JWTVerifier, (req, res) => {
    console.log(req.user)
    req.user.update({$pull:{savings:{_id: req.params.deleteId}}}, (err) => {
        if(err) return handleError(err, res)
        console.log('Savings deleted')
        res.sendStatus(200)
      });
})



module.exports = SavingsController;