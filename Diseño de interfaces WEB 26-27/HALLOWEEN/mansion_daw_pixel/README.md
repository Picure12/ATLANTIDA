# La Mansión de la Medianoche — proyecto DAW

## Archivos
- `index.html`: pantallas, escenario y personajes interactivos.
- `styles.css`: estética pixel art, distribución adaptable, animaciones y efectos ambientales.
- `script.js`: acceso, diálogos independientes, objetos e interacciones.
- `credenciales.json`: credenciales del proyecto de práctica.
- `assets/`: fondo, retrato y sprites pixel art.

## Cómo ejecutarlo
Abre la carpeta con VS Code y utiliza **Live Server**, o ejecuta desde esta carpeta:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

No abras `index.html` directamente con `file://`: el navegador puede bloquear la lectura de `credenciales.json` mediante `fetch`.

## Interacciones
- La calavera abre y cierra el formulario de acceso.
- El cuervo abandona el árbol y habla al jugador.
- Cada músico y criatura de la fiesta es un NPC independiente y tiene su propio cuadro de diálogo.
- La piedra está camuflada en la maleza del jardín. Al moverla aparece la llave; al recogerla pasa al inventario.
- La puerta comprueba si el jugador tiene la llave.
- La calabaza se ilumina y el buzón contiene una carta.
- Luciérnagas, luces parpadeantes y mensajes ambientales aportan vida al escenario.
- Los sprites de la banda y los invitados son más pequeños y están repartidos por la explanada.
- Diez ventanas pueden inspeccionarse por separado: sus luces se apagan temporalmente y sombras animadas cruzan las habitaciones de forma aleatoria.

## Personalizar diálogos
En `script.js`, edita el objeto `NPC_DIALOGUES`. Cada personaje tiene su propia entrada con `title`, `kicker` y `text`. No es necesario modificar los eventos ni el HTML para cambiar sus frases.

Las claves disponibles son: `trumpeter`, `guitarist`, `drummer`, `ghost`, `zombie`, `witch` y `pumpkin`.

Los textos que aparecen al observar las ventanas se pueden cambiar en el objeto `ROOM_DIALOGUES`, también en `script.js`.

## Nota de seguridad
La validación mediante `credenciales.json` se conserva para la práctica local, pero no es autenticación segura para publicar en Internet: cualquier visitante podría descargar ese JSON. Para producción, la validación debe hacerse en un servidor y las contraseñas deben almacenarse con hash.
