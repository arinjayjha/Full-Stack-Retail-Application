const { Sequelize } = require("sequelize");

// Create SQLite database stored in file retailtech.db
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./retailtech.db"
});

module.exports = sequelize;
