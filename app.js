const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


app.use(express.static('public'));


app.get("/", function(request, response, next){
    response.sendFile(__dirname + '/views/home.html');
});

app.get("/contact", function(request, response, next){
    response.sendFile(__dirname + '/views/contact.html');
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