function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "Error";
  }
  if (typeof numero2 !== "number") {
    return "Error";
  }
  return numero1 + numero2;
}

function dividir(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "Error";
  }
  if (typeof numero2 !== "number") {
    return "Error";
  }
  return numero1 / numero2;
}

exports.somar = somar;
exports.dividir = dividir;
