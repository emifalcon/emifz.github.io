
let imagenes = [
  "carrouse2.jpg",
  "carrouse3.jpg",
  "carrouse4.jpg",
  "carrouse5.jpg",
];

let imagenActual = 0;

function mostrarImagen() {
  let imagen = document.getElementById("imagenesdelcarrusel");
  imagen.src = imagenes[imagenActual];
  imagenActual++;
  if (imagenActual >= imagenes.length) {
    imagenActual = 0;
  }
  setTimeout(mostrarImagen, 2000);
}

function siguienteImagen() {
  imagenActual++;
  if (imagenActual >= imagenes.length) {
    imagenActual = 0;
  }
  let imagen = document.getElementById("imagenesdelcarrusel");
  imagen.src = imagenes[imagenActual];
}

function anteriorImagen() {
  imagenActual--;
  if (imagenActual < 0) {
    imagenActual = imagenes.length - 1;
  }
  let imagen = document.getElementById("imagenesdelcarrusel");
  imagen.src = imagenes[imagenActual];
}

window.onload = function () {
  mostrarImagen();
};
