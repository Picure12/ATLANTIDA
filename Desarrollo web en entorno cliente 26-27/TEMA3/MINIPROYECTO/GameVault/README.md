# GameVault – Catálogo de videojuegos

Proyecto de la Unidad 3 de **Desarrollo Web en Entorno Cliente (DWEC)**. GameVault es una aplicación web que permite consultar y analizar un catálogo de videojuegos mediante JavaScript, módulos ES6 y manipulación del DOM.

## Temática

Catálogo de videojuegos de distintos géneros: mundo abierto, rol, acción, terror, supervivencia, indie, puzles, conducción y simulación.

Cada videojuego contiene cinco propiedades:
- `id`: identificador único de tipo string.
- `nombre`: nombre del videojuego (string).
- `categoria`: género o categoría (string repetido entre varios objetos).
- `precio`: precio en euros (number con decimales).
- `puntuacion`: valoración de 0 a 10 (number con decimales).

## Estructura del proyecto

```text
GameVault/
├── index.html
├── README.md
├── styles/
│   └── styles.css
└── js/
    ├── app.js
    ├── datos.js
    └── funciones.js
```

## Funcionalidades

1. Catálogo completo presentado mediante tarjetas.
2. Estadísticas: número de videojuegos, precio medio y puntuación media.
3. Top 5 de videojuegos mejor valorados.
4. Verificación de categorías y precios.
5. Filtro interactivo por categoría.
6. Selección de videojuegos premium (puntuación igual o superior a 9).
7. Búsqueda por ID y por nombre, con posición en el catálogo para la búsqueda por ID.
8. Análisis de propiedades con `Object.keys()`, `Object.entries()` y `Object.fromEntries()`.
9. Top 5 de videojuegos más económicos.

## Métodos utilizados

- Arrays: `map()`, `forEach()`, `sort()`, `some()`, `every()`, `filter()`, `find()` y `findIndex()`.
- Objetos: `Object.keys()`, `Object.entries()` y `Object.fromEntries()`.
- Módulos ES6: `export` e `import`.

Las funciones de `funciones.js` no modifican el array original. Las funciones de ordenación trabajan sobre una copia mediante el operador spread (`[...array]`).

## Instalación y ejecución

1. Descomprime la carpeta del proyecto.
2. Abre la carpeta con Visual Studio Code.
3. Ejecuta `index.html` mediante la extensión **Live Server**.
4. Abre la página en el navegador.

Se recomienda Live Server porque la aplicación utiliza módulos JavaScript (`type="module"`), que pueden dar problemas si se abre el HTML directamente mediante `file://`.

## Tecnologías

HTML5 · CSS3 · JavaScript ES6 · Módulos ES6 · DOM

## Autor

Adrián Esteban – Proyecto DWEC – 2026
