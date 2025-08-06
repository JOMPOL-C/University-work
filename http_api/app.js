const express = require("express");

const path = require("path");

const app = express();

const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop.js");

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

app.use(adminRouter);
app.use(shopRouter);

app.use( (req ,res) => {
    console.log("Page not found");
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});


app.listen(3000);