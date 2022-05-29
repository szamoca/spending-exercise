const getSpendings = (req, res) => {
  res.send([
    {
      description: "Mango",
      amount: 1200,
      spent_at: new Date().toISOString(),
      currency: "USD",
    },
  ]);
};

module.exports = {
  getSpendings,
};
