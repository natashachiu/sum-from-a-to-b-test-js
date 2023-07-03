
const sum = (fromN, toN) => {
  if (toN === fromN)
    return toN;

  return toN + sum(fromN, toN - 1);
};

// sum(3, 7)
// return 7 + sum(3, 6)
// return 6 + sum(3, 5)
// return 5 + sum(3, 4)
// return 4 + sum(3, 3)
// return 4 + 3
// return 5 + (4 + 3)
// return 6 + (5 + 4 + 3)
// return 7 + (6 + 5 + 4 + 3)

module.exports = sum;
