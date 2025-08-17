function verifica(a, b) {
  return (a === 30 || b === 30 || (a + b === 30));
}

console.log(verifica(30, 5));  // true
console.log(verifica(10, 20)); // true
console.log(verifica(5, 7));   // false
