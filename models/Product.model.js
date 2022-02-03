const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    imgSrc: {
        type: String,
        default: "https://via.placeholder.com/700x400"
    },
    color: {
        type: String,
        enum: ["green", "red", "pink", "white", "black"]
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;