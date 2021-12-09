function listGifts(letter) {
  let splitted = letter.split(" ");
  splitted = splitted.filter((item) => {
    if (item && item != " ") return item;
  });
  let rtn = {};
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i][0] != "_")
      rtn[splitted[i]] = rtn[splitted[i]] ? rtn[splitted[i]] + 1 : 1;
  }
  return rtn;
}

const carta = 'bici coche balón _playstation bici coche peluche'

console.log(listGifts(carta))