

function showProduct(comics) {
    const container = document.getElementById("container");

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

export { showProduct };



