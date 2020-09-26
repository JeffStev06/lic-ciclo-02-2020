
function operacion(x) {
    return function(y) {
        return x - y;
    }
}

var miResta = operacion(10)

console.log(miResta(3)) // Respuesta 7
