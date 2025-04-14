// get element by id

// comics = get de la api

// showcomics comics



/*

x 0. Importar las funciones que me hagan falta de cada archivo  
x 1. Quiero saber en que elemento pongo las cosas
2. Quiero extraer los comics de la api y guardarlo (y esperar a que esten antes de continuar) -- api.js
3. Obtener el HTML de componetes comic -- showComic.js
4. Modificar mi elemento donde pongo las cosas para que las contenga

*/

import { getAllComics } from './api.js';
import { showProduct } from './showComic.js';

const container = document.getElementById("container");


async function cargarComics(){
    const comics = await getAllComics();
    console.log(comics);
    return comics;
}

// Espera a que cargarComics() se resuelva antes de pasarlo a showProduct. 
// Antes se estaba devolviendo la promesa del fetch, no los datos
cargarComics().then(comics => {
    const comicsHTML = showProduct(comics);
    container.innerHTML = comicsHTML;
    
});


