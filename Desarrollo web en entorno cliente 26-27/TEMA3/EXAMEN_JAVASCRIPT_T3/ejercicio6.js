const cliente = { nombre: "Ana", descuento: 0 };
const { nombre, descuento } = cliente;
const descuentoAplicado = descuento ?? 10;

document.getElementById("resultado6").textContent += nombre;
document.getElementById("resultado6").textContent += `\n Descuento %: ${descuentoAplicado}`;