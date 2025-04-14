// FUNCIÓN COMPRAR
// 1. Recuperar el carrito o lo crearlo (array)
// 2. Si el id es 23 o 24, es una oferta y guarda solo el id y el boolean esOferta: true.
// 3. Si no es oferta, busca el cómic por id, crea un objeto con su id y esOferta: false y lo agrega.
// 4. Luego guarda todo y lleva al usuario a la página del carrito.

function comprar(id) {

    //crear variable para guardar los  objteos. Si no hay guardados, crear un array.
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    // Si el id es 23 o 24, es una oferta
    if (id === 23 || id === 24) {

      // objeto oferta con id, y diciendo que esOferta es true
      const oferta = {
        id,
        esOferta: true
      };
      carrito.push(oferta);
    } else {

    // Si el id no es 23 ni 24:
    // Obtener todos los cómics guardados en localStorage, pasar de JSON a un array de objetos
      const comics = JSON.parse(localStorage.getItem("comicsCarrito"));

      // 
    // Buscar el cómic con el id proporcionado, comprobar que comic.id coinicide con la id par meterlo al carrito
      const comic = comics.find(c => c.id === id);

    // objeto producto con id, y diciendo que esOferta es false
      const producto = {
        id: comic.id,
        esOferta: false,
        comic
      };
      carrito.push(producto);
    }
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.href = "carrito.html";
  }
  
  export { comprar };
  