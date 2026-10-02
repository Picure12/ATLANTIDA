const empleado= {
nombre: "Ana Lopez",
profesion: "administrativa",
antiguedad: 3,
sueldo: 1200
}

console.log(`${empleado.nombre}, profesión ${empleado.profesion}, ${empleado.antiguedad} años de antigüedad y ${empleado.sueldo.toFixed(2)} € de sueldo base.`);

const sueldoBase = empleado.sueldo
const plusMensual = 10;

const plus = empleado.sueldo * (plusMensual * empleado.antiguedad / 100);
const sueldoTotal = empleado.sueldo + plus; 


console.log(`Sueldo base: ${empleado.sueldo.toFixed(2)} €`);
console.log("plus: " +plus.toFixed(2) + "€", "Total: " + sueldoTotal.toFixed(2) + "€") 

