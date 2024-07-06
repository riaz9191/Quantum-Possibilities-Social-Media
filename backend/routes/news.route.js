const router = require('express').Router();
const testController = require("../controllers/news.controller");

router.post("/setTest", testController.setTest);
router.get("/getTest", testController.getTest);
router.get("/getTest/:id", testController.getTestOne);
router.put("/getTest/:id", testController.updateTest);
router.patch("/getTest/:id", testController.updateTest);
router.delete("/getTest/:id", testController.deleteTest);
module.exports = router;
