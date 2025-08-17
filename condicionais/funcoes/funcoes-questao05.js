function maiorPalavra(frase) {
  let palavras = frase.split(" ");
  return palavras.reduce((maior, atual) => 
    atual.length > maior.length ? atual : maior
  );
}
