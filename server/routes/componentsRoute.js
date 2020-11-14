const router = require("express").Router();
const ComponentsController = require("../controllers/componentsController");
const { authorizationAdmin } = require("../middlewares/auth");

router.get("/", ComponentsController.getAll);
router.get("/:component", ComponentsController.getAllOneType);
router.get("/:component/:id/detail", ComponentsController.getOne);
router.post("/:component/add", authorizationAdmin, ComponentsController.addOne);
router.delete("/:component/:id/delete", authorizationAdmin, ComponentsController.deleteOne);
router.put("/:component/:id/update", authorizationAdmin, ComponentsController.updateOne);

module.exports = router;
