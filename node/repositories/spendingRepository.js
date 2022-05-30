const { getAmountInHUF } = require("../helpers/currencyHelpers");

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

const getAllSpendings = (filter, ordering) => {
  let transformedSpendings = spendings.slice(0);
  if (filter) {
    transformedSpendings = transformedSpendings.filter(
      (spending) => spending.currency === filter
    );
  }
  switch (ordering) {
    case "-date":
      transformedSpendings.sort((a, b) => b.id - a.id);
      break;
    case "date":
      transformedSpendings.sort((a, b) => a.id - b.id);
      break;
    case "-amount_in_huf":
      transformedSpendings.sort(
        (a, b) => getAmountInHUF(b) - getAmountInHUF(a)
      );
      break;
    case "amount_in_huf":
      transformedSpendings.sort(
        (a, b) => getAmountInHUF(a) - getAmountInHUF(b)
      );
      break;
    default:
      transformedSpendings.sort((a, b) => b.id - a.id);
      break;
  }

  return transformedSpendings;
};

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
