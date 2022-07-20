function minCoins(coins, m, V) {

  // table[i] will be storing
  // the minimum number of coins
  // required for i value. So
  // table[V] will have result
  let table = new Array(V + 1);
  for (let i = 0; i < V + 1; i++) {
    table[i] = 0;
  }

  // Initialize all table values as Infinite
  for (let i = 1; i <= V; i++) {
    table[i] = Number.MAX_VALUE;
  }

  // Compute minimum coins required for all
  // values from 1 to V
  for (let i = 1; i <= V; i++) {
    // Go through all coins smaller than i
    for (let j = 0; j < m; j++)
      if (coins[j] <= i) {
        if (table[i - coins[j]] !== Number.MAX_VALUE) {
          table[i] = Math.min(table[i - coins[j]] + 1, table[i]);
        }
      }
  }

  if (table[V] === Number.MAX_VALUE)
    return -1;

  return table[V];
}

// Driver program
let coins = [9, 6, 5, 1];
let m = coins.length;
let V = 11;
console.log("Minimum coins required is " + minCoins(coins, m, V));