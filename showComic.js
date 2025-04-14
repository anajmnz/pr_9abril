function precioOferta(precio1,precio2){
  let precioRebajado= (precio1+precio2)*0.75;
  return precioRebajado;
 
}

import { comprar } from "./carrito.js";
 
function showProduct(comics) {

    // Hacer un string vacío para meter el HTML
    let comicsHTML = '';  
    const comprar = () => console.log("test")
    comics.forEach(comic => {
      const cartItem = {...comic, esOferta:false}
      comicsHTML += `
        <div class="carta-comic-pr  ">
          <img class="imagen-comic-pr" src="${comic.imagen}" alt="${comic.nombre}" />
          <h3 class="titulo-comic-pr">${comic.nombre}</h3>
          <p class="descripcion-comic-pr">${comic.descripcion.length > 100 ? comic.descripcion.slice(0, 100) + '...' : comic.descripcion}</p>
          <p class="precio-comic-pr">Precio: ${comic.precio}€</p>
          <button id="${comic.id}" class="comprar-btn-pr">Añadir al carrito</button>
        </div>
      `;
      
    });
    
    // Poner todo el HTML generado dentro del contenedor
   return comicsHTML;
} 


//TOP
function showTops(comics) {
let comicsTop = '';
let posicion = 1

comics.forEach(comic => { 
  comicsTop += `
    <div class="carta-comic">
      <p class="numTop">TOP ${posicion}</p>
      <hr clas="hr-bs">
      <img class="imagen-comic" src="${comic.imagen}" alt="${comic.nombre}" />
      <h3 class="titulo-comic">${comic.nombre}</h3>
      <p class="precio-comic">Precio: ${comic.precio}€</p>
      <button class="comprar-btn" onclick="comprar(${comic.id})">Añadir al carrito</button>
    </div>
  `;
  posicion += 1
});

return comicsTop;
} 


//OFERTA
function showOfertas(comic1, comic2,idOferta) {
  const cartItem = {comic1: comic1, comic2: comic2, idOferta, esOferta:true}
  let comicsOferta = `
  <div class="packOfertas">
    <h2>Pack Oferta</h2>
    <div class="contenido-oferta">
      <div class="carta-comic">
        <img class="imagen-comic" src="${comic1.imagen}" alt="${comic1.nombre}" />
        <h3 class="titulo-comic">${comic1.nombre}</h3>
      </div>
      <p class="simbolo-mas">+</p>
      <div class="carta-comic">
        <img class="imagen-comic" src="${comic2.imagen}" alt="${comic2.nombre}" />
        <h3 class="titulo-comic">${comic2.nombre}</h3>
      </div>
    </div>
    <div class="info-oferta">
      <p class="precio-oferta">${precioOferta(comic1.precio, comic2.precio)}€</p>
      <button class="comprar-btn" onclick="comprar()">Añadir al carrito</button>
    </div>
  </div>
`;
  return comicsOferta;
  } 


export { showProduct, showTops, showOfertas };



// Componentes para el carrito

function comicsCarrito(esOferta){
  if(esOferta === true){

  }else{

  }
  return comicsCarrito;
}



/*
1. Copy funcction
2. Change function name
3. Modify HTML as needed
4. Add export (just a comma lol)
*/

