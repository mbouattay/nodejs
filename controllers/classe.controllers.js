const Classe = require("../models/classe.model");

module.exports.createClasse = async (req,res) => {
    try {
        // get body content
        let { name } = req.body
        let newClasse = new Classe({
            name: name
        })
        let savedClasse = await newClasse.save();
        return res.status(200).json({
            success: true,
            classe: savedClasse
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllClasses = async (req,res) => {
    try {
        let classes = await Classe.find();
        return res.status(200).json({
            success: true,
            classes
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.updateClasse = async (req,res) => {
    try {
        let {classeId} = req.params;
        let { name } = req.body;

        let updatedClasse = await Classe.findByIdAndUpdate(classeId,{
            $set: {
                name: name
            }
        },{new: true});
        return res.status(200).json({
            success: true,
            classe: updatedClasse
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteClasse = async (req,res) => {
    try {
        let {classeId} = req.params;
        await Classe.findByIdAndDelete(classeId);
        return res.status(200).json({
            success: true,
            message: "classe deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.findClasseById = async (req,res) => {
    try {
        let {classeId} = req.params;
        let getClasse = await Classe.findById(classeId);
        return res.status(200).json({
            success: true,
            classe: getClasse
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}




