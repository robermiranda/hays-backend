const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    axios.get('https://us-east-1.aws.data.mongodb-api.com/app/hays-app-vadnb/endpoint/tiendas')
    .then(response => {
        res.send(response.data);
    })
    .catch (error => {
        console.error('ERROR while request tiendas', error.message);
        res.json({
            status: "error",
            data: [],
            msg: "tiendas not loaded"
        });
    });
});

module.exports = router;
