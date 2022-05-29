const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send([
    {
      description: "Mango",
      amount: 1200,
      spent_at: new Date().toISOString(),
      currency: "USD",
    },
  ]);
});

module.exports = router;
