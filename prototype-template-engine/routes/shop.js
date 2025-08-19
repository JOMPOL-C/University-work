const express = require("express");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res) => {
  res.render("shop", {
    pageTitle: "My Shop Mak Mak",
    prods: adminData.products,
    hasProducts: adminData.products.length > 0
  });
});

module.exports = router;
