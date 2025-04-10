import { getFirstThreeComics } from './api.js';
import { showProduct } from './showComic.js';

const container = document.getElementById("container");


async function cargarComics(){
    const comics = await getFirstThreeComics();
    console.log(comics);
    return comics;
}

// Espera a que cargarComics() se resuelva antes de pasarlo a showProduct. 
// Antes se estaba devolviendo la promesa del fetch, no los datos.

cargarComics().then(comics => {
    const comicsHTML = showProduct(comics);
    container.innerHTML = comicsHTML;
});