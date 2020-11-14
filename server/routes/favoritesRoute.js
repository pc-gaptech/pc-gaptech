const router = require("express").Router();

const FavoriteController = require("../controllers/favoritesController");
const FavoritesController = require("../controllers/favoritesController");

router.get("/", FavoritesController.getAll);
router.get("/:id/detail", FavoriteController.getOne);
router.post("/add", FavoritesController.addOne);
router.delete("/:id/delete", FavoritesController.deleteOne);

module.exports = router;
