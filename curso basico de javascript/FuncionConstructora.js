///////////////////////////////////////////////////////
//creamos una funcion construtora como molde para instanciar objetos

function auto (ParametroMarca, ParametroAnnio, ParametroModelo){

    this.marca=ParametroMarca;
    this.annio=ParametroAnnio;
    this.modelo=ParametroModelo;
}

//instanciamos nuevos autos con el operador NEW como en .net en una variable

let auto1 = new auto ("ford","2009","ecoescport");

let auto2 = new auto ("tesla","modelo1","2020");

console.log (auto1);

///////////////////////////////////////////////////////////////////////////////////

function auto2 (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }