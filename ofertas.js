import { getAllComics } from './api.js';

const container = document.getElementById("container");

async function cargarComics(){
    const comics = await getAllComics();
    return comics;
}

const comicsOferta = [];

cargarComics().then(comics => {
    comics.forEach(comic => {
        if (comic.id == 2){
            comicsOferta.push(comic); 
        } 
        else if (comic.id == 6){
            comicsOferta.push(comic); 
        }
        else if (comic.id == 1){
            comicsOferta.push(comic); 
        }
        else if (comic.id == 8){
            comicsOferta.push(comic); 
        }
    })
    console.log(comicsOferta);
});



