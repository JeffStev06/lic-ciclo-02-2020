
var array = []
var num = 0;
var cuadros = ""

function testPush() {
    num += 1

    array.push(num)

    pintar();
}

function testPop() {
    
    array.pop()

    pintar();
}

function testReverse() {
    
    array.reverse()

    pintar();
}

function pintar() {
    cuadros = ""
    array.forEach(function(num) {
        cuadros = cuadros +
            '<div class="cuadro">'+ num +'</div>'
    }) 

    document.getElementById('cuadros').innerHTML = cuadros;
}