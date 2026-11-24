// Reglas comunes de los cinco formularios
function mensajeError(campo) {
    const texto = campo.id === "nombre" ? normalizarNombre(campo.value) : campo.value.trim();
    const numero = campo.valueAsNumber;
    if (campo.type === "radio") {
        if (!campo.form.querySelector('input[name="modalidad"]:checked')) return "Elige una modalidad";
        return "";
    }
    if (campo.type === "checkbox") {
        if (campo.required && !campo.checked) return "Debes marcar esta casilla";
        return "";
    }
    if (campo.type === "file") {
        const archivo = campo.files[0];
        if (!archivo) return "Selecciona un archivo";
        if (archivo.type !== "image/jpeg") return "Debe ser JPEG";
        if (archivo.size > 5000000) return "Máximo 5.000.000 bytes";
        return "";
    }
    if (campo.required && (campo.type === "password" ? campo.value === "" : texto === "")) return "Campo obligatorio";
    if (campo.type === "password") {
        if (campo.id === "clave" && (campo.value.length < 8 || campo.value.length > 16)) return "Entre 8 y 16 caracteres";
        if (campo.id === "confirmar" && campo.value !== document.querySelector("#clave").value) return "Las contraseñas no coinciden";
    } else if (campo.minLength > 0 && (texto.length < campo.minLength || texto.length > campo.maxLength)) {
        return "Entre " + campo.minLength + " y " + campo.maxLength + " caracteres";
    }
    if (campo.id === "edad" && (!Number.isInteger(numero) || numero < 18 || numero > 100)) return "Edad entera entre 18 y 100";
    if (campo.id === "duracion" && (!Number.isInteger(numero) || numero < 15 || numero % 15 !== 0)) return "Mínimo 15 minutos y múltiplo de 15";
    if (campo.id === "precio" && (!Number.isFinite(numero) || numero < 0 || numero > 9999.99 || campo.validity.stepMismatch)) return "Precio entre 0 y 9999,99 con dos decimales como máximo";
    if (campo.id === "fecha") {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        if (!(new Date(campo.value + "T00:00:00") > hoy)) return "La fecha debe ser posterior a hoy";
    }
    if (campo.id === "fechaCita" && !(new Date(campo.value) > new Date())) return "La cita debe ser futura";
    if (campo.id === "nombre" && !nombreValido(texto)) return "Usa solo letras y espacios";
    if (campo.id === "usuario" && !usuarioValido(texto)) return "Empieza por letra y usa solo letras y cifras";
    if (campo.id === "clave" && !claveValida(campo.value)) return "Empieza por letra; solo letras, cifras y guion bajo";
    if (campo.id === "telefono" && !telefonoValido(texto)) return "Formato: +34 612 345 678";
    if (campo.id === "codigo" && !codigoValido(campo.value)) return "Formato: DEP-007";
    if (campo.id === "referencia" && !referenciaValida(campo.value)) return "Formato: CITA-0001 o RES-0001";
    if (campo.validity.typeMismatch) return "Formato incorrecto";
    return "";
}

function validarCampo(campo) {
    campo.setCustomValidity("");
    const mensaje = mensajeError(campo);
    campo.setCustomValidity(mensaje);
    const valido = campo.checkValidity();
    const error = document.querySelector("#err-" + campo.name);
    error.textContent = valido ? "" : campo.validationMessage;
    campo.setAttribute("aria-invalid", String(!valido));
    return valido;
}

function resumen(formulario) {
    const datos = new FormData(formulario);
    formulario.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea').forEach(function(campo) {
        datos.set(campo.name, campo.value.trim());
    });
    let texto = "Operación simulada correctamente.";
    if (formulario.id === "form-socios") texto += " Socio: " + datos.get("nombre") + " | Usuario: " + datos.get("usuario") + " | Modalidad: " + datos.get("modalidad");
    if (formulario.id === "form-testimonios") texto += datos.has("publicar") ? " Publicación autorizada." : " Testimonio privado.";
    if (formulario.id === "form-citas") texto += " " + datos.get("socio") + " | " + datos.get("servicio") + " | " + datos.get("fechaCita");
    if (formulario.id === "form-noticias") texto += " Etiquetas: " + separarEtiquetas(datos.get("etiquetas")).join(", ");
    formulario.querySelector(".aviso").textContent = texto;
}

function prepararFormulario(formulario) {
    let intentado = false;
    const campos = formulario.querySelectorAll("input, select, textarea");
    function revisar() {
        let primero = null;
        campos.forEach(function(campo) {
            if (!validarCampo(campo) && primero === null) primero = campo;
        });
        return primero;
    }
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        intentado = true;
        formulario.querySelector(".aviso").textContent = "";
        campos.forEach(function(campo) {
            if (["text", "tel", "email", "textarea"].includes(campo.type)) {
                if (campo.id === "nombre") campo.value = normalizarNombre(campo.value);
                else if (campo.id !== "codigo" && campo.id !== "referencia") campo.value = campo.value.trim();
            }
        });
        const primero = revisar();
        if (primero) primero.focus();
        else resumen(formulario);
    });
    function editar() {
        formulario.querySelector(".aviso").textContent = "";
        if (intentado) revisar();
    }
    formulario.addEventListener("input", editar);
    formulario.addEventListener("change", editar);
}

document.querySelectorAll("form[novalidate]").forEach(prepararFormulario);
const testimonio = document.querySelector("#testimonio");
testimonio.addEventListener("input", function() {
    document.querySelector("#contador").textContent = testimonio.value.trim().length + " / 500";
});

document.querySelector("#buscarNumeros").addEventListener("click", function() {
    document.querySelector("#numeros").textContent = JSON.stringify(buscarCifras(testimonio.value));
});
document.querySelector("#demo").addEventListener("submit", function(evento) {
    evento.preventDefault();
    this.querySelector(".aviso").textContent = "Código válido (simulación)";
});
document.querySelector("#demoCodigo").addEventListener("input", function() {
    document.querySelector("#demo .aviso").textContent = "";
});
