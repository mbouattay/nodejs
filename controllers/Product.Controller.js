const product= require ("../models/Product.Model");
module.exports.createProduct = async (req,res) => {
    try {
        // get body content
        let {
            name,
            ref,
            prix,
            qte ,
            categorie
        
        } = req.body
        let newProduct = new product ({
            name: name,
            ref: ref,
            prix: prix,
            qte: qte,
            categorie:categorie
        })
        let savedProduct = await newProduct.save();
        return res.status(200).json({
            success: true,
            categorie: savedProduct
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllProducts = async (req,res) => {
    try {
        let products = await product.find().populate("categorie");
        return res.status(200).json({
            success: true,
            products
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}