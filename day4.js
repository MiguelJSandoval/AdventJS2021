function createXmasTree(height) {
  let spaces = (height * 2 - 2) / 2;
  let base = "";
  for (let i = 0; i < spaces; i++) base += "_";
  let base2 = `${base}#${base}\n${base}#${base}`;
  let tree = "";
  let ast = 1;
  for (let i = 0; i < height; i++) {
    let space = "";
    if (spaces > 0) {
      for (let j = 0; j < spaces; j++) {
        space += "_";
      }
    }
    tree += space;
    for (let j = 0; j < ast; j++) tree += "*";
    tree += space;
    ast += 2;
    spaces--;
    tree += "\n";
  }
  tree += base2;
  return tree;
}

console.log(createXmasTree(5));
