const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const SavingsController = require('express').Router();

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
    // res.json(req.user.savings); working route
    res.json(
        [
            {
                date: "06/30/2020",
                category: "Savings",
                amount: 200 ,
                comment: ""
            },
            {
                date: "05/30/2020",
                category: "Savings",
                amount: 200 ,
                comment: ""
            },
            {
                date: "04/30/2020",
                category: "Savings",
                amount: 300 ,
                comment: "July sales commission"
            }
        ]
    )
})

// GET /api/income/:id
SavingsController.get('/:id', JWTVerifier, ({body, params}, res) => {
    // update income
})

// GET /api/income/
SavingsController.get('/:id', JWTVerifier, (req, res) => {
    // delete income
    req.user.savings.pull(_id);

    req.user.save(function (err) {
        if (err) return handleError(err, res)
        console.log('Savings deleted')
        res.sendStatus(200)
    })
})

module.exports = SavingsController;