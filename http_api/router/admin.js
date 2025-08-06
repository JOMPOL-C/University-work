const express = require('express');

const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/add-product.html"));
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

//สร้าง Array เพื่อเก็บข้อมูลสินค้า
const products = [];
router.post('/products', (req, res) => {
    const product = req.body.product;
    products.push(product);
    console.log(products);
    res.redirect('/');
});

module.exports = router;