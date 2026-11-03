import { videojuegos } from "./datos.js";

import {
    mostrarCatalogoHTML,
    ordenarPorPuntuacion,
    ordenarPorPrecio,
    existeCategoria,
    todosCumplenPrecioMinimo,
    filtrarPorCategoria,
    filtrarPorPuntuacionMinima,
    buscarPorId,
    buscarPorNombre,
    obtenerIndicePorId,
    calcularPrecioPromedio,
    calcularPuntuacionPromedio,
    obtenerPropiedades,
    objetoAEntradas,
    crearObjetoDesdeEntradas
} from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Catálogo completo
    const contenedorCatalogo = document.getElementById("catalogo-juegos");
    contenedorCatalogo.innerHTML = mostrarCatalogoHTML(videojuegos);
    document.getElementById("total-catalogo").textContent = `${videojuegos.length} videojuegos disponibles`;

    // 2. Estadísticas generales
    const precioMedio = calcularPrecioPromedio(videojuegos);
    const puntuacionMedia = calcularPuntuacionPromedio(videojuegos);
    document.getElementById("estadisticas-contenido").innerHTML = `
        <article class="stat-card"><span class="stat-icon">🎮</span><p>Total de videojuegos</p><strong>${videojuegos.length}</strong><small>En el catálogo</small></article>
        <article class="stat-card"><span class="stat-icon">💶</span><p>Precio promedio</p><strong>${precioMedio.toFixed(2)} €</strong><small>Por videojuego</small></article>
        <article class="stat-card"><span class="stat-icon">⭐</span><p>Puntuación promedio</p><strong>${puntuacionMedia.toFixed(2)} / 10</strong><small>Valoración general</small></article>
    `;

    // 3. Top 5 mejor valorados (sort)
    const topValorados = ordenarPorPuntuacion(videojuegos).slice(0, 5);
    document.getElementById("mejor-valorados").innerHTML = topValorados.map((juego, indice) => `
        <article class="ranking-item">
            <span class="rank-number">${["🥇", "🥈", "🥉", "4", "5"][indice]}</span>
            <div class="rank-info"><strong>${juego.nombre}</strong><small>${juego.categoria}</small></div>
            <strong class="rank-value">★ ${juego.puntuacion.toFixed(1)}</strong>
        </article>
    `).join("");

    // 4. Verificaciones (some y every)
    const categoriaMundoAbierto = existeCategoria(videojuegos, "Mundo abierto");
    const categoriaDeportes = existeCategoria(videojuegos, "Deportes");
    const todosMasDe20 = todosCumplenPrecioMinimo(videojuegos, 20);
    const todosMasDe10 = todosCumplenPrecioMinimo(videojuegos, 10);
    document.getElementById("verificaciones-contenido").innerHTML = `
        <div class="check-item"><span>¿Existe la categoría "Mundo abierto"?</span><strong class="${categoriaMundoAbierto ? "yes" : "no"}">${categoriaMundoAbierto ? "Sí ✓" : "No ✕"}</strong></div>
        <div class="check-item"><span>¿Existe la categoría "Deportes"?</span><strong class="${categoriaDeportes ? "yes" : "no"}">${categoriaDeportes ? "Sí ✓" : "No ✕"}</strong></div>
        <div class="check-item"><span>¿Todos cuestan al menos 20 €?</span><strong class="${todosMasDe20 ? "yes" : "no"}">${todosMasDe20 ? "Sí ✓" : "No ✕"}</strong></div>
        <div class="check-item"><span>¿Todos cuestan al menos 10 €?</span><strong class="${todosMasDe10 ? "yes" : "no"}">${todosMasDe10 ? "Sí ✓" : "No ✕"}</strong></div>
    `;

    // 5. Filtro por categoría (filter)
    const categorias = [...new Set(videojuegos.map(juego => juego.categoria))].sort();
    const selectorCategoria = document.getElementById("filtro-categoria");
    categorias.forEach(categoria => {
        const opcion = document.createElement("option");
        opcion.value = categoria;
        opcion.textContent = categoria;
        selectorCategoria.appendChild(opcion);
    });

    function actualizarFiltro() {
        const seleccion = filtrarPorCategoria(videojuegos, selectorCategoria.value);
        document.getElementById("contador-filtro").textContent =
            `Se han encontrado ${seleccion.length} videojuego(s) en esta categoría.`;
        document.getElementById("resultado-filtro").innerHTML = mostrarCatalogoHTML(seleccion);
    }
    selectorCategoria.addEventListener("change", actualizarFiltro);
    actualizarFiltro();

    // 6. Elementos premium (filter)
    const premium = filtrarPorPuntuacionMinima(videojuegos, 9.0);
    document.getElementById("juegos-premium").innerHTML = mostrarCatalogoHTML(premium);

    // 7. Búsquedas por ID, nombre y posición (find y findIndex)
    document.getElementById("boton-id").addEventListener("click", () => {
        const id = document.getElementById("buscar-id").value.trim();
        const resultado = document.getElementById("resultado-id");
        if (id === "") {
            resultado.textContent = "Escribe un ID para realizar la búsqueda.";
            return;
        }
        const juego = buscarPorId(videojuegos, id);
        const indice = obtenerIndicePorId(videojuegos, id);
        resultado.innerHTML = juego
            ? `<strong>${juego.nombre}</strong><span>${juego.categoria} · ${juego.precio.toFixed(2)} € · ★ ${juego.puntuacion.toFixed(1)}</span><small>Posición en el catálogo: ${indice + 1}</small>`
            : "No se ha encontrado ningún videojuego con ese ID.";
    });

    document.getElementById("boton-nombre").addEventListener("click", () => {
        const nombre = document.getElementById("buscar-nombre").value.trim();
        const resultado = document.getElementById("resultado-nombre");
        if (nombre === "") {
            resultado.textContent = "Escribe un nombre para realizar la búsqueda.";
            return;
        }
        const juego = buscarPorNombre(videojuegos, nombre);
        resultado.innerHTML = juego
            ? `<strong>${juego.nombre}</strong><span>${juego.categoria} · ${juego.precio.toFixed(2)} € · ★ ${juego.puntuacion.toFixed(1)}</span><small>ID: ${juego.id}</small>`
            : "No se ha encontrado ningún videojuego con ese nombre.";
    });

    // Permite pulsar Enter en los campos de búsqueda.
    document.getElementById("buscar-id").addEventListener("keydown", evento => {
        if (evento.key === "Enter") document.getElementById("boton-id").click();
    });
    document.getElementById("buscar-nombre").addEventListener("keydown", evento => {
        if (evento.key === "Enter") document.getElementById("boton-nombre").click();
    });

    // 8. Análisis de propiedades (Object.keys, Object.entries, Object.fromEntries)
    const primerJuego = videojuegos[0];
    const propiedades = obtenerPropiedades(primerJuego);
    const entradas = objetoAEntradas(primerJuego);
    const nuevoObjeto = crearObjetoDesdeEntradas(entradas);

    document.getElementById("salida-keys").textContent = JSON.stringify(propiedades, null, 2);
    document.getElementById("salida-entries").textContent = JSON.stringify(entradas, null, 2);
    document.getElementById("salida-from-entries").textContent = JSON.stringify(nuevoObjeto, null, 2);

    // 9. Top 5 más económicos (sort)
    const masEconomicos = ordenarPorPrecio(videojuegos).slice(0, 5);
    document.getElementById("mas-economicos").innerHTML = masEconomicos.map((juego, indice) => `
        <article class="ranking-item">
            <span class="rank-number">${indice + 1}</span>
            <div class="rank-info"><strong>${juego.nombre}</strong><small>${juego.categoria}</small></div>
            <strong class="rank-value">${juego.precio.toFixed(2)} €</strong>
        </article>
    `).join("");

    // Año automático en el pie de página.
    document.getElementById("anio").textContent = new Date().getFullYear();
});
