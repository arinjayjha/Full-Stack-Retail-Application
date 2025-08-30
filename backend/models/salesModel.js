const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Customer = require("./customerModel");
const Product = require("./productModel");

const Sale = sequelize.define("Sale", {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// Relationships
Customer.hasMany(Sale);
Sale.belongsTo(Customer);

Product.hasMany(Sale);
Sale.belongsTo(Product);

module.exports = Sale;
