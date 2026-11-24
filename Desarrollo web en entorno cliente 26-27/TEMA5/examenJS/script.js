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
};
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

// EJERCICIO 4

const discos = [
    {titulo: "Blue Train", precio: 18},
    {titulo: "Kind of Blue", precio: 24},
    {titulo: "Abbey Road", precio: 20}
];

const listaDiscos = document.querySelector("#discos");

if (listaDiscos) {

    discos.forEach(function(disco) {

        if (disco.precio <= 20) {

            const li = document.createElement("li");

            li.textContent = disco.titulo + " - " +
                disco.precio.toFixed(2) + " €";

            listaDiscos.appendChild(li);
        }

    });
}

// EJERCICIO 5

const lista5 = document.querySelector("#lista");
const total5 = document.querySelector("#total");

if (lista5 && total5) {

    function actualizarTotal() {
        total5.textContent = lista5.querySelectorAll("li").length;
    }

    lista5.addEventListener("click", function(evento) {

        const boton = evento.target.closest(".borrar");

        if (boton) {
            boton.closest("li").remove();
            actualizarTotal();
        }

    });

    actualizarTotal();
}



// EJERCICIO 6

const reserva = document.querySelector("#reserva");

if (reserva) {

    const nombre = document.querySelector("#nombre");
    const ciudad = document.querySelector("#ciudad");
    const errNombre = document.querySelector("#errNombre");
    const errCiudad = document.querySelector("#errCiudad");
    const aviso = document.querySelector("#aviso");

    reserva.addEventListener("submit", function(evento) {

        evento.preventDefault();

        let valido = true;

        if (nombre.value.trim().length < 3) {
            errNombre.textContent = "Mínimo 3 caracteres";
            valido = false;
        } else {
            errNombre.textContent = "";
        }

        if (ciudad.value.trim() === "") {
            errCiudad.textContent = "Introduce una ciudad";
            valido = false;
        } else {
            errCiudad.textContent = "";
        }

        if (valido) {
            aviso.textContent = "Reserva válida";
        } else {
            aviso.textContent = "";
        }

    });
}


// EJERCICIO 7

const comprobar = document.querySelector("#comprobar");

if (comprobar) {

    const cantidad = document.querySelector("#cantidad");
    const socio = document.querySelector("#socio");
    const error = document.querySelector("#error");

    comprobar.addEventListener("click", function() {

        const numero = cantidad.valueAsNumber;

        let maximo = 3;

        if (socio.checked) {
            maximo = 6;
        }

        if (Number.isInteger(numero) && numero >= 1 && numero <= maximo) {
            error.textContent = "";
        } else {
            error.textContent = "Cantidad no válida";
        }

    });
}
