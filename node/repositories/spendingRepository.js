// This file should obviously handle db calls and such, but for now it modifies the in-memory server data
const spendings = [
  {
    id: 1,
    description: "Mango",
    amount: 12,
    spent_at: new Date().toISOString(),
    currency: "USD",
  },
];

const getAllSpendings = () => spendings;

const createSpending = (spending) => {
  const newSpending = {
    id: spendings[spendings.length - 1].id + 1,
    ...spending,
    spent_at: new Date().toISOString(),
  };
  spendings.push(newSpending);
  // If I had a real db I would return the newly created db object in case of success, with ID and everything
  return newSpending;
};

module.exports = {
  getAllSpendings,
  createSpending,
};
