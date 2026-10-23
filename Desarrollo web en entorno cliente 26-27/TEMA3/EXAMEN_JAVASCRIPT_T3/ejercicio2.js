
const importe = 120;

const descuento = importe >= 100 ? 0.10 : 0;
const importeFinal = importe * (1 - descuento);


document.getElementById("resultado2").textContent =
    `El importe final es: ${importeFinal}€`;