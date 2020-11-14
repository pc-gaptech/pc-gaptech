const router = require("express").Router();

router.get("/:component");
router.get("/:component/:id/detail");
router.post("/:component/add");
router.delete("/:component/:id/delete");
router.put("/:component/:id/detail");

module.exports = router;
