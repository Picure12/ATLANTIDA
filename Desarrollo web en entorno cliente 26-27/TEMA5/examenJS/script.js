 // EJERCICIO 1

const parrafos = document.querySelectorAll(".stock");

parrafos.forEach(function(parrafo) {
    parrafo.textContent += " - disponible";
});


// EJERCICIO 2
const menos = document.querySelector("#menos");
const mas = document.querySelector("#mas");
const total = document.querySelector("#total");

if (menos && mas && total) {

    let contador = 0;

    function actualizarContador() {
        total.textContent = contador;
        menos.disabled = contador === 0;
    }

    mas.addEventListener("click", function() {
        contador++;
        actualizarContador();
    });

    menos.addEventListener("click", function() {
        if (contador > 0) {
            contador--;
        }
        actualizarContador();
    });

    actualizarContador();
}

// EJERCICIO 3



// EJERCICIO 3

// EJERCICIO 3

const busqueda = document.querySelector("#busqueda");

if (busqueda) {

    const elementos = document.querySelectorAll("#lista li");

    busqueda.addEventListener("input", function() {

        const texto = busqueda.value.trim().toLowerCase();

        elementos.forEach(function(elemento) {

            const nombre = elemento.textContent.toLowerCase();

            elemento.hidden = !nombre.includes(texto);

        });

    });
}


