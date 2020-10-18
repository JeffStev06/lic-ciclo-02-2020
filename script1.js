window.onload = function(){
document.getElementById("searchData").onclick=function(){
    var a=document.getElementById("base").value;
    var b=document.getElementById("potencia").value;
    const potencia = new Potencia(a,b);
    var resultado=potencia.calculo;
    potencia.mostrar("reusltado",resultado);
};
};