const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(request, response, next){
    response.sendFile(__dirname + '/views/home.html');
});

app.get("/contact", function(request, response, next){
    response.sendFile(__dirname + '/views/contact.html');
});


app.listen(3000, () => { console.log("server listening....");});