const express = require("express");
const router = express.Router();
const { PatientController } = require('../controllers');

router.post("/", PatientController.create);
router.get("/:id", PatientController.readOne);
router.get("/", PatientController.readAll);
router.put("/:id", PatientController.update);
router.delete("/:id", PatientController.delete);

module.exports = router;
