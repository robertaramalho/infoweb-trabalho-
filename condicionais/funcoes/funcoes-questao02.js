function contarVogaisConsoantes(frase) {
  let vogais = "aeiouAEIOU";
  let qtdVogais = 0;
  let qtdConsoantes = 0;

  for (let letra of frase) {
    if (/[a-zA-Z]/.test(letra)) {
      if (vogais.includes(letra)) {
        qtdVogais++;
      } else {
        qtdConsoantes++;
      }
    }
  }

  return { vogais: qtdVogais, consoantes: qtdConsoantes };
}
