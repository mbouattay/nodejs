const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    qte: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Product",ProductSchema);