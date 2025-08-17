let alunos = [
  ["Aluno1", [10, 50, 100]],
  ["Aluno2", [55, 78, 90]],
  ["Aluno3", [60, 65, 70]],
  ["Aluno4", [100, 90, 95]],
  ["Aluno5", [40, 50, 60]]
];

for (let aluno of alunos) {
  let nome = aluno[0];
  let notas = aluno[1];
  let soma = notas.reduce((acc, n) => acc + n, 0);
  let media = soma / notas.length;
  let status = media < 70 ? "Reprovado" : "Aprovado";

  console.log(`${nome}, Média: ${media.toFixed(2)}, ${status}`);
}
