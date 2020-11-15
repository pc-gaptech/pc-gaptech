const router = require("express").Router();
const GamesController = require("../controllers/gamesController");
const { authorizationAdmin } = require("../middlewares/auth");

router.get("/", GamesController.fetchAllGames);
router.post("/add", authorizationAdmin, GamesController.addGame);
router.get("/recommend", GamesController.recommendedGames);

module.exports = router;
