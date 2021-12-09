function contains(store, product) {
  let found = false;
  const recorreArray = (store) => {
    Object.entries(store).forEach(([key, value]) => {
      if (typeof value === "object") {
        recorreArray(value);
      } else if (value == product) {
        found = true;
      }
    });
  };
  recorreArray(store);
  return found;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, "camiseta"));
