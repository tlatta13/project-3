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
    console.log('WE R ABOUT TO POST NEW INCOME', req.body)
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
    console.log('test test')
    let userId = mongoose.Types.ObjectId("5f05fe732ed9bfd2551c4cbe")

    db.Incomes.findAll({ where: { UserId: req.user.id }})
        .then((incomes) => res.json(incomes))
        .catch((err) => res.status(500).json(err));

    
    // res.json(req.user.incomes); working route
    // res.json(
    //     [
    //         {
    //             date: "06/1/2020",
    //             category: "Paycheck",
    //             amount: 4000 ,
    //             comment: ""
    //         },
    //         {
    //             date: "06/10/2020",
    //             category: "Gift",
    //             amount: 500 ,
    //             comment: "Birthday gift from Mom"
    //         },
    //         {
    //             date: "06/8/2020",
    //             category: "Commission",
    //             amount: 800 ,
    //             comment: "July sales commission"
    //         },
    //         {
    //             date: "06/8/2020",
    //             category: "Commission",
    //             amount: 800 ,
    //             comment: "July sales commission"
    //         }
    //     ]
    // )
})

// GET /api/income/:id
IncomeController.get('/:id', JWTVerifier, ({body, params}, res) => {
    // update income
})

// GET /api/income/
IncomeController.get('/:id', JWTVerifier, (req, res) => {
    // delete income
    req.user.expenses.pull(_id);

    req.user.save(function (err) {
        if (err) return handleError(err, res)
        console.log('Income deleted')
        res.sendStatus(200)
    })
})

module.exports = IncomeController;

