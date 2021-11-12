'use strict';
var express = require('express');
var router = express.Router();
var orders = require("../public/mockdata/orders.json");

module.exports = function () {
	router
		.route('/')
		.get((req, res, next) => {
			res.json(orders);
		})
		.post((req, res) => {
			// validate and post new orders
		});
	return router;
};
