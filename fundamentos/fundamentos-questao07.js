function modifica(frase) {
  return frase.split(" ").map(palavra => {
    if (palavra.length < 5) return palavra.toUpperCase();
    else return palavra.toLowerCase();
  }).join(" ");
}

console.log(modifica("Hoje É Um Bom Dia Para Estudar"));
