function iniciais(nome) {
  let partes = nome.split(" ");
  let ult = partes.pop();
  let inic = partes.map(p => p[0] + ".").join(" ");
  return `${inic} ${ult}`;
}

console.log(iniciais("Alan Mathison Turing")); // "A. M. Turing"
