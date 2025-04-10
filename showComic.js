import { precioOferta } from "./ofertas.js";
function showProduct(comics) {

    // Hacer un string vacío para meter el HTML
    let comicsHTML = '';  

    comics.forEach(comic => {
      comicsHTML += `
        <div class="carta-comic">
          <img class="imagen-comic" src="${comic.imagen}" alt="${comic.nombre}" />
          <h3 class="titulo-comic">${comic.nombre}</h3>
          <p class="descripcion-comic">${comic.descripcion}</p>
          <p class="precio-comic">Precio: ${comic.precio}€</p>
          <button class="comprar-btn" onclick="comprar(${comic.id})">Añadir al carrito</button>
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
      <p>TOP ${posicion}</p>
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
  let comicsOferta=  `
  <div>
  <h2>Pack Oferta</h2>
  <img src="https://cdn-icons-png.flaticon.com/512/272/272535.png">
    <div class="carta-comic"${comic1.id}>
      <img class="imagen-comic" src="${comic1.imagen}" alt="${comic1.nombre}" />
      <h3 class="titulo-comic">${comic1.nombre}</h3>
    </div>
  <p>+</p>
    <div class="carta-comic" ${comic2.id}>
      <img class="imagen-comic" src="${comic2.imagen}" alt="${comic2.nombre}" />
      <h3 class="titulo-comic">${comic2.nombre}</h3>
    </div>
  <button class="comprar-btn" onclick="comprar(${idOferta})">Añadir al carrito</button>
  <p>${precioOferta(comic1.precio, comic2.precio )}€ </p>
  </div>
  `;


  
  return comicsOferta;
  } 


export { showProduct, showTops, showOfertas };





/*
1. Copy funcction
2. Change function name
3. Modify HTML as needed
4. Add export (just a comma lol)
*/

