const express = require("express");
const router = express.Router();
const { ReservationController } = require('../controllers');

router.post("/", ReservationController.create);
router.get("/:id", ReservationController.readOne);
router.get("/", ReservationController.readAll);
router.put("/:id", ReservationController.update);
router.delete("/:id", ReservationController.delete);

module.exports = router;
