const User = require("../models/user.model");

module.exports.createUser = async (req,res) => {
    try {
        // get body content
        let { name,
            password,
            email,
            classe } = req.body
        let newUser = new User({
            name: name,
            password: password,
            email: email,
            classe: classe,
        })
        let savedUser = await newUser.save();
        return res.status(200).json({
            success: true,
            classe: savedUser
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllUsers = async (req,res) => {
    try {
        let users = await User.find().populate("classe");
        return res.status(200).json({
            success: true,
            users
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}