
//window.addEventListener("load", initLocal, false);

var saveIntervalLocal

function initLocal() {

    document.getElementById("clean").style.display = ""
    document.getElementById("clean").addEventListener("click", cleanStorage, false)
    console.log("LOCAL")
    startSavingLocal()

}

function saveStorageLocal() {
    document.getElementById("guardando").style.display = ""
    localStorage.nombre = document.formu.nombre.value
    localStorage.pais = document.formu.pais.value
    localStorage.biografia = document.formu.biografia.value
    setTimeout(function() {
        document.getElementById("guardando").style.display = "none"
    }, 2000)
}

function startSavingLocal() {
    saveIntervalLocal =  setInterval( saveStorageLocal, 5000)
}

function stopLocal() {
    clearInterval(saveIntervalLocal)
    console.log("Intervalo Local Limpiado")
}

function cleanStorage() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("pais");
    localStorage.removeItem("biografia");
    document.formu.nombre.value = ""
    document.formu.pais.value = 1
    document.formu.biografia.value = ""
}