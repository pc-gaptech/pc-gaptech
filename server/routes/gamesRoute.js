const GamesController = require("../controllers/gamesController");

const router = require("express").Router();

router.get("/", GamesController.fetchAllGames);
router.post("/add", GamesController.addGame);
router.get("/recommend", GamesController.recommendedGames);

module.exports = router;
