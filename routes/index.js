const express = require("express");
const router = express.Router();

const patient = require('./patient')
const consultationSlot = require('./consultationslot')
const reservation = require('./reservation')

router.use("/patients", patient);
router.use("/consultation-slots", consultationSlot);
router.use("/reservations", reservation);

module.exports = router;
