//////////////////////////////////
// primero definimos la coleccion de objetos con la que vamos a trabajar:

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

//////////////////////////////////////////////////
//FIND
// el metodo find busca y devuelve articulos buscados de manera especifica.
// El método find () devuelve el primer valor que coincide de la colección. 
//Una vez que coincida con el valor en los resultados, no verificará los valores 
//restantes en la colección de matriz.
// si encuentra una coincidencia devuelve todo el objeto y sus caracteristicas, valores y propiedades.
//el objeto entero

let articuloFindeado = articulos.find( function(articulo) {

    return articulo.costo=="2500";

});

console.log(articuloFindeado);

//////////////////////////////////////////////////////////////
//FOREACH
// funciona similar al .map para este caso. recorre el array y selecciona y devulve lo que le pedimos
// este metodo es nativo de los objetos de javascript. asi que nmo es nesesario crear un nuevo array
// simplemente es un metodo que sirve para actuar sobre el objeto array y obtener informacion sin modificarlo.
// hay que tener en cuenta la iteracion:

articulos.forEach(function(articulo){
    console.log(articulo.nombre) ;
    console.log("////");
    console.log(articulo.costo>1000);// devuelve booleano
    console.log("---------");

});

/////////////////////////////////////////////////////////////////////////////////////////////////
//SOME
// nos devuelve una validacion de verdadero o falso en respuesta a una condicion
//si se debe crear en una nueva variable.
// en el ejemplo vamos a hacer una metodo some que nos indique si hay almenos un articulo barato (menor a 700)


let articulosBaratos = articulos.some (function(articulo){
 return articulo.costo <=700;

});

console.log (articulosBaratos);// <---- va devolver un solo TRUE




