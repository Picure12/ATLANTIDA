/**
 * Genera las tarjetas HTML del catálogo.
 * @param {Array} array - Videojuegos que se mostrarán.
 * @returns {string} Código HTML de las tarjetas.
 */
export function mostrarCatalogoHTML(array) {
    if (array.length === 0) {
        return '<p class="empty-message">No se han encontrado videojuegos.</p>';
    }

    return array.map(juego => `
        <article class="game-card">
            <div class="game-card-top">
                <span class="game-category">${juego.categoria}</span>
                <span class="game-rating">★ ${juego.puntuacion.toFixed(1)}</span>
            </div>
            <h3>${juego.nombre}</h3>
            <p class="game-id">${juego.id}</p>
            <div class="game-card-bottom">
                <span class="game-price">${juego.precio.toFixed(2)} €</span>
                <span class="game-score">Valoración / 10</span>
            </div>
        </article>
    `).join("");
}

/** Ordena una copia del array de mayor a menor puntuación. */
export function ordenarPorPuntuacion(array) {
    return [...array].sort((a, b) => b.puntuacion - a.puntuacion);
}

/** Ordena una copia del array de menor a mayor precio. */
export function ordenarPorPrecio(array) {
    return [...array].sort((a, b) => a.precio - b.precio);
}

/** Comprueba si existe algún videojuego de la categoría indicada. */
export function existeCategoria(array, categoria) {
    return array.some(juego => juego.categoria.toLowerCase() === categoria.toLowerCase());
}

/** Comprueba si todos los videojuegos tienen un precio superior o igual al indicado. */
export function todosCumplenPrecioMinimo(array, precio) {
    return array.every(juego => juego.precio >= precio);
}

/** Devuelve los videojuegos que pertenecen a una categoría. */
export function filtrarPorCategoria(array, categoria) {
    return array.filter(juego => juego.categoria === categoria);
}

/** Devuelve los videojuegos con una puntuación igual o superior a la indicada. */
export function filtrarPorPuntuacionMinima(array, puntuacion) {
    return array.filter(juego => juego.puntuacion >= puntuacion);
}

/** Busca un videojuego por su identificador. */
export function buscarPorId(array, id) {
    return array.find(juego => juego.id.toLowerCase() === id.toLowerCase());
}

/** Busca un videojuego cuyo nombre contenga el texto indicado. */
export function buscarPorNombre(array, nombre) {
    return array.find(juego => juego.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

/** Devuelve la posición de un videojuego según su ID, o -1 si no existe. */
export function obtenerIndicePorId(array, id) {
    return array.findIndex(juego => juego.id.toLowerCase() === id.toLowerCase());
}

/** Calcula el precio medio usando forEach(). */
export function calcularPrecioPromedio(array) {
    if (array.length === 0) return 0;
    let suma = 0;
    array.forEach(juego => {
        suma += juego.precio;
    });
    return suma / array.length;
}

/** Calcula la puntuación media usando forEach(). */
export function calcularPuntuacionPromedio(array) {
    if (array.length === 0) return 0;
    let suma = 0;
    array.forEach(juego => {
        suma += juego.puntuacion;
    });
    return suma / array.length;
}

/** Devuelve los nombres de las propiedades de un objeto. */
export function obtenerPropiedades(objeto) {
    return Object.keys(objeto);
}

/** Convierte las propiedades de un objeto en un array de pares clave-valor. */
export function objetoAEntradas(objeto) {
    return Object.entries(objeto);
}

/** Crea un objeto nuevo a partir de un array de pares clave-valor. */
export function crearObjetoDesdeEntradas(entradas) {
    return Object.fromEntries(entradas);
}
