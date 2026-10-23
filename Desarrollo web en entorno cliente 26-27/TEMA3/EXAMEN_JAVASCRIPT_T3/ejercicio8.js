

function sumar(...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }
    return total;
}

const valores = [2, 5, 3];
document.getElementById("resultado8").textContent = sumar(...valores);