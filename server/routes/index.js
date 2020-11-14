const router = require("express").Router();
const componentRoute = require("./componentsRoute");
const favoritesRoute = require("./favoritesRoute");
const gamesRoute = require("./gamesRoute");

router.post("/login");
router.post("/register");

// AUTHENTICATION DI SINI

router.post("/checkconfig");

router.use("/parts", componentRoute);
// router.use("/favorites", favoritesRoute);
// router.use("/favorites", gamesRoute);

module.exports = router;
