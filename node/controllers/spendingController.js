const {
  getAllSpendings,
  createSpending,
} = require("../repositories/spendingRepository");

const getSpendings = (req, res) => {
  const spendings = getAllSpendings();
  res.status(200).json(spendings);
};

const addSpending = (req, res) => {
  const errors = [];
  if (!req.body) {
    errors.push({ message: "Server error" });
    return res.status(500).json({ errors });
  }
  for (const attribute in req.body) {
    if (!req.body[attribute]) {
      errors.push({ missing: attribute, message: `Missing ${attribute}` });
    }
  }
  if (errors.length) {
    return res.status(400).json({ errors });
  }

  const newSpending = createSpending(req.body);
  return res.status(200).json(newSpending);
};

module.exports = {
  getSpendings,
  addSpending,
};
