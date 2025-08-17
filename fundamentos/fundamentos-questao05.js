function checar(a, b, c) {
  if ((a >= 50 && a <= 99) && (b >= 50 && b <= 99) && (c >= 50 && c <= 99)) {
    console.log("Sucesso!");
  } else {
    console.log("Erro!");
  }
}

checar(60, 70, 80);
checar(45, 70, 90);
