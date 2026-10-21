export function nombresDisponibles(productos, precioMaximo) {
  return productos
    .filter(p => p.disponible && p.precio <= precioMaximo)
    .map(p => p.nombre);
}
