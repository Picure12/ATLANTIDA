
const notas = [4, 7, 5, 3, 9, 6];
let aprobados = 0;
let suspensos = 0;

for (const nota of notas) {
  if (nota >= 5) aprobados++;
  else suspensos++;
}

document.getElementById("resultado4").textContent = `Aprobados: ${aprobados}`;
document.getElementById("resultado4").textContent += `  Suspensos: ${suspensos}`;