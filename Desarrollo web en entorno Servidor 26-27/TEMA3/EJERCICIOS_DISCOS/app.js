const IMAGEN_POR_DEFECTO = "img/default.png";
const contenedor = document.querySelector(".grid");

function crearTarjeta(disco) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("card");

  // Imagen con gestión de error
  const img = document.createElement("img");
  img.src = disco.imagen;
  img.alt = `Carátula de ${disco.titulo}`;
  img.onerror = () => {
    img.onerror = null; 
    img.src = IMAGEN_POR_DEFECTO;
    img.style.opacity = 0.5;
  };

  const cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body");

  const titulo = document.createElement("h2");
  titulo.textContent = disco.titulo;

  const artista = document.createElement("p");
  artista.classList.add("artista");
  artista.textContent = disco.artista;

  const pais = document.createElement("span");
  pais.classList.add("pais");
  pais.textContent = disco.pais;

  const anio = document.createElement("p");
  anio.textContent = `Año: ${disco.anio}`;

  const copias = document.createElement("p");
  copias.textContent = `Copias vendidas: ${disco.copias} mil`;

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = `€${Number(disco.precio).toFixed(2)}`;

  cuerpo.append(titulo, artista, pais, anio, copias, precio);
  tarjeta.append(img, cuerpo);

  return tarjeta;
}

const fragmento = document.createDocumentFragment();

tienda.discos.forEach(disco => {
  fragmento.appendChild(crearTarjeta(disco));
});

contenedor.appendChild(fragmento);