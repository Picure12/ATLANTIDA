
const precios = [10, 20, 100];
const IVA = 1.21

const preciosConIVA = precios.map(precio => precio * IVA);

document.getElementById("resultado7").textContent += `\n Precios con iva aplicado: ${preciosConIVA}`;