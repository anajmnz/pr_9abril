const linkAPI = "https://api-onepiece-d9mm.onrender.com/libros" ;


//   meter el fetch en una función para poder 
//   llamarlo por el nombre de la variable y filtrar su tamaño


//get All: Toda la API
  async function getAllComics () {
    return fetch(linkAPI)
      .then(response => response.json())  
      .then(data => data.results);  
      };
 
// Solo los 3 primeros de la API: BEST SELLERS
  async function getFirstThreeComics () { 
    return fetch(linkAPI)
      .then(response => response.json())
      .then(data => data.results.slice(0, 2)) 
  };
  
  export { getAllComics, getFirstThreeComics };

// para apartaso de ofertas????
