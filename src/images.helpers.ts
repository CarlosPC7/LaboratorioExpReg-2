export const htmlRevisado = (html: string) => {
  const imagenesExtraidas = extraeImagenes(html);
  mostrarImagenesExtraidas(imagenesExtraidas);
};

export const extraeImagenes = (html: string) => {
  const patron = /(http|https):\/\/.{1,}(webp|jpg|png|svg)/gm;
  const coincidencias = html.match(patron);
  console.log(coincidencias)
  if (coincidencias) {
      return coincidencias.map((url) => ({ url }));
    };

  throw new Error('No se pudieron extraer las URLs');
};

// bucle array urls

const crearImagen = (url: string) => {
  const imagen = document.createElement("img");
  imagen.src = url;
  imagen.alt = "Imagen extraída";

  return imagen;
};

const crearTexto = (mensaje: string) => {
  const texto = document.createElement("p");
  texto.textContent = mensaje;

  return texto;
};

const mostrarImagenesExtraidas = (imagenes: { url: string }[]) => {
  const contenedor = document.getElementById("contenedor-IMAGENES");
  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.textContent = "";

    imagenes.forEach(({ url }) => {
      const imagenURL = crearImagen(url);
      contenedor.appendChild(imagenURL);
    });
  }
}

export const errorHTML = () => {
  const contenedor = document.getElementById("contenedor-IMAGENES");
  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.textContent = "";

    const mensajeError = crearTexto(
      "El HTML proporcionado no es válido. Por favor, revisa e inténtalo de nuevo."
    );

    contenedor.appendChild(mensajeError);
  }
}