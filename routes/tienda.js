const axios = require('axios');
const express = require('express');
const router = express.Router();   

const URL_BASE = 'https://us-east-1.aws.data.mongodb-api.com/app/hays-app-vadnb/endpoint/tienda';

function errorMsg (method, error) {
    console.error(`ERROR IN ${method} REQUEST TIENDA`, error.message);
}

router.post('/', function(req, res, next) {

    axios.post(URL_BASE, {
        lat: req.body.lat,
        lng: req.body.lng,
        titulo: req.body.titulo,
        gerente: req.body.gerente,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        tipo: req.body.tipo
    })
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        errorMsg('POST', error);
        res.send({
            status: "error",
            msg: "post request error"
        });
    });
});

router.put('/', function(req, res, next) {
    
    axios.put(URL_BASE, {
        id: req.body.id,
        titulo: req.body.titulo,
        gerente: req.body.gerente,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        tipo: req.body.tipo
    })
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        errorMsg('POST', error);
    });
});

router.delete('/:id', function(req, res, next) {
    axios.delete(`${URL_BASE}?id=${req.params.id}`)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        errorMsg('POST', error);
    });
});

module.exports = router;
