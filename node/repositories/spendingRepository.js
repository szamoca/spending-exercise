// This file should obviously handle db calls and such, but for now it modifies the in-memory server data
const spendings = [
  {
    description: "Mango",
    amount: 1200,
    spent_at: new Date().toISOString(),
    currency: "USD",
  },
];

const getAllSpendings = () => spendings;

module.exports = {
  getAllSpendings,
};
