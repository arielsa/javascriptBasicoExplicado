var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) {
    console.log(`Hola, ${alumno}`);
}
for(var alumno of estudiantes) {
    saludarEstudiantes(alumno);
}
//Hola, Maria
//Hola, Sergio
//Hola, Rosa
//Hola, Daniel```

// la variable alumno va a hacer e indice automatico

////////////////////////////////////////////////////
//Limitaciones del ciclo for … of

var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]