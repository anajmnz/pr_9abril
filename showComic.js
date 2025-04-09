
showBestSeller(comic, number) {
    return  `
        <h1 class="numertop">TOP ${number}</h3>
        <img src="${comic.img}" 
        
        <button class="ver-nota-btn" onclick="buy(${comic.id})">Ver Nota</button>
        `
}; 

showProduct(comic) {
    
};

showOferta(comic1, comic2) {
    

    return  `
        < class="titulo-nota">${nota.titulo}</h3>
        <p class="contenido-nota">${nota.contenido.substring(0, 50)}...</p> 
        <button class="ver-nota-btn" onclick="verNota(${nota.id})">Ver Nota</button>
        `
    
};