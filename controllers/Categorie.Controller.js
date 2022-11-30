const Categorie = require("../models/Categorie.Model");

module.exports.createCategorie = async (req,res) => {
    try {
        // get body content
        let { name_cat } = req.body
        let newCategorie = new Categorie({
            name_cat: name_cat
        })
        let savedCategorie = await newCategorie.save();
        return res.status(200).json({
            success: true,
            categorie: savedCategorie
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllCategories = async (req,res) => {
    try {
        let categories = await Categorie.find();
        return res.status(200).json({
            success: true,
            categories
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.updateCategories = async (req,res) => {
    try {
        let {categorieId} = req.params;
        let { name_cat } = req.body;

        let updatedCategorie = await Classe.findByIdAndUpdate(categorieId,{
            $set: {
                name_cat: name_cat
            }
        },{new: true});
        return res.status(200).json({
            success: true,
            categorie: updatedCategorie
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteCategorie = async (req,res) => {
    try {
        let {categorieId} = req.params;
        await Categorie.findByIdAndDelete(categorieId);
        return res.status(200).json({
            success: true,
            message: "categorie deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.findCategorieById = async (req,res) => {
    try {
        let {categorieId} = req.params;
        let getCategorie = await Classe.findById(categorieId);
        return res.status(200).json({
            success: true,
            categorie: getCategorie
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}




