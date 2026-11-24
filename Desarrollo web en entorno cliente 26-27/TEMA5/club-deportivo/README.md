# Club deportivo - Tema 5

## Abrir el proyecto
Abrir parte1/index.html o parte2/index.html en el navegador. No necesita servidor ni base de datos. Los datos son ficticios y los envíos son simulaciones.

## Organización
Parte 1: cinco formularios, validación HTML y JavaScript, mensajes de error y confirmaciones. Parte 2: añade validadores de formato, códigos, etiquetas, extracción de cifras y demostración de pattern. Los estilos son comunes. Las capturas errores.png muestran errores de los formularios.

## Expresiones regulares
- ^ y $ delimitan el texto completo. [A-Za-z] representa letras ASCII y [0-9] cifras ASCII.
- Nombre: añade letras españolas y permite grupos de palabras separados por un espacio. Se normalizan espacios con / +/g.
- Usuario: letra inicial y 4 a 19 letras o cifras adicionales.
- Contraseña: letra inicial y 7 a 15 letras, cifras o guiones bajos. No se modifica el texto.
- Teléfono: prefijo literal +34 (se escapa el +), espacio, primera cifra de 6 a 9 y grupos de tres cifras.
- Servicio: DEP- y tres cifras. Cita: (CITA|RES) y cuatro cifras.
- La bandera g se usa para extraer todas las cifras y sustituir todos los grupos de espacios, no para test() repetidos. No se usa i porque los códigos distinguen mayúsculas.
- split(/,/) separa etiquetas, trim elimina espacios y filter descarta vacías.

## Pruebas
Consultar pruebas.md en cada carpeta. Para ejecutar las pruebas automáticas de parte2, abrir su página, pulsar F12 y ejecutar en consola: `const s = document.createElement('script'); s.src = 'pruebas.js'; document.head.appendChild(s);` También se pueden concatenar validadores.js y pruebas.js y ejecutarlos con Node.js. Las pruebas de integración se ejecutaron en Chromium cargando el contenido de los archivos directamente; queda pendiente comprobar la apertura local y los casos manuales indicados en pruebas.md.

## Validación y seguridad
Cada campo limpia su error personalizado, comprueba sus reglas, usa checkValidity y actualiza el mensaje y aria-invalid. Al enviar se enfoca el primer error. Al editar se borra la confirmación anterior. Un formato correcto no garantiza que el dato exista. pattern comprueba formato, pero required es necesario para rechazar vacío. No resuelve archivos ni fechas futuras. El servidor debe volver a validar todos los datos, permisos, fechas y archivos (tipo real, tamaño y contenido). Nunca se muestra ni registra la contraseña.
