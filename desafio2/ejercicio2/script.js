
var opc1, opc2, opc3
var divOrden

function init() {
    
    opc1 = document.getElementById('menuCombo1')
    opc2 = document.getElementById('menuCombo2')
    opc3 = document.getElementById('menuCombo3')
    divOrden = document.getElementById('divOrden')

    /* Comportamiento */
    opc1.addEventListener("click", function(){seleccionMenu(1)})
    opc2.addEventListener("click", function(){seleccionMenu(2)})
    opc3.addEventListener("click", function(){seleccionMenu(3)})

    /* Funcionamiento */
    document.getElementById('btnOrdenar').addEventListener("click", cargarOrden)

}

function seleccionMenu(num) {
    if (num == 1) {
        opc1.classList.add("active")
        opc2.classList.remove("active")
        opc3.classList.remove("active")
    } else if (num == 2) {
        opc2.classList.add("active")
        opc1.classList.remove("active")
        opc3.classList.remove("active")
    } else if (num == 3) {
        opc3.classList.add("active")
        opc1.classList.remove("active")
        opc2.classList.remove("active")
    } else {
        console.log("No seleccionó ningun combo")
    }
}

function cargarOrden() {

    divOrden.style.display = "block"

}


window.addEventListener("load", init, false);