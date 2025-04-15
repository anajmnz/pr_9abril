// importar función con la información de la API
import { getAllComics } from './api.js';
// Usa showProduct para generar el HTML de esos cómics.
import { showProduct } from './showComic.js';


// Buscar en su respectivo HTML un contenedor donde va a meter los cómics (id container)
const container = document.getElementById("container");




async function cargarComics(){
    const comics = await getAllComics();
    console.log(comics);
    return comics;
}        // Espera a que cargarComics() se resuelva antes de pasarlo a showProduct. 
        // Antes se estaba devolviendo la promesa del fetch, no los datos

// Mete ese HTML dentro del contenedor.
cargarComics().then(comics => {
    const comicsHTML = showProduct(comics);
    container.innerHTML = comicsHTML;
    
});


