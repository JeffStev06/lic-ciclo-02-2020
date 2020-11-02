$(document).ready(function(){

    $("#formRegister").submit(function(e){
        e.preventDefault();
        var nombre=$("#name").val()
        var apellido=$("#apellido").val()
        var email=$("#email").val()
        var pass=$("#contra").val()
        $.post("http://127.0.0.1:3050/register", { nombre: nombre, apellido: apellido ,correo:email,contra:pass} )
        .done(function( data ) {
            alertify.success(data);
          })
          .fail(function(data) {
          	console.log(data)
            alertify.error('Ocurrio un error, intenta de nuevo');
          })
    });

    $("#log").click(function(e){
        var email=$("#emailL").val()
        var pass=$("#contraL").val()
        $.post("http://127.0.0.1:3050/login", { correo:email,contra:pass} )
        .done(function( data ) {
            alertify.success(data);
          });
    });


});