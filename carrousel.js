let imagenes = [
    "carrouse2.jpg",
    "carrouse3.jpg",
    "carrouse4.jpg",
    "carrouse5.jpg",

];
let imagenActual = 0;


function mostrarImagen() {
    let imagen = document.getElementById("imagen-carrusel");
    imagen.src = imagenes[imagenActual];
    imagenActual++;
    if (imagenActual >= imagenes.length) {
        imagenActual = 0;
    }
    setTimeout(mostrarImagen, 3000); // mostrar la siguiente imagen en 3 segundos
}
window.onload = function () {
    mostrarImagen();
};
