
var cel = 0;
var far = 0;

function setCelcius() {

    cel = prompt("Ingrese los grados Celcius que desea convertir","")

    document.getElementById("C").innerHTML = cel + " °C";

}

function convert() {

    far = Math.round((cel * (9/5)) + 32);

    document.getElementById("F").innerHTML = far + " °F";

}