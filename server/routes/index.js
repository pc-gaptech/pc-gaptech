const router = require("express").Router();
const componentRoute = require("./componentsRoute");
const favoritesRoute = require("./favoritesRoute");
const gamesRoute = require("./gamesRoute");
const userRoute = require("./userRoute");

const CheckConfigController = require("../controllers/checkConfigController");

router.use("/", userRoute);
router.post("/checkconfig", CheckConfigController.check);

router.use("/parts", componentRoute);
router.use("/favorites", favoritesRoute);
router.use("/games", gamesRoute);

module.exports = router;
