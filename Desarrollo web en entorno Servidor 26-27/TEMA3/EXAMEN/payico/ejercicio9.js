
function calcularMedia(notas) {
  if (notas.length === 0) return null;
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
}

const notas = [6, 8, 4, 10];
console.log(calcularMedia(notas));
console.log(calcularMedia([]));