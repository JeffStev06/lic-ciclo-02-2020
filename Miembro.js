
class Miembro {

    constructor(nombres, apellidos, contrasena) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.contrasena = contrasena;
    }

    get codigo() {
        return this.createCod();
    }

    get nombre() {
        return this.nombres;
    }
    get apellido() {
        return this.apellidos;
    }

    createCod() {
        let codigo = "";

        let cod = Math.floor(Math.random()*(9999-1000+1)+1000);
        codigo = this.nombres.substring(0,1) + this.apellidos.substring(0,1) + cod;
        console.log(codigo)

        return codigo;
    }

}