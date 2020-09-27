Empleado = function() {
    // Propiedades del objeto
    var nombre = "";
    var apellido = "";

    return{
        getNombre: function(){
            return nombre;
        },
        setNombre: function(n){
            nombre = n;
        },
        getApell: function(){
            return apellido;
        },
        setApell: function(a){
            apellido = a;
        }
    }
}();

function showEmpleado() {
    nombreCompleto = Empleado.getNombre() + " " + Empleado.apellido
    
    document.getElementById("empleado").innerHTML = nombreCompleto;
}

window.onload = function () {
    var btn = document.getElementById("ingresar");

    btn.addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;

        Empleado.setNombre(nombre);
        Empleado.setApell(apellido);

        console.log(Empleado.getNombre())
        showEmpleado()
    });
}