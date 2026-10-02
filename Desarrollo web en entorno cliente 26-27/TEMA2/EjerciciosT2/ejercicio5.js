
const ListaProductos = [];


while (true) {
  const entradaProducto = prompt("Introduce un producto para la lista de la compra:");
  if (entradaProducto === null) {
    break;
  }
  const productoLimpio = entradaProducto.trim();f

  if (productoLimpio === "") {
    console.log("Entrada vacía");
  }
  ListaProductos.push(productoLimpio);
 }  

if(ListaProductos.length === 0){
    console.log("Lista vacia")
} else {
    console.log(`Lista final: ${ListaProductos.join(", ")}. Número de productos: ${ListaProductos.length}.`)
}
