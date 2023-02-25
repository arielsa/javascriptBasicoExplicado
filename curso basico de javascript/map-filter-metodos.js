
//Existen métodos de arrays para recorrerlos, y devolver un valor o 
//un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

//Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:


var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

//Cómo utilizar el método filter
//El método filter consiste en crear un nuevo array a partir de los elementos 
//originales filtrados mediante una función (callback) que indica la condición 
//a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

//El método filter recibe dos argumentos:

//La función que itera y evalúa si cada elemento del array si cumple con la condición 
//especificada (obligatorio).

//Un objeto al que puede hacer referencia el contexto this en la función. 
//Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

var articulosFiltrados = articulos.filter (function(articulo){
    return articulo.costo<1000;
});

// aca tenemos que el metodo filter : articulos.filter ();
//le pasamos como parametro una funcion anonima : articulos.filter(function(){});
//luego un parametro nuevo que funciona como el for of. un parametro, digamos, auxiliar.: articulos.filter(function(parametro){});
//finalmente desarrollamos el codigo con el que vamos a usar ese parametro "auxiliar".
// en este caso creamos un auxiliar que nos va a servir de indice como en el for of: articulo.costo

console.log (articulosFiltrados);

// ahora .map:
//Cómo utilizar el método map
//El método map es inmutable y consiste en crear un nuevo array a partir de los 
//elementos originales transformados mediante una función (callback).

//El método map recibe dos argumentos:

//La función que itera y transforma cada elemento del array (obligatorio).

//Un objeto al que puede hacer referencia el contexto this en la función. 
//Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
  })
console.log(nombreArticulos);

//funciona muy similar. la difenrencia es el resultado. el .map mapea TODOS los elementos. los enumera.
//y el filter los filtra., es decir crea un array seleccionando elementos.

//si cambiamos los metodos vamos a los metodos en las dos variables map no va a filtrar nada en articulos filtrados
// y va a listar en forma booleana los elementos que cumplan con la condicion establecida

// y si hacemos articulos.filter en nombreArticulo va a enumerar todo el array original.


