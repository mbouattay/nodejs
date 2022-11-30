const router = require("express").Router();
const categorieController = require("../controllers/Categorie.Controller")
router.post("/create",categorieController.createCategorie)
router.get("/",categorieController.getAllCategories)
router.put("/edit/:classeId",categorieController.updateCategories)
router.delete("/delete/:classeId",categorieController.deleteCategorie)
router.get("/show/:classeId",categorieController.findCategorieById)
module.exports = router;
