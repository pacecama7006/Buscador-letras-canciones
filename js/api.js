import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        // console.log('Desde consultar api');
        // console.log(`Artista: ${this.artista} y la canción es: ${this.cancion} `);
        const url = `https://private-anon-a703d3d2de-lyricsovh.apiary-proxy.com/v1/${this.artista}/${this.cancion}`

        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(resultado => {
                // console.log(resultado);
                if (resultado.lyrics) {
                    const {lyrics} = resultado;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion}, del Artista: ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = 'Lo siento, no pudimos encontrar la canción, prueba con otra búsqueda';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent= '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            })
            .catch(error => {
                console.log(error);
            })
    };
}

export default API;