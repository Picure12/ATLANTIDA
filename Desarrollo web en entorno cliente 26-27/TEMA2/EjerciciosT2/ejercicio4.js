const ListaEmpleados = ["ana", "luis", "marta", "pedro", "lucia", "carlos", "elena"];

const entrada = prompt("Introduce un nombre de empleado:");


if (entrada === null) {
  console.log("Consulta cancelada");
} else {
  const nombreLimpio = entrada.trim();

  
  if (nombreLimpio === "") {
    console.log("Nombre vacío");
  } else {
   
    const nombreEnMinusculas = nombreLimpio.toLowerCase();

    if (ListaEmpleadoshola.includes(nombreEnMinusculas)) {
      console.log(`Hola, ${nombreEnMinusculas}`);
    } else {
      console.log("No está en la lista");
    }
  }
}



