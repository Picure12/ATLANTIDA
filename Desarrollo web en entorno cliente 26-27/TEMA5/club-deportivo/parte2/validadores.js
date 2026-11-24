function normalizarNombre(texto) {
    return texto.trim().replace(/ +/g, " ");
}
function nombreValido(texto) {
    texto = normalizarNombre(texto);
    return texto.length >= 4 && texto.length <= 50 && /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+( [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$/.test(texto);
}
function usuarioValido(texto) {
    return /^[A-Za-z][A-Za-z0-9]{4,19}$/.test(texto);
}
function claveValida(texto) {
    return /^[A-Za-z][A-Za-z0-9_]{7,15}$/.test(texto);
}
function telefonoValido(texto) {
    return /^\+34 [6789][0-9]{2} [0-9]{3} [0-9]{3}$/.test(texto.trim());
}
function codigoValido(texto) {
    return /^DEP-[0-9]{3}$/.test(texto);
}
function referenciaValida(texto) {
    return /^(CITA|RES)-[0-9]{4}$/.test(texto);
}
function buscarCifras(texto) {
    return texto.match(/[0-9]+/g) || [];
}
function separarEtiquetas(texto) {
    return texto.split(/,/).map(function(etiqueta) {
        return etiqueta.trim();
    }).filter(function(etiqueta) { return etiqueta !== ""; });
}
