function maxProfit(prices) {
  let globalMax = -1;
  for (let i = 0; i < prices.length; i++) {
    let max = -1;
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (diff > 0 && diff > max) max = diff;
    }
    if (max > 0 && max > globalMax) globalMax = max;
  }
  return globalMax;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];

const pricesDoge = [18, 15, 12, 11, 9, 7];

console.log(maxProfit(pricesBtc));

console.log(maxProfit(pricesDoge));
