const pruebas = [
 [nombreValido," Ana López ",true],[nombreValido,"Ana2 López",false],[nombreValido,"Ana",false],[nombreValido,"A".repeat(50),true],[nombreValido,"A".repeat(51),false],
 [usuarioValido,"ana77",true],[usuarioValido,"7ana7",false],[usuarioValido,"ana_7",false],[usuarioValido,"aaaa",false],[usuarioValido,"a".repeat(20),true],[usuarioValido,"a".repeat(21),false],
 [claveValida,"Clave_12",true],[claveValida,"1Clave_2",false],[claveValida,"Clave-12",false],[claveValida,"a".repeat(7),false],[claveValida,"a".repeat(16),true],[claveValida,"a".repeat(17),false],
 [telefonoValido,"+34 612 345 678",true],[telefonoValido,"34 612 345 678",false],[telefonoValido,"+34612345678",false],[telefonoValido,"+34 512 345 678",false],[telefonoValido,"+34 612 345 6789",false],
 [codigoValido,"DEP-007",true],[codigoValido,"dep-007",false],[codigoValido,"DEP-07",false],[codigoValido,"XDEP-007",false],[referenciaValida,"CITA-0001",true],[referenciaValida,"RES-0001",true],[referenciaValida,"XCITA-0001",false],[referenciaValida,"RES-001",false],
 [normalizarNombre," Ana   López ","Ana López"],[buscarCifras,"Hay 12 clases y 3 pistas",["12","3"]],[buscarCifras,"Sin cifras",[]],[separarEtiquetas,"",[]],[separarEtiquetas,"club, salud, , verano",["club","salud","verano"]]
];
for (let vuelta = 1; vuelta <= 2; vuelta++) {
    pruebas.forEach(function(prueba) {
        const obtenido = prueba[0](prueba[1]);
        const correcto = JSON.stringify(obtenido) === JSON.stringify(prueba[2]);
        console.log(vuelta, prueba[0].name, JSON.stringify(prueba[1]), JSON.stringify(prueba[2]), JSON.stringify(obtenido), correcto ? "OK" : "FALLO");
    });
}
