const router = require("express").Router();
const RecommendedConfigController = require("../controllers/recommendedConfigController");
const { authorizationAdmin } = require("../middlewares/auth");

router.get("/", RecommendedConfigController.getOne);
router.post("/", authorizationAdmin, RecommendedConfigController.addOne);

module.exports = router;
