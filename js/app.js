import * as UI from "./interfaz.js";
import API from "./api.js";

// console.log(API);

UI.formularioBuscar.addEventListener('submit', buscarCancion);

/**Función que me permite buscar una canción en la api 
 * https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
 */
function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    /**Ojo: no puedo utilizar los campos del formulario de esta forma
     * los tengo que crear en este archivo, porque sino, no lee
     * la información de los inputs y me genera un error
     * POr eso los comento en iterfaz y los genero aquí
     */
    // UI.artista.value;
    // UI.cancion.value;
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    // Valido datos del formulario
    if (artista === '' || cancion === '') {
        // El usuario dejó al menos un campo vacío. Mostrar error
        UI.divMensajes.textContent = 'Error.. Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent= '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return
    }

    // Consultamos la api que viene de la clase api
    const busqueda = new API(artista, cancion);
    // console.log(busqueda);
    busqueda.consultarAPI();
}