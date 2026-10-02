
const precioBase = 100;
const iva = 21;
const precioConIva = precioBase * (1 + iva); // 121


const importeIva = precioBase * (iva / 100);

const precioFinal = precioBase + importeIva;

console.log("Precio sin IVA:", precioBase, "€");
console.log("IVA (21%):", importeIva, "€");
console.log("Precio con IVA:", precioFinal, "€");