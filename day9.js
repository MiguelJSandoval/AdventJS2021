function groupBy(collection, it) {
  let isFun = typeof it === "function";
  let keys = {};
  collection.forEach((val) => {
    if (typeof val === "object") {
      Object.entries(val).forEach(([key, value]) => {
        if (key == it) {
          if (keys[value]) keys[value].push(val);
          else keys[value] = [val];
        }
      });
    } else {
      let k = isFun ? it(val) : val[it];
      if (keys[k]) keys[k].push(val);
      else keys[k] = [val];
    }
  });
  return keys;
}

console.log(
  groupBy(
    [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ],
    "rating"
  )
);
