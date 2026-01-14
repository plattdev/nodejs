export function suma(a, b) {
  return a + b
}

//function resta
export function resta(a, b) {
  return a - b
}

//function multiplica
export function multiplica(a, b) {
  return a * b
}

//function divide
export function divide(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b
}
