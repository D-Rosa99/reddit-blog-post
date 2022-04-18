export const votesFormat = (votes) => {
  if (votes > 10000) {
    votes = (votes / 1000).toFixed(1) + "K";
  }

  return votes;
};
