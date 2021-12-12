function shouldBuyFidelity(times) {
  let normalCost = times * 12
  let fidelityCost = 250
  for (let i = 1; i <= times; i++)
    fidelityCost += (12 * Math.pow(0.75, i)) 
  return fidelityCost < normalCost;
}

console.log(shouldBuyFidelity(100))
