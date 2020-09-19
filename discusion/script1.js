
var cifra = 0;
var array = [];

function setCifra() {
    cifra = prompt("Ingrese una cifra para su evaluación: ","")

    document.getElementById("cifra").innerHTML = cifra

    getArray()
    evaluarCantidades()
}

function getArray() {
    array = Array.from(String(cifra), Number);
}

function evaluarCantidades() {
    let dato1 = array.length;
    let dato2 = 0;
    let dato3 = 0;
    let dato4 = 0;
    let dato5 = 0;
    let dato6 = 0;
    let dato7 = 0;
    let dato8 = 0;

    for (i = 0; i < array.length; i++) {
        //console.log(array[i])

        if ((array[i] % 2) == 0) {
            // Cantidad de cifras pares
            dato3 += 1
            // Suma de cifras pares
            dato5 += array[i]
        } else {
            // Cantidad de cifras impares
            dato2 = dato2 + 1
            // Suma de cifras impares
            dato4 += array[i]
        }
        // Suma de todas las cifras
        dato6 += array[i]
    }

    document.getElementById("dato1").innerHTML = dato1
    document.getElementById("dato2").innerHTML = dato2
    document.getElementById("dato3").innerHTML = dato3
    document.getElementById("dato4").innerHTML = dato4
    document.getElementById("dato5").innerHTML = dato5
    document.getElementById("dato6").innerHTML = dato6
    document.getElementById("dato7").innerHTML = dato7
    document.getElementById("dato8").innerHTML = dato8
}

function evaluarMayorMenor() {
    
}