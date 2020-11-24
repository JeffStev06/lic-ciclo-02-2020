$(document).ready(function () {
    var index = 0;
    var nombre = new Array(3);
    var notas = new Array(3);

    $("#formData").submit(function (e) {
        if (index <= 3) {
            e.preventDefault();
            var promedioA = parseInt($('#noteOne').val()) + parseInt($('#noteTwo').val())
                + parseInt($('#noteThree').val()) + parseInt($('#noteFour').val()) +
                parseInt($('#noteFive').val());
            notas[index] = promedioA / 5;
            var name = $('#nombre').val();
            nombre[index] = name;
            $('#avance').html((index+1)+"/3");

            if (index == 2) {
                var anterior = ""
                var alumno = "";
                var max = Math.max(...notas);
                var min = Math.min(...notas);
                var promedio;
                for (var i = 0; i < 3; i++) {
                    anterior = $('#consolidado').html();
                    promedio = notas[i];
                    alumno = "<br><li>" + "Nombre:" + nombre[i] + "</li>"
                    if (max > 8) {
                        promedio = promedio + 1;
                    } else {
                        promedio = promedio - 1;
                    }
                    if (promedio >= 7) {
                        promedio += "<strong> (Aprobado)</strong>"
                    } else if (promedio >= 4 && promedio < 7) {
                        promedio += "<strong> (Regular)</strong>"
                    } else {
                        promedio += "<strong> (Reprobado)</strong>"
                    }
                    if (max == notas[i]) {
                        promedio += "<strong> Mayor Promedio</strong>"
                    }
                    if (min == notas[i]) {
                        promedio += "<strong> Menor Promedio</strong>"
                    }
                    alumno += "<li>Promedio:" + promedio + "</li></ul>";
                    $('#consolidado').html(anterior + alumno);
                }

            }
            clear();
        } else {
            alertify.error('Ya Ingresaste 3 Alumnos');
        }
        index++;
    });
    function clear() {
        $('#noteOne').val(0);
        $('#noteTwo').val(0);
        $('#noteThree').val(0);
        $('#noteFour').val(0);
        $('#noteFive').val(0);
        $('#nombre').val("");
    }
});