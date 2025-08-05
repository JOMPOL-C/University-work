const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    // res.send("<h1>hello 🏠</h1>");
    res.sendFile(path.join(__dirname, "../" , "views" , "shop.html"));
}); 

module.exports = router;