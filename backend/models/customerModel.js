const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Customer = sequelize.define("Customer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Customer;
