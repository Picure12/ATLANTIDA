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
| Extracción de cifras | ["12","3"] | ["12","3"] | OK |
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

## Pruebas automatizadas (Node.js)

```text
1 nombreValido " Ana López " true true OK
1 nombreValido "Ana2 López" false false OK
1 nombreValido "Ana" false false OK
1 nombreValido "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" true true OK
1 nombreValido "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" false false OK
1 usuarioValido "ana77" true true OK
1 usuarioValido "7ana7" false false OK
1 usuarioValido "ana_7" false false OK
1 usuarioValido "aaaa" false false OK
1 usuarioValido "aaaaaaaaaaaaaaaaaaaa" true true OK
1 usuarioValido "aaaaaaaaaaaaaaaaaaaaa" false false OK
1 claveValida "Clave_12" true true OK
1 claveValida "1Clave_2" false false OK
1 claveValida "Clave-12" false false OK
1 claveValida "aaaaaaa" false false OK
1 claveValida "aaaaaaaaaaaaaaaa" true true OK
1 claveValida "aaaaaaaaaaaaaaaaa" false false OK
1 telefonoValido "+34 612 345 678" true true OK
1 telefonoValido "34 612 345 678" false false OK
1 telefonoValido "+34612345678" false false OK
1 telefonoValido "+34 512 345 678" false false OK
1 telefonoValido "+34 612 345 6789" false false OK
1 codigoValido "DEP-007" true true OK
1 codigoValido "dep-007" false false OK
1 codigoValido "DEP-07" false false OK
1 codigoValido "XDEP-007" false false OK
1 referenciaValida "CITA-0001" true true OK
1 referenciaValida "RES-0001" true true OK
1 referenciaValida "XCITA-0001" false false OK
1 referenciaValida "RES-001" false false OK
1 normalizarNombre " Ana   López " "Ana López" "Ana López" OK
1 buscarCifras "Hay 12 clases y 3 pistas" ["12","3"] ["12","3"] OK
1 buscarCifras "Sin cifras" [] [] OK
1 separarEtiquetas "" [] [] OK
1 separarEtiquetas "club, salud, , verano" ["club","salud","verano"] ["club","salud","verano"] OK
2 nombreValido " Ana López " true true OK
2 nombreValido "Ana2 López" false false OK
2 nombreValido "Ana" false false OK
2 nombreValido "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" true true OK
2 nombreValido "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" false false OK
2 usuarioValido "ana77" true true OK
2 usuarioValido "7ana7" false false OK
2 usuarioValido "ana_7" false false OK
2 usuarioValido "aaaa" false false OK
2 usuarioValido "aaaaaaaaaaaaaaaaaaaa" true true OK
2 usuarioValido "aaaaaaaaaaaaaaaaaaaaa" false false OK
2 claveValida "Clave_12" true true OK
2 claveValida "1Clave_2" false false OK
2 claveValida "Clave-12" false false OK
2 claveValida "aaaaaaa" false false OK
2 claveValida "aaaaaaaaaaaaaaaa" true true OK
2 claveValida "aaaaaaaaaaaaaaaaa" false false OK
2 telefonoValido "+34 612 345 678" true true OK
2 telefonoValido "34 612 345 678" false false OK
2 telefonoValido "+34612345678" false false OK
2 telefonoValido "+34 512 345 678" false false OK
2 telefonoValido "+34 612 345 6789" false false OK
2 codigoValido "DEP-007" true true OK
2 codigoValido "dep-007" false false OK
2 codigoValido "DEP-07" false false OK
2 codigoValido "XDEP-007" false false OK
2 referenciaValida "CITA-0001" true true OK
2 referenciaValida "RES-0001" true true OK
2 referenciaValida "XCITA-0001" false false OK
2 referenciaValida "RES-001" false false OK
2 normalizarNombre " Ana   López " "Ana López" "Ana López" OK
2 buscarCifras "Hay 12 clases y 3 pistas" ["12","3"] ["12","3"] OK
2 buscarCifras "Sin cifras" [] [] OK
2 separarEtiquetas "" [] [] OK
2 separarEtiquetas "club, salud, , verano" ["club","salud","verano"] ["club","salud","verano"] OK
```

Abrir index.html en el navegador. La captura errores.png muestra varios errores tras enviar el formulario vacío.
