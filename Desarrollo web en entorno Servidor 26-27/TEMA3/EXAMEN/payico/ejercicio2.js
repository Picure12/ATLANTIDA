const importe = 120;

const descuento = importe >= 100 ? 0.10 : 0;
const importeFinal = importe * (1 - descuento);

console.log(`El importe final es: ${importeFinal}€`);