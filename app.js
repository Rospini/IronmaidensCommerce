const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(request, response, next){
    response.sendFile(__dirname + '/views/home.html');
});

app.get("/contact", function(request, response, next){
    response.sendFile(__dirname + '/views/contact.html');
});

app.get("/product-boat", function(request, response, next){
    // response.sendFile(__dirname + '/views/product-boat.html');

    response.render("product");

});

app.get("/product-jet-ski", function(request, response, next){
    response.sendFile(__dirname + '/views/product-jet-ski.html');
});

app.get("/product-yatch", function(request, response, next){
    response.sendFile(__dirname + '/views/product-yatch.html');
});

app.listen(3000, () => { console.log("server listening....");});