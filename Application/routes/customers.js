var express = require('express');
var router = express.Router();
var customers = require('../mockData/customers.json');

module.exports =  function () {
	router
		.route('/')
		.get(async (req, res, next) => {
            res.json(customers)
		})
		.post((req, res) => {
			// validate and post new customer
		});

	router
		.route('/:id')
		.get((req, res, next) => {
			let found=false
			customers.customers.forEach((customer) => { 
				if (customer.customer_id === Number(req.params.id)) {
					res.send(customer);
					found=true
				}
				
			});
			if (!found) {		
				res.status(404).render('error', {error: 404})
			}
		})
		.put((req, res) => {
			// editing customer
		});

	return router;
};
