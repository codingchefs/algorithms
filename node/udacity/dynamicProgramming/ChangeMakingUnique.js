const changeMakingUnique = (coins, amount) => {
  let table = new Array(amount + 1);
  for (let i = 0; i < amount + 1; i++) {
    table[i] = 0;
  }

  // Initialize all table values as Infinite
  for (let i = 1; i <= amount; i++) {
    table[i] = Number.MAX_VALUE;
  }

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins; j++)
      if (coins[j] <= i) {
        if (table[i - coins[j]] !== Number.MAX_VALUE) {
          table[i] = Math.min(table[i - coins[j]] + 1, table[i]);
        }
      }
  }

  if (table[amount] === Number.MAX_VALUE)
    return -1;

  return table[amount];
};

const coins = [1, 2, 5];
const value = 11;
console.log(changeMakingUnique(coins, value));
