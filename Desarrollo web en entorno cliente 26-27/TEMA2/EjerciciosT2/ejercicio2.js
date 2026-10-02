

const jamones = 23;
const empleados = 10;

const porPersona = Math.floor(jamones / empleados);
const sobrantes = jamones % empleados; 


console.log("Jamones por persona: "+ porPersona);
console.log("Jamones sobrantes: " + sobrantes);