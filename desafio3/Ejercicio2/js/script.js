
var cont = 0;
var lessThan3, greaterThan3;
var elemHTML1 = "", elemHTML2 = "";
var empExtra = 0;

$(document).ready(function() {
    lessThan3 = $('#lt3')
    greaterThan3 = $('#gt3')
});

function reset() {
    $("#agregar").prop("disabled", false);
    $("#nombre").val("");
    $("#ganancias").val("1000.00");
    $("#empleados").val("10");
    $("#nombre").focus();
    cont = 0;
    empExtra = 0;
    elemHTML1 = "";
    elemHTML2 = "";
    lessThan3.html('');
    greaterThan3.html('');
}

function clean() {
    $("#nombre").val("");
    $("#ganancias").val("1000.00");
    $("#empleados").val("10");
    $("#nombre").focus();
}

$('#reset').click(function () {
    reset();
});
$('#agregar').click(function () {
    var flag = 0; //Bandera para validación de campos
    var flag2 = 0; //Bandera para verificar si empleados han sudo quitados
    var name = "";
    var monto = 0;
    var emp = 0;

    if (!$("#nombre").val()) {
        alertify.error('El campo Nombre no debe quedar vacio');
    } else {
        name = $("#nombre").val();
        flag += 1;
    }

    if (!$("#ganancias").val() || $("#ganancias").val() < 1000) {
        alertify.error('El campo Ganancias no debe quedar vacio, y las ganancias deben ser mayores a 1000');
    } else {
        flag += 1;
        monto = $("#ganancias").val();

    }

    if (!$("#empleados").val() || $("#empleados").val() < 10) {
        alertify.error('El campo de empleados no debe quedar vacio y el número de empleados debe ser mayor a 10');
    } else {
        flag += 1;
        emp = $("#empleados").val();
    }

    // Si los datos hasta acá fueron ingresados correctamente, se procesan
    if (flag == 3) {
        clean();
        cont += 1;
        $("#titulo").text("Ingresar Sucursal No." + (cont + 1));
        alertify.success('Sucursal ingresada');
        if (cont == 1) {
            // Si hay más de 20 empleados se guarda 1 o 2 para traladar a otra sucursal
            if (emp == 21) {
                empExtra += 1;
                emp -= 1;
                flag2 += 1;
            } else if (emp > 21) {
                empExtra += 2;
                emp -= 2;
                flag2 += 1;
            }
        }

        // Sucursal con monto de ganancua menor a 30mil
        if (monto < 30000) { 
            elemHTML1 += "<div class='col'> <div class='card'>";
            elemHTML1 += "<h5 class='card-header'> Sucursal: " + name + "</h5>";
            elemHTML1 += "<div class='card-body'> <p class='card-title'> Ganancias: $" + monto + "</p>";
            if (flag2 == 1) {
                elemHTML1 += "<p class='card-text'>Empleados: " + emp + "</p>";
            } else {
                if (empExtra > 0) {
                    emp =  parseInt(emp) +1;
                    elemHTML1 += "<p class='card-text'>Empleados: " +emp + "</p>";
                    empExtra -= 1;
                }
            }
            elemHTML1 += '</div></div></div>';
            lessThan3.html(elemHTML1)

            // Sucursal con monto de ganancua mayor o igual a 30mil
        } else if (monto >= 30000) {
            elemHTML2 += "<div class='col'> <div class='card'>";
            elemHTML2 += "<h5 class='card-header'> Sucursal: " + name + "</h5>";
            elemHTML2 += "<div class='card-body'> <p class='card-title'> Ganancias: $" + monto + "</p>";
            if (flag2 == 1) {
                elemHTML2 += "<p class='card-text'>Empleados: " + emp + "</p>";
            } else {
                if (empExtra > 0) {
                    emp =  parseInt(emp) +1;
                    elemHTML2 += "<p class='card-text'>Empleados: " + emp + "</p>";
                    empExtra -= 1;
                }
            }
            elemHTML2 += '</div></div></div>';
            greaterThan3.html(elemHTML2);
        }

        if (cont == 3) {
            $("#legend").text("Sucursales ingresadas");
            clean();
            $("#agregar").prop("disabled", true);
        }
    }


});
