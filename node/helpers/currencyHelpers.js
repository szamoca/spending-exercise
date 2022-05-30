const USD_TO_HUF_MULTIPLIER = 367;

const getAmountInHUF = (spending) => {
  return spending.currency === "HUF" ? spending.amount : spending.amount * 367;
};

module.exports = {
  getAmountInHUF,
};
