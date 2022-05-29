const { getAllSpendings } = require("../repositories/spendingRepository");

const getSpendings = (req, res) => {
  const spendings = getAllSpendings();
  res.send(spendings);
};

module.exports = {
  getSpendings,
};
