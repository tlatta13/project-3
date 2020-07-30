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
    // res.json(
    //     [
    //         {
    //             date: "06/30/2020",
    //             category: "Savings",
    //             amount: 200 ,
    //             comment: ""
    //         },
    //         {
    //             date: "05/30/2020",
    //             category: "Savings",
    //             amount: 200 ,
    //             comment: ""
    //         },
    //         {
    //             date: "04/30/2020",
    //             category: "Savings",
    //             amount: 300 ,
    //             comment: "July sales commission"
    //         }
    //     ]
    // )
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

SavingsController.delete('/:userid/:savingsid', (req, res) => {
    console.log(req.params.userid,req.params.savingsid)
    db.Users.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.userid)},{$pull: {savings: {_id:mongoose.Types.ObjectId(req.params.savingsid)}}}, function(err, data){
        if(err) {
          return res.status(500).json({'error' : 'error in deleting savings'});
        }

        res.json(data);

      });
    // delete expense
})



module.exports = SavingsController;