const router = require("express").Router();
const componentRoute = require("./componentsRoute");
const favoritesRoute = require("./favoritesRoute");
const gamesRoute = require("./gamesRoute");
const userRoute = require("./userRoute");

router.post("/login");
router.post("/register");

// AUTHENTICATION DI SINI

router.post("/checkconfig");

router.use("/parts", componentRoute);
router.use("/favorites", favoritesRoute);
router.use("/games", gamesRoute);
router.use("/users", userRoute);

module.exports = router;
