const router = require("express").Router();
const FavoritesController = require("../controllers/favoritesController");
const { authorizationClient } = require("../middlewares/auth");

router.get("/", FavoritesController.getAll);
router.get("/:id/detail", authorizationClient, FavoritesController.getOne);
router.post("/add", FavoritesController.addOne);
router.delete("/:id/delete", authorizationClient, FavoritesController.deleteOne);

module.exports = router;
