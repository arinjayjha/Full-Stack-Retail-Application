const Customer = require("../models/customerModel");

exports.getCustomers = async (req, res) => {
    const customers = await Customer.findAll();
    res.json(customers);
};
