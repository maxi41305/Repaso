
var nombre= "maxi torales";
var altura= 190;
var concatenacion= nombre + " " + altura

document.write(nombre);
document.write(concatenacion);

var datos = document.getElementById("datos");



if(altura>= 90){

    datos.innerHTML = "<h1> eres una persona alta</h1>";
}else {
    datos.innerHTML = "<h1> eres una persona baja</h1>";

}

function Muestraminombre(nombre, altura){

    datos.innerHTML = "<h1> eres una persona maxi</h1>";
}


Muestraminombre("maxi", 100);

