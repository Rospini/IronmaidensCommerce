const mongoose = require("mongoose");
const Product = require("./models/Product.model");

mongoose
.connect('mongodb://localhost:27017/ecommerceApp')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));
Product.create();
Product.syncIndexes(); //https://github.com/Automattic/mongoose/issues/7396#issuecomment-452905218
//CREATE
const boatDetails1 = {
    title: "basic boat",
    price: 100,
    color: "pink"
}
const boatDetails2 = {
    title: "jet ski",
    price: 3000,
    color: "pink"
}
const boatDetails3 = {
    title: "yatch",
    price: 860000,
    color: "pink"
}
Product.insertMany([boatDetails1, boatDetails2, boatDetails3])
    .then( result => console.log(result))
    .catch();
//READ
Product.find()
    .then( result => console.log(result))
    .catch( error => console.log(error));
//UPDATE
Product.findByIdAndUpdate("61fbaa9cd14bcb705f30503a", {price: 200}).then().catch();
//DELETE
//Product.deleteOne({title: "basic boat"})
 //   .then( result => console.log("document deleted"))
 //   .catch();
//Closing DB connection
//(remember to wait for all other operations before closing the connection)