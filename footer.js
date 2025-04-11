// footer.js

function createFooter(containerId) {
    // Crear el elemento <footer>
    const footer = document.createElement('footer');

    // Crear y agregar el texto de derechos reservados
    const rightsText = document.createElement('p');
    rightsText.textContent = '© 2025 Tienda de Mangas | Todos los derechos reservados';
    footer.appendChild(rightsText);

    // Crear y agregar el enlace de contacto
    const contactText = document.createElement('p');
    const contactLink = document.createElement('a');
    contactLink.href = 'mailto:contacto@tiendamangas.com';
    contactLink.textContent = 'contacto@tiendamangas.com';
    contactText.appendChild(contactLink);
    footer.appendChild(contactText);

    // Crear el contenedor para las redes sociales
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');

    // Crear los enlaces para redes sociales
    const facebookLink = document.createElement('a');
    facebookLink.href = '#';
    facebookLink.target = '_blank';
    const facebookImg = document.createElement('img');
    facebookImg.classList.add('logos');
    facebookImg.id = 'facebook';
    facebookImg.src = './imagenes/facebook-svgrepo-com.png';
    facebookImg.alt = 'Facebook';
    facebookLink.appendChild(facebookImg);
    socialMediaDiv.appendChild(facebookLink);

    const twitterLink = document.createElement('a');
    twitterLink.href = '#';
    twitterLink.target = '_blank';
    const twitterImg = document.createElement('img');
    twitterImg.classList.add('logos');
    twitterImg.src = './imagenes/twitter-154.png';
    twitterImg.alt = 'Twitter';
    twitterLink.appendChild(twitterImg);
    socialMediaDiv.appendChild(twitterLink);

    const instagramLink = document.createElement('a');
    instagramLink.href = '#';
    instagramLink.target = '_blank';
    const instagramImg = document.createElement('img');
    instagramImg.classList.add('logos');
    instagramImg.src = './imagenes/Instagram_icon.png.png';
    instagramImg.alt = 'Instagram';
    instagramLink.appendChild(instagramImg);
    socialMediaDiv.appendChild(instagramLink);

    // Agregar el contenedor de redes sociales al footer
    footer.appendChild(socialMediaDiv);

    // Inyectar el footer al contenedor especificado en el HTML
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(footer);
    }
}