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


//top1
function showTops(comics) {
let comicsTop = '';
posicion = 1

comics.forEach(comic => { 
  comicsTop += `
    <div class="carta-comic">
      <p>TOP ${posicion}</p>
      <img class="imagen-comic" src="${comic.imagen}" alt="${comic.nombre}" />
      <h3 class="titulo-comic">${comic.nombre}</h3>
      <p class="descripcion-comic">${comic.descripcion}</p>
      <p class="precio-comic">Precio: ${comic.precio}€</p>
      <button class="comprar-btn" onclick="comprar(${comic.id})">Añadir al carrito</button>
    </div>
  `;
  posicion += 1
});

return comicsTop;
} 


export { showProduct, showTops };


/*
1. Copy funcction
2. Change function name
3. Modify HTML as needed
4. Add export (just a comma lol)
*/

