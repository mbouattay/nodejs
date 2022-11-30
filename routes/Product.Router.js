const router = require("express").Router();
const ProductController = require("../controllers/Product.Controller")
router.post("/create",ProductController.createProduct)
router.get("/",ProductController.getAllProducts)
module.exports = router;