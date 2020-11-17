const router = require("express").Router();
const componentRoute = require("./componentsRoute");
const favoritesRoute = require("./favoritesRoute");
const gamesRoute = require("./gamesRoute");
const userRoute = require("./userRoute");
const recommendpc = require("./recommendedRoute");

const CheckConfigController = require("../controllers/checkConfigController");
const PriceCheckController = require("../controllers/priceCheckController");
const { authentication } = require("../middlewares/auth");

router.use("/", userRoute);

router.post("/checkconfig", CheckConfigController.check);
router.get("/:shop/checkprice", PriceCheckController.checkPrice);

router.use(authentication);

router.use("/parts", componentRoute);
router.use("/favorites", favoritesRoute);
router.use("/games", gamesRoute);
router.use("/recommendpc", recommendpc);

module.exports = router;
