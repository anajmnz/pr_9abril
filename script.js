  // Función para cargar productos desde el archivo JSON
  async function cargarProductos() {
    try {
        // Fetch el archivo JSON con los productos
        const response = await fetch('productos.json');
        const productos = await response.json();

        // Seleccionamos la sección donde vamos a mostrar los productos
        const contenedor = document.getElementById('productos');

        // Iteramos sobre los productos y los mostramos en la página
        productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('product');

            divProducto.innerHTML = `
            <div class="product">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p><strong>€${producto.precio.toFixed(2)}</strong></p>
                <button>Agregar al carrito</button>
            </div>
            `;

            // Agregamos el producto al contenedor
            contenedor.appendChild(divProducto);
        });
    } catch (error) {
        console.error('Error cargando los productos:', error);
    }
}

// Llamamos a la función para cargar los productos al cargar la página
window.onload = cargarProductos;