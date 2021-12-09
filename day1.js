const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

function contarOvejas(ovejas) {
  let rtn = [];
  for (let i = 0; i < ovejas.length; i++) {
    if (
      (ovejas[i].name.includes("A") || ovejas[i].name.includes("a")) &&
      (ovejas[i].name.includes("n") || ovejas[i].name.includes("N")) &&
      ovejas[i].color.includes("rojo")
    ) {
      rtn.push(ovejas[i]);
    }
  }
  return rtn;
}

console.log(contarOvejas(ovejas))
