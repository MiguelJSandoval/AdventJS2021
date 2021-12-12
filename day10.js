function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  let changeCoins = [0, 0, 0, 0, 0, 0];
  for (let i = 5; i >= 0; i--) {
    while (true) {
      let changeAux = change - coins[i];
      if (changeAux >= 0) {
        change = changeAux;
        changeCoins[i]++;
      } else break;
    }
    if (change == 0) break;
  }
  return changeCoins;
}

console.log(getCoins(16));
