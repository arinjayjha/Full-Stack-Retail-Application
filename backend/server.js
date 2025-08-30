const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const Customer = require("./models/customerModel");
const Product = require("./models/productModel");
const Sale = require("./models/salesModel");

// Init express app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const salesRoutes = require("./routes/salesRoutes");

app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sales", salesRoutes);

// Database sync & seed
sequelize.sync().then(async () => {
    console.log("Database synced ✅");

    // Customers
    const customerCount = await Customer.count();
    if (customerCount === 0) {
        await Customer.bulkCreate([
            { name: "Arinjay", email: "arinjay@jha.com" },
            { name: "Divu", email: "jay@example.com" }
        ]);
        console.log("✅ Customers seeded");
    } else {
        console.log("ℹ️ Customers already exist, skipping seed");
    }

    // Products
    const productCount = await Product.count();
    if (productCount === 0) {
        await Product.bulkCreate([
            { name: "Laptop", price: 1000 },
            { name: "Phone", price: 500 }
        ]);
        console.log("✅ Products seeded");
    } else {
        console.log("ℹ️ Products already exist, skipping seed");
    }

    // Sales
    const saleCount = await Sale.count();
    if (saleCount === 0) {
        await Sale.bulkCreate([
            { CustomerId: 1, ProductId: 2, amount: 500 },
            { CustomerId: 2, ProductId: 1, amount: 1000 }
        ]);
        console.log("✅ Sales seeded");
    } else {
        console.log("ℹ️ Sales already exist, skipping seed");
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
