const db = require('../../models');
const { JWTVerifier } = require("../../lib/passport");
const IncomeController = require('express').Router();
const mongoose = require ('mongoose')
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

IncomeController.delete('/:userid/:incomesid', (req, res) => {
    console.log(req.params.userid,req.params.incomesid)
    db.Users.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.userid)},{$pull: {incomes: {_id:mongoose.Types.ObjectId(req.params.incomesid)}}}, function(err, data){
        if(err) {
          return res.status(500).json({'error' : 'error in deleting address'});
        }

        res.json(data);

      });
    // delete expense
})


module.exports = IncomeController;