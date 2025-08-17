function maiorMenor(lista) {
  let maior = Math.max(...lista);
  let menor = Math.min(...lista);
  return { maior, menor };
}
