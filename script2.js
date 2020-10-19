
//Lista de Miembros
var miembros = []

//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var agregarNuevoMiembreo = document.getElementById("btnAgregar");
    if(agregarNuevoMiembreo.addEventListener){
        agregarNuevoMiembreo.addEventListener("click", function(){
            createObject(document.formRegister);
        }, false);
    } else if(agregarNuevoMiembreo.attachEvent){
        agregarNuevoMiembreo.attachEvent("onclick", function(){
            createObject(document.formRegister);
        });
    }
}
// Creando el nuevo objeto
function createObject(form){
    let n = form.nombre.value;
    let a = form.apellido.value;
    let c = form.contra.value;

    var miem = new Miembro(n, a, c);

    miembros.push(miem);
    showMiembros();
}


function showMiembros() {

    let miembrosHTML = ""

    miembros.map(function (m) {
        miembrosHTML += "<tr>" +
                        "<td>"+m.codigo+"</td>" +
                        "<td>"+m.nombre+"</td>" +
                        "<td>"+m.apellido+"</td>" +
                    "</tr>"
    })

    document.getElementById("lstMiembros").innerHTML = miembrosHTML

    updateCount()
}

function updateCount() {
    document.getElementById("count").innerHTML = miembros.length;
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}