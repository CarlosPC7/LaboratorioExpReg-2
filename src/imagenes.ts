import {errorHTML, htmlRevisado, extraeImagenes} from './images.helpers';

export const muestraImagenes = () => {
  const inputTextArea = document.getElementById("input-textarea");

  if (inputTextArea && inputTextArea instanceof HTMLTextAreaElement) {
    const html = inputTextArea.value;
    revisaHTML(html);
  }
}

const revisaHTML = (html: string) => {
  const esRevisadoHtml = extraeImagenes(html)

  esRevisadoHtml ? htmlRevisado(html) : errorHTML();
}