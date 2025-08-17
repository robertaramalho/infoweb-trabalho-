let numeros = [1, 2, 3, 4, 5];
let soma = numeros.map(x => x**3).reduce((a,b) => a+b, 0);

console.log("Soma:", soma);
