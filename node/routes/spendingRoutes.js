const express = require("express");
const router = express.Router();
const { getSpendings, addSpending } = require("../controllers/spendingController");

router.get("/", getSpendings);
router.post("/", addSpending);

module.exports = router;
