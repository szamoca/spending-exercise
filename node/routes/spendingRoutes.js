const express = require("express");
const router = express.Router();
const { getSpendings } = require("../controllers/spendingController");

router.get("/", getSpendings);

module.exports = router;
