const router = require("express").Router();
const ComponentsController = require("../controllers/componentsController");

router.get("/", ComponentsController.getAll);
router.get("/:component", ComponentsController.getAllOneType);
router.get("/:component/:id/detail", ComponentsController.getOne);
router.post("/:component/add", ComponentsController.addOne);
router.delete("/:component/:id/delete", ComponentsController.deleteOne);
router.put("/:component/:id/update", ComponentsController.updateOne);

module.exports = router;
