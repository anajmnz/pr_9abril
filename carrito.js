// FUNCIÓN COMPRAR
// 1. Recuperar el carrito o lo crearlo (array)
// 2. Si el id es 23 o 24, es una oferta y guarda solo el id y el boolean esOferta: true.
// 3. Si no es oferta, busca el cómic por id, crea un objeto con su id y esOferta: false y lo agrega.
// 4. Luego guarda todo y lleva al usuario a la página del carrito.



// Recuperar el carrito
const cart = JSON.parse(localStorage.getItem('carrito')) || [];

// Calcular el precio de los productos
let precioProductos = 0;
cart.map(cartItem => precioProductos += cartItem.precio);

// Mostrar resumen de precio (productos + envío)
function mostrarPrecioTotal(precioProductos) {
  const precioContainer = document.getElementById("container-precio-carrito");

  const precioEnvio = 3.99;
  const precioTotal = precioProductos + precioEnvio;

  precioContainer.innerHTML = `
    <div class="box-precio-total">
      <p class="titulo-pedido">RESUMEN DEL PEDIDO</p>
      <p class="precio-productos">Precio productos: ${precioProductos.toFixed(2)} €</p>
      <p class="precio-envio">Precio envío: ${precioEnvio.toFixed(2)} €</p>
      <hr />
      <p class="precio-total">Precio total: ${precioTotal.toFixed(2)} €</p>
      <div id="tramitar-pedido">
        <p class="tramitar">Tramitar pedido</p>
      </div>
    </div>
  `;
}

mostrarPrecioTotal(precioProductos);

//container carrito en html
const container = document.getElementById("container-carrito");
function showCart(cart) {

  // Hacer un string vacío para meter el HTML
  let cartHTML = '';
  cart.forEach(cartItem => {
    if (cartItem.esOferta) {
      cartHTML += `
      <div class="packOfertas">
        <h2>Pack Oferta</h2>
        <div class="contenido-oferta">
          <div class="carta-comic">
            <img class="imagen-comic" src="${cartItem.imagen1}" alt="${cartItem.nombre1}" />
            <h3 class="titulo-comic">${cartItem.nombre1}</h3>
          </div>
          <p class="simbolo-mas">+</p>
          <div class="carta-comic">
            <img class="imagen-comic" src="${cartItem.imagen2}" alt="${cartItem.nombre2}" />
            <h3 class="titulo-comic">${cartItem.nombre2}</h3>
          </div>
        </div>
        <div class="info-oferta">
          <p class="precio-oferta">${cartItem.precio}€</p>
        </div>
      </div>
    `;

    } else {
      cartHTML += `
      <div class="carta-comic-pr  ">
        <img class="imagen-comic-pr" src="${cartItem.imagen}" alt="${cartItem.nombre}" />
        <h3 class="titulo-comic-pr">${cartItem.nombre}</h3>
        <p class="precio-comic-pr">Precio: ${cartItem.precio}€</p>
      </div>
    `;
    }


  });

  return cartHTML
}


const cartHTML = showCart(cart);
container.innerHTML = cartHTML;