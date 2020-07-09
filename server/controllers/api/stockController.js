const axios = require("axios");

const stockController = require('express').Router();

stockController.get("/", (req, res) => {
    axios({
        "method": "GET",
        "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "useQueryString": true
        }, "params": {
            "region": "US",
            "lang": "en"
        }
    })
        .then((response) => {
            console.log(response)
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
})



module.exports = stockController