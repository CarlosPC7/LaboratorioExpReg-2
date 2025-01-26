import { Validador } from "./imagenes.model";

export const htmlRevisado = (html: string) => {
  const imagenesExtraidas = extraeImagenes(html);
  mostrarImagenesExtraidas(imagenesExtraidas);
};

export const extraeImagenes = (html: string) => {
  const patron = /^<img[^>]*src="(?<url>[^"]+)"[^>]*>$/gm;
  const coincidencias = patron.exec(html);

  if (coincidencias) {
      const { url } = coincidencias.groups as { url: string };
      return { url };
    };

  throw new Error('No se pudieron extraer las URLs');
};

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

const mostrarImagenesExtraidas = (validador: Validador) => {
  const contenedor = document.getElementById("contenedor-IMAGENES");
  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.textContent = "";

    const imagenURL = crearImagen(
      validador.url
    );

    contenedor.appendChild(imagenURL);
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