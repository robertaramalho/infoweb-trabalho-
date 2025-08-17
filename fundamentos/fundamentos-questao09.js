function somaTamanhos(frase) {
  return frase.split(" ").reduce((soma, palavra) => soma + palavra.length, 0);
}

console.log(somaTamanhos("Eu gosto de programar"));
