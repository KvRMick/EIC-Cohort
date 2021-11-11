'use strict';
var express = require('express');
var router = express.Router();
var customers = require("../mockdata/customer.json")

/* GET home page. */
router.get('/', function (req, res) {
    res.json( customers );
});


module.exports = router;