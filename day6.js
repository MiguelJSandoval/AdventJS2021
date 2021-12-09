function sumPairs(numbers, result) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) map[numbers[i]] = i;
  for (let i = 0; i < numbers.length; i++) {
    let faltante = result - numbers[i];
    if (map[faltante] && map[faltante] != i) return [numbers[i], faltante];
  }
  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10))

console.log(sumPairs([-3, -2, 7, -5], 10))
