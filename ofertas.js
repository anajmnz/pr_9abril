import { getAllComics } from './api.js';
import { showOfertas } from './showComic.js';

const container = document.getElementById("container-ofertas");

async function cargarComics(){
    const comics = await getAllComics();
    return comics;
}

export function precioOferta(precio1,precio2){
    let precioRebajado= (precio1+precio2)*0.75;
    return precioRebajado;
   
}

const comicsOferta = [];

const idsComics = [2, 6, 1, 8]

cargarComics().then(comics => {
    comics.forEach(comic => {
        if (idsComics.includes(comic.id)){
            comicsOferta.push(comic); 
        }
    })
    // console.log(comicsOferta);

    container.innerHTML = showOfertas(comicsOferta[0], comicsOferta[1], 23);
    container2.innerHTML = showOfertas(comicsOferta[2], comicsOferta[3], 24);

    let num1 = comicsOferta[0].precio;
    let num2 = comicsOferta[1].precio;
    let num3 = comicsOferta[2].precio;
    let num4 = comicsOferta[3].precio;

    const btnOferta1 = document.getElementById(`comprar(${comicsOferta[0]})`)
    const btnOferta2 = document.getElementById(`comprar(${comicsOferta[2]})`)

    // btnOferta1.addEventListener("click", function() {
    //     console.log(precioOferta(num1, num2))
    // })
    
    precioOferta(num3, num4)

});

