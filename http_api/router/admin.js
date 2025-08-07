const express = require('express');

const path = require("path");

const router = express.Router();

const products = require('./shop.js').products;

router.get("/add-product", (req, res) => {
    console.log("In add-product");
    res.sendFile(path.join(__dirname, "../views/add-product.html"));
});

router.post('/product', (req, res) => {
    const { name, price, stock } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        stock: parseInt(stock)
    };

    products.push(newProduct);
    console.log("เพิ่มสินค้าใหม่:", newProduct);

    res.redirect('/');
});

module.exports = router;