import { muestraImagenes } from "./imagenes";

const botonInsertar = document.getElementById("search-html");

const visualizaImagenes = () => {
  if (botonInsertar && botonInsertar instanceof HTMLButtonElement) {
    botonInsertar.addEventListener("click", muestraImagenes)
  }
};

document.addEventListener("DOMContentLoaded", visualizaImagenes);
