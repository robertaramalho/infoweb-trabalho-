function celsiusToF(c) {
  return (c * 9/5) + 32;
}
function fahrenheitToC(f) {
  return (f - 32) * 5/9;
}

console.log("30°C =", celsiusToF(30), "°F");
console.log("86°F =", fahrenheitToC(86), "°C");
