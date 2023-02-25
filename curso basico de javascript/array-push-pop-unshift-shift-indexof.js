/////////////////////////////////////////////////////////////////////////////////////////////
//Cómo utilizar el método push
//El método push agrega uno o varios elementos al final del 
//array original. El método recibe como argumento los valores a agregar.
// Retorna el número de elementos del array mutado.

var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]

////////////////////////////////////////////////////////////////////////////////////////
//Cómo utilizar el método unshift
//El método unshift agrega uno o varios elementos al inicio del array original.
// El método recibe como argumento los valores a agregar. Retorna el número de 
//elementos del array mutado.

var array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]

///////////////////////////////////////////////////////////////////////////////////////////////
//Cómo utilizar el método pop
//El método pop extrae el elemento del final del array original.

var array = [1,2,3,4]
var lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]

//////////////////////////////////////////////////////////////////////////////////////////////
//Cómo utilizar el método shift
//El método shift extrae el elemento del inicio del array original.

var array = [1,2,3,4]
var firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]

////////////////////////////////////////////////////////////////////////////////////////////
// Cómo utilizar el método indexOf
//El método indexOf muestra el índice del elemento especificado como argumento.

var array = [1,2,3,4]
var index = array.indexOf(2)
console.log(index) // 1

//Si el elemento no se encuentra en el array, el método devuelve el valor -1.

var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1
