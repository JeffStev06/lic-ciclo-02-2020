class Potencia {
    constructor(base,potencia){
        this.potencia=potencia;
        this.base=base;
        this.pow= Math.pow(this.base,this.potencia);
    }
   
    get calculo(){
        return this.pow;
    }
    
    mostrar(idElemento,valor){
        document.getElementById(idElemento).innerHTML = valor;
    }
    
}
