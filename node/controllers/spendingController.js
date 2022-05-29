const {
  getAllSpendings,
  createSpending,
} = require("../repositories/spendingRepository");

const getSpendings = (req, res) => {
  const spendings = getAllSpendings();
  res.status(200).send(spendings);
};

const addSpending = (req, res) => {
  const newSpending = createSpending(req.body);
  res.status(200).send(newSpending);
};

module.exports = {
  getSpendings,
  addSpending,
};
