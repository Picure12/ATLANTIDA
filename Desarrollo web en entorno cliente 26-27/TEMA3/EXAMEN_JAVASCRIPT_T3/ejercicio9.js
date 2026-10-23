
function calcularMedia(notas) {
  if (notas.length === 0) 
    return null;
  const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return suma / notas.length;
}

const notas = [6, 8, 4, 10];
document.getElementById("resultado9").textContent += calcularMedia(notas);
document.getElementById("resultado9").textContent += `, ` + calcularMedia([]);