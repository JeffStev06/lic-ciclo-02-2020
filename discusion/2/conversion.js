
const pies = 3.28;
const pulgadas = 39.37;
const yardas = 1.09;
var cantidad = "";
var textMeasure = "";
var respuesta = "";

document.write("<header> <h3>Conversión de <u>Metros</u> a Pies / Pulgadas / Yardas ?</h3> </header>");

function init() {
    //Ingresar los datos de los números a operar
    var opciones = ""

    opciones = "<div id='opciones' class='opciones'>" +
                    "<button onclick='convert(1)'>Pies</button>"+
                    "<button onclick='convert(2)'>Pulgadas</button>"+
                    "<button onclick='convert(3)'>Yardas</button>"+
               "</div>";

    document.getElementById('opciones').innerHTML = opciones;

}

function setQty() {

    cantidad = prompt('Introduzca la cantidad a convertir (en metros):','');
    document.getElementById("cantidad").innerHTML = "Convirtiendo " + cantidad + " mts a "

}

// Cambia la medida hacia la que se ha seleccionado convertir
function convert(measure) {
    
    switch (measure) {
        case 1:
            factorConversion = pies;
            textMeasure = "Pies";
            operate();
            break;
        case 2:
            factorConversion = pulgadas;
            textMeasure = "Pulgadas";
            operate();
            break;
        case 3:
            factorConversion = yardas;
            textMeasure = "Yardas";
            operate();
            break;
    }

}

// Realiza la conversión e imprime los datos de la solución
function operate() {6
    
    respuesta = Math.round(cantidad * factorConversion);

    document.getElementById('respuesta').innerHTML = "<p> <b style='color:red'>R/</b> " + respuesta + " " + textMeasure + " </p>";

}

window.onload = init;