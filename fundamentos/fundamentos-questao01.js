let agora = new Date();
let diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

let diaSemana = diasSemana[agora.getDay()];
let hora = agora.toTimeString().split(" ")[0];

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${hora}`);
