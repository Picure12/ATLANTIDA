function sumar(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

const valores = [2, 5, 3];
console.log(sumar(...valores));
console.log(sumar());