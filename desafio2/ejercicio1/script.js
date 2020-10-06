
var count = 0
var nums = []
var comparador = 0
var numMa, numMe = 0

function init() {
    let input = document.getElementById('inputNumeros')
    
    document.getElementById('btnIngresar').addEventListener("click", function(){
        ingresar(parseInt(input.value))
    })
    document.getElementById('btnMostrar').addEventListener("click", function(){
        mostrar()
    })
}

function ingresar(num) {
    // Ingreso y evaluación
    if (num != "") {
        count ++
        if (count <= 5) {
            nums.push(parseInt(num))
            analisis(num)
            document.getElementById("inputNumeros").value = ""
        } else {
            // Ya ingresó 5 números
            document.getElementById('errorMessage').style.display = "block"
        }
    console.log(nums)
    } else {
        alert("Debe ingresar un número en el campo")
    }
}

function analisis(num) {
    // 
    comparador = num
    if (count>1) {
        if (comparador > numMa) {
            numMa = comparador
        }
        if (comparador < numMe) {
            numMe = comparador
        }
    } else {
        numMa = num
        numMe = num
    }
}

function mostrar() {
    let titulo = "Análisis de: "
    let textoMa = "Mayor: " + numMa
    let textoMe = "Menor: " + numMe

    nums.map(function(n) {
        titulo = titulo + n + " "
    })

    document.getElementById("titulo-table").innerHTML = titulo
    document.getElementById("num-mayor").innerHTML = textoMa
    document.getElementById("num-menor").innerHTML = textoMe
    
}
window.addEventListener("load", init, false);
//window.onload = init()