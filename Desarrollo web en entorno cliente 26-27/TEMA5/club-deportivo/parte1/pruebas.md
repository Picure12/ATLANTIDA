# Pruebas de integración

Ejecutadas en Chromium. True en una prueba de error significa que aparece el error. Los archivos simulados comprueban MIME y tamaño, no contenido real.

| Entrada / prueba | Esperado | Obtenido | Resultado / corrección |
|---|---|---|---|
| Socios vacío: varios errores | True | True | OK |
| Edad '' | True | True | OK |
| Edad '17' | True | True | OK |
| Edad '18' | False | False | OK |
| Edad '18.5' | True | True | OK |
| Edad '101' | True | True | OK |
| Edad '100' | False | False | OK |
| Nombre '   ' | True | True | OK |
| Nombre 'Ana' | True | True | OK |
| Nombre 'Ana López' | False | False | OK |
| Nombre 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' | False | False | OK |
| Archivo simulado image/png 100 bytes | True | True | OK |
| Archivo simulado image/jpeg 5000000 bytes | False | False | OK |
| Archivo simulado image/jpeg 5000001 bytes | True | True | OK |
| Socio válido | True | True | OK |
| Cambio de contraseña | True | True | OK |
| Confirmación obsoleta borrada | False | False | OK |
| Duración '14' | True | True | OK |
| Duración '15' | False | False | OK |
| Duración '20' | True | True | OK |
| Duración '30' | False | False | OK |
| Duración '' | True | True | OK |
| Precio '' | True | True | OK |
| Precio '-1' | True | True | OK |
| Precio '0' | False | False | OK |
| Precio '1.234' | True | True | OK |
| Precio '9999.99' | False | False | OK |
| Servicio válido | True | True | OK |
| Testimonio privado | True | True | OK |
| Noticia día relativo -1 | True | True | OK |
| Noticia día relativo 0 | True | True | OK |
| Noticia día relativo 1 | False | False | OK |
| Noticia válida | True | True | OK |
| Selecciones iniciales | True | True | OK |
| Cita 2000-01-01T12:00 | True | True | OK |
| Cita 2099-01-01T12:00 | False | False | OK |
| Cita válida | True | True | OK |
| Errores JS | [] | [] | OK |

Pendiente de comprobación manual: envío con Intro, límites de todos los textos y comparación nativa de pattern (parte 2).

Abrir index.html en el navegador. La captura errores.png muestra varios errores tras enviar el formulario vacío.
