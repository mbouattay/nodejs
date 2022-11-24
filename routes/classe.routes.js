const router = require("express").Router();
const classeController = require("../controllers/classe.controllers")
router.post("/create",classeController.createClasse)
router.get("/",classeController.getAllClasses)
router.put("/edit/:classeId",classeController.updateClasse)
router.delete("/delete/:classeId",classeController.deleteClasse)
router.get("/show/:classeId",classeController.findClasseById)
module.exports = router;
