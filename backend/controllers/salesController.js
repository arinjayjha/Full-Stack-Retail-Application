const Sale = require("../models/salesModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");

exports.getSales = async (req, res) => {
    const sales = await Sale.findAll({ include: [Customer, Product] });
    res.json(sales);
};
