const mongoose = require("mongoose");

const CategorieSchema = new mongoose.Schema({
    name_cat: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Categorie",CategorieSchema);