const express = require("express");
const router = express.Router();
const { ConsultationSlotController } = require('../controllers');

router.post("/", ConsultationSlotController.create);
router.get("/:id", ConsultationSlotController.readOne);
router.get("/", ConsultationSlotController.readAll);
router.put("/:id", ConsultationSlotController.update);
router.delete("/:id", ConsultationSlotController.delete);

module.exports = router;
