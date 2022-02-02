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
        imgSrc: "https://m.media-amazon.com/images/I/71iLHfq8yPL._AC_SL1500_.jpg"
    };
    response.render("product", boatDetails);
});

app.get("/product-jet-ski", function(request, response, next){
    const boatDetails = {
        title: "Jet Ski",
        price: 3000,
        imgSrc: "https://checkyeti.imgix.net/images/prod/products/16829/jet-ski-hire-on-kamari-beach-in-santorini-kamari-beach-watersports-santorini.jpg"
    };
    response.render("product", boatDetails);
});

app.get("/product-yatch", function(request, response, next){
    const boatDetails = {
        title: "Yatch",
        price: 856000,
        imgSrc: "https://yachtharbour.com/static/images/y/large_146_0d06c.jpg"
    };
    response.render("product", boatDetails);
});


app.listen(3000, () => { console.log("server listening....");});