
//window.addEventListener("load", initSession, false);

var saveIntervalSession

function initSession() {
    
    document.getElementById("clean").style.display = "none"
    console.log("SESION")
    startSavingSession()
    
}

function saveStorageSession() {
    document.getElementById("guardando").style.display = ""
    sessionStorage.nombre = document.formu.nombre.value
    sessionStorage.pais = document.formu.pais.value
    sessionStorage.biografia = document.formu.biografia.value
    setTimeout(function() {
        document.getElementById("guardando").style.display = "none"
    }, 2000)
}

function startSavingSession() {
    saveIntervalSession =  setInterval(saveStorageSession, 5000)
}

function stopSession() {
    clearInterval(saveIntervalSession)
    console.log("Intervalo de Sesión Limpiado")
}
