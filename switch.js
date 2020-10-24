
/** 
 * Aquí se maneja por medio de LocalStorage, la opción de uso dentro del ejemplo
 * ya sea localStorage o sessionStorage 
*/

window.addEventListener("load", init, false);

function init() {
    
    var Switch = document.getElementById("storage")

    if (typeof(Storage) !== "undefined") {
        if (localStorage.opc) {
            console.log("Existe: " + localStorage.opc)
            //localStorage.removeItem("opc")

            Switch.addEventListener("change", changeStorage, false)
            // Se asigna el valor del tipo de STORAGE en memoria
            if (localStorage.opc == 1) {
                document.getElementById("ttlStorage").innerHTML = "Local Storage"
                document.getElementById("storage").value = true
                // Carga los datos desde LocalStorage
                cargarDatos(1)
                initLocal()
            } else {
                document.getElementById("ttlStorage").innerHTML = "Session Storage"
                document.getElementById("storage").value = false
                initSession()
            }
            
        } else {
            console.log("NO existe")
            localStorage.opc = 1
            
        }
    } else {
        alert("Lo sentimos, tu navegador no posee soporte de 'Almacenamiento Web'")
    }

}

// Carga los datos desde SessionStorage o LocalStorage
function cargarDatos(tipo) {

    if (tipo == 1) {
        document.formu.nombre.value = localStorage.nombre
        document.formu.pais.value = localStorage.pais
        document.formu.biografia.value = localStorage.biografia
    } else {
        document.formu.nombre.value = sessionStorage.nombre
        document.formu.pais.value = sessionStorage.pais
        document.formu.biografia.value = sessionStorage.biografia
    }

}

// Cambia el tipo de almacenamiento Web para el control de Switch
function changeStorage() {

    if (localStorage.opc == 1) {
        localStorage.opc = 2
        document.getElementById("ttlStorage").innerHTML = "Session Storage"
        document.getElementById("storage").value = false
        console.log("Type: " + localStorage.opc)
        stopLocal()
        cargarDatos(localStorage.opc)
        initSession()
    } else {
        localStorage.opc = 1
        document.getElementById("ttlStorage").innerHTML = "Local Storage"
        document.getElementById("storage").value = true
        console.log("Type: " + localStorage.opc)
        stopSession()
        cargarDatos(localStorage.opc)
        initLocal()
    }

}
