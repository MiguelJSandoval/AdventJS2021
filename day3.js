function isValid(letter) {
    let parOpen = false;
    let parClose = false;
    let content = 0;
    let valid = true;
    for (let i = 0; i < letter.length; i++) {
      if (parOpen) {
        if (
          letter[i] == "[" ||
          letter[i] == "]" ||
          letter[i] == "{" ||
          letter[i] == "}"
        ) {
          valid = false;
          break;
        } else if (letter[i] == ")" && content > 0) {
          parClose = true;
          break;
        } else if (letter[i] != "(" && letter[i] != ")") content++;
        else {
          valid = false;
          break;
        }
      }
      if (!parOpen && letter[i] == "(") parOpen = true;
    }
    if (content == 0 || !parOpen || !parClose || !valid) return false;
    return valid;
  }

  console.log(isValid("bici coche (balón) bici coche peluche"))

  console.log(isValid("bici coche (balón bici coche"))