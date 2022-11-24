const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    classe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classe"
    }
})

module.exports = mongoose.model("User",userSchema)