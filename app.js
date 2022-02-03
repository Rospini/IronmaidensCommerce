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


app.get("/", function(request, response, next){
    Product.find()
        .then( (products) => {
            response.render("home", {products: products});
        })
        .catch( error => console.log("error getting data from DB", error));
});

app.get("/contact", function(request, response, next){
    response.render("contact");
});


app.get("/product-boat", function(request, response, next){
    const boatDetails = {
        title: "Boat",
        price: 100,
        seller: {
            name: "bob",
            rating: 4.5
        }
    };
    response.render("product", boatDetails);
});

app.get("/product-jet-ski", function(request, response, next){
    const jetSkiDetails = {
        title: "Jet Ski",
        price: 3000,
        imgSrc: "https://checkyeti.imgix.net/images/prod/products/16829/jet-ski-hire-on-kamari-beach-in-santorini-kamari-beach-watersports-santorini.jpg",
        categories: ["leisure", "sports"]
    };
    response.render("product", jetSkiDetails);
});

app.get("/product-yatch", function(request, response, next){
    const yatchDetails = {
        title: "Yatch",
        price: 856000,
        imgSrc: "https://yachtharbour.com/static/images/y/large_146_0d06c.jpg",
        categories: ["luxury", "bart", "toys"]
    };
    response.render("product", yatchDetails);
});



app.listen(3000, () => { console.log("server listening....");});