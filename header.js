// header.js

function createHeader(containerId) {
    // Crear el elemento <header>
    const header = document.createElement('header');

    // Crear y agregar la imagen
    const logoImg = document.createElement('img');
    logoImg.src = './imagenes/One-Piece-Logo-PNG-Images.png';
    logoImg.style.width = 'auto';
    logoImg.style.marginTop= "10px";
    logoImg.style.marginBottom = "-5px";
    logoImg.style.height = '120px';
    header.appendChild(logoImg);

    // Crear y agregar el eslogan
    const esloganText = document.createElement('p');
    esloganText.classList.add('eslogan');
    esloganText.textContent = 'Encuentra tus mangas favoritos aquí';
    header.appendChild(esloganText);

    // Inyectar el header al contenedor especificado en el HTML
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(header);
    }
}




function createNav(containerId) {
    // Crear el elemento <nav>
    const nav = document.createElement('nav');

    const links = [
        { href: 'index.html', text: 'Inicio' },
        { href: 'productos.html', text: 'Productos' },
        { href: 'ofertas.html', text: 'Ofertas' },
        { href: 'contacto.html', text: 'Contacto' },
        { href: 'carrito.html', text: 'Carrito' }
    ];
    

    links.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.textContent = linkData.text;
        nav.appendChild(link);
    });

    // Inyectar el nav al contenedor especificado en el HTML
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(nav);
    }
}


createHeader('header-container')
createNav('header-container')