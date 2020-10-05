
var opc1, opc2, opc3
var divOrden
var total = 0
var sugerencias = ""
let checks
let comboSeleccionado  = 1// 1, 2 o 3

function init() {
    
    opc1 = document.getElementById('menuCombo1')
    opc2 = document.getElementById('menuCombo2')
    opc3 = document.getElementById('menuCombo3')
    divOrden = document.getElementById('divOrden')

    /* Comportamiento del menú */
    opc1.addEventListener("click", function(){seleccionMenu(1)})
    opc2.addEventListener("click", function(){seleccionMenu(2)})
    opc3.addEventListener("click", function(){seleccionMenu(3)})

    /* Funcionamiento */
    document.getElementById('btnOrdenar').addEventListener("click", cargarOrden)
    document.addEventListener('keydown', function (ev) {
        // para Ctrl+E en div de sugerencias
        if (ev.ctrlKey && ev.key === 'e') {
            document.getElementById("inputSugerencia").style.display = "block"
            document.getElementById("divSugerencias").style.display = "none"
        }
        // para Ctrl+S y guardar la sugerencia
        if (ev.ctrlKey && ev.key === 's') {
            ev.preventDefault()
            agregarSugerencia()
        }
    })
    // Para el click sobre el div de sugerencias
    document.getElementById('divSugerencias').addEventListener("click", function() {
        document.getElementById("divSugerencias").style.display = "none"
        document.getElementById("inputSugerencia").style.display = "block"
        document.getElementById("inputSugerencia").focus()
    })

    document.getElementById('btnPagar').addEventListener("click", function() {
        //document.getElementById("").modal('show')
    })
}

/* Comportamiento estilo de menú al seleccionar */
function seleccionMenu(num) {
    if (num == 1) {
        opc1.classList.add("active")
        opc2.classList.remove("active")
        opc3.classList.remove("active")
        comboSeleccionado = 1;
    } else if (num == 2) {
        opc2.classList.add("active")
        opc1.classList.remove("active")
        opc3.classList.remove("active")
        comboSeleccionado = 2;
    } else if (num == 3) {
        opc3.classList.add("active")
        opc1.classList.remove("active")
        opc2.classList.remove("active")
        comboSeleccionado = 3;
    } else {
        console.log("No seleccionó ningun combo")
    }
}

function cargarOrden() {

    divOrden.style.display = "block"
    cargarProductos()
    setTimeout(cargarCombo(),1000)
    //calcularTotal()

}

function cargarProductos() {
    /* Carga de Combos */
    let divCombos = document.getElementById("radioProducts")
    let combosHTML = ""

    for (let i = 1; i <= combos.length; i++){
        combosHTML = combosHTML +
            '<div class="form-check form-check-inline">'+
                '<input class="form-check-input" type="radio" name="radios" id="combo'+i+'" value="'+combos[i-1].id+'">'+
                '<label class="form-check-label" for="combo'+i+'">'+combos[i-1].nombre+'</label>'+
            '</div>';
    }

    divCombos.innerHTML = combosHTML

    /* Carga de Extras */
    let divExtras = document.getElementById("checksProducts")
    let preciosProducts = document.getElementById("preciosProducts")
    let extrasHTML = ""
    let tablaHTML = ""

    for (let i = 1; i <= extras.length; i++){
        extrasHTML = extrasHTML +
            '<div class="form-check col-md-6">'+
                '<input class="form-check-input check" type="checkbox" id="prod'+i+'" value="'+extras[i-1].id+'">'+
                '<label class="form-check-label" for="prod'+i+'">'+extras[i-1].nombre+'</label>'+
            '</div>';

        tablaHTML = tablaHTML +
            '<tr>'+
                '<td>'+extras[i-1].nombre+'</td>'+
                '<td>$ '+toDecimal(extras[i-1].precio)+'</td>'+
            '</tr>'
    }

    divExtras.innerHTML = extrasHTML
    preciosProducts.innerHTML = tablaHTML

    /* Agregando Listeners de los radios */
    radios = document.getElementsByName("radios")
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click', calcularTotal);
    }

    /* Agregando Listeners de los checkbox */
    checks = document.getElementsByClassName('check')
    for (var i = 0; i < checks.length; i++) {
        checks[i].addEventListener('click', calcularTotal);
    }
}

function cargarCombo() {
    /* carga en los radiobuttons el combo seleccionado */
    document.getElementById("combo"+comboSeleccionado).checked = true
    calcularTotal()
}

function calcularTotal() {

    let cbElements = document.getElementsByClassName('check');
    let rbElements = document.getElementsByName('radios');
    total = 0

    /* Calculo de precio sgún combo */
    for (let i=0;i < rbElements.length; i++) {
        if (rbElements[i].checked) {
            combos.map(function(comb) { 
                if (comb.id == rbElements[i].value) {
                    total = toDecimal(total + comb.precio)
                }
            })
            break
        }
    }

    /* Calculo de precios de productos Extra */
    for(let i=0; i < cbElements.length; ++i) {
        if (cbElements[i].checked) {
            extras.map(function(extra) { 
                console.log(extra.id)
                if (extra.id == cbElements[i].value) {
                    extra.checked = true;
                    total = toDecimal(total + extra.precio)
                }
            })
        }
    }

    document.getElementById('inputTotal').value = total.toFixed(2)
}

function agregarSugerencia() {
    sug = document.getElementById("inputSugerencia")

    if (sug.value != "") {
        sugerencias = sugerencias + "<li>"+sug.value+"</li>"
        document.getElementById("ulSugerencias").innerHTML = sugerencias

        document.getElementById("inputSugerencia").style.display = "none"
        document.getElementById("divSugerencias").style.display = "block"
    } else {
        alert("Debes ingresar algo para guardar la sugerencia");
    }
    sug.value = ""
}


function toDecimal(num) {
    return parseFloat(num)
}


//window.onload = init()
window.addEventListener("load", init, false);

var combos = [
    {
        id: "1",
        nombre: "Super combo",
        precio: 7.25
    }, {
        id: "2",
        nombre: "Combo Personal",
        precio: 5.75
    }, {
        id: "3",
        nombre: "Infantil",
        precio: 3.50
    }
]

var extras = [
    {
        id: "xtra1",
        nombre:"Pieza de pollo grande",
        precio:1.75
    }, {
        id: "xtra2",
        nombre:"Café",
        precio:0.5
    }, {
        id: "xtra3",
        nombre:"Pieza de pollo mediana",
        precio:1.5
    }, {
        id: "xtra4",
        nombre:"Postre",
        precio:1.25
    }, {
        id: "xtra5",
        nombre:"Pieza de pollo pequeña",
        precio:1.25
    }, {
        id: "xtra6",
        nombre:"Bebida grande",
        precio:1.5
    }, {
        id: "xtra7",
        nombre:"Ensalada",
        precio:1.5
    }, {
        id: "xtra8",
        nombre:"Bebida mediana",
        precio:1.25
    }, {
        id: "xtra9",
        nombre:"Papa frita",
        precio:1.25
    }, {
        id: "xtra10",
        nombre:"Bebida pequeña",
        precio:1.25
    },
]