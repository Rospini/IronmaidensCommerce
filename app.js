const express = require("express");
const hbs = require("hbs");
const app = express();

const mongoose = require("mongoose");
const Product = require("./models/Product.model");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static('public'));


// connect to DB
mongoose
    .connect('mongodb://localhost/ecommerceApp')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


app.get("/", function (request, response, next) {
    Product.find()
        .then((products) => {
            response.render("home", { products: products });
        })
        .catch(error => console.log("error getting data from DB", error));
});


app.get("/contact", function (request, response, next) {
    response.render("contact");
});


// example url: http://localhost:3000/products/luxury-yatch/61fbd85a1f01432545d1599b/

app.get("/products/:productTitle/:productId", function (request, response, next) {
    Product.findById(request.params.productId)
        .then(productFromDB => {
            response.render("product", productFromDB);
        })
        .catch(error => console.log("error getting data from DB", error));
})


app.listen(3000, () => { console.log("server listening...."); });