
var producto = {}
var productos = []


function agregarProd() {
    let nombre = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    
    producto = {
        nombre: nombre,
        precio: precio,
    }

    productos.push(producto)
    limpiar()
    listarProductos()

    document.getElementById('btnFin').style.display = "block"
    console.log(productos)
}

function listarProductos() {
    let productosHTML = ""
    productos.forEach(function(prod) {
        productosHTML = productosHTML +
            '<div class="producto">' +
                '<p>' + prod.nombre + '</p>' +
                '<p>$ ' + prod.precio + '</p>' +
            '</div>'
    }) 
    document.getElementById('productos').innerHTML = productosHTML
}

function calcularTotal() {
    let total = 0

    productos.forEach(function(prod) { 
        total = total + parseFloat(prod.precio)
    })
    document.getElementById('total').innerHTML = total
}

function limpiar() {
    document.getElementById('nombre').value = ""
    document.getElementById('precio').value = ""
}