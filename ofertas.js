import { getAllComics } from './api.js';

const container = document.getElementById("container");

async function cargarComics(){
    const comics = await getAllComics();
    return comics;
}

const comicsOferta = [];

const idsComics = [2, 6, 1, 8]

cargarComics().then(comics => {
    comics.forEach(comic => {
        if (idsComics.includes(comic.id)){
            comicsOferta.push(comic); 
        }
    })
    console.log(comicsOferta);
});



