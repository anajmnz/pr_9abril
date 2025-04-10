const linkAPI = "https://api-onepiece-d9mm.onrender.com/libros" ;


//   meter el fetch en una función para poder 
//   llamarlo por el nombre de la variable y filtrar su tamaño


//get All: Toda la API
  async function getAllComics () {
    return fetch(linkAPI)
      .then(response => response.json())  
  };
 

  
  export { getAllComics };

