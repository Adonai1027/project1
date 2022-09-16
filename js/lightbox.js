const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const hamburguer1 = document.querySelector(".navbar");

/* SE ASIGNA EL SRC DE LA IMAGEN CLICKEADA */
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

/* CERRAR IMG */
contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburguer1.style.opacity = "1"; /* MOSTRAR NAVBAR */
  }
});

/* FUNCTION: MOSTRAR IMAGEN */
const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImage");
  hamburguer1.style.opacity = "0"; /* NO MOSTRAR NAVBAR */
};

