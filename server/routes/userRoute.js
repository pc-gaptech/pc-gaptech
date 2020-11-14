const UserController = require("../controllers/userContoller");

const router = require("express").Router();

router.post("/register", UserController.registerHandler);
router.post("/login", UserController.loginHandler);

module.exports = router;
