
function ejemplos() {

    let absHTML = "";
    let abs = -53;

    absHTML = '<p>'+ abs +' -> '+ Math.abs(abs) +'</p>'
    document.getElementById('ejemplo1').innerHTML = absHTML;

    let roundHTML = "";
    let round1 = 2.4;
    let round2 = 2.7;
    let round3 = 2.5;

    roundHTML = '<p>'+ round1 +' -> '+ Math.round(round1) +'</p>' +
                '<p>'+ round2 +' -> '+ Math.round(round2) +'</p>' +
                '<p>'+ round3 +' -> '+ Math.round(round3) +'</p>'
    document.getElementById('ejemplo2').innerHTML = roundHTML;

    let ceilHTML = "";
    let ceil1 = 2.4;
    let ceil2 = 2.7;
    let ceil3 = 2.5;

    ceilHTML = '<p>'+ ceil1 +' -> '+ Math.ceil(ceil1) +'</p>' +
                '<p>'+ ceil2 +' -> '+ Math.ceil(ceil2) +'</p>' +
                '<p>'+ ceil3 +' -> '+ Math.ceil(ceil3) +'</p>'
    document.getElementById('ejemplo3').innerHTML = ceilHTML;

    let floorHTML = "";
    let floor1 = 2.4;
    let floor2 = 2.7;
    let floor3 = 2.5;

    floorHTML = '<p>'+ floor1 +' -> '+ Math.floor(floor1) +'</p>' +
                '<p>'+ floor2 +' -> '+ Math.floor(floor2) +'</p>' +
                '<p>'+ floor3 +' -> '+ Math.floor(floor3) +'</p>'
    document.getElementById('ejemplo4').innerHTML = floorHTML;

    let expHTML = "";
    let exp = 1

    expHTML = '<p>'+ exp +' -> '+ Math.exp(exp) +'</p>'
    document.getElementById('ejemplo5').innerHTML = expHTML;

    let logHTML = "";
    let log = 1;

    logHTML = '<p>'+ log +' -> '+ Math.log(log) +'</p>'
    document.getElementById('ejemplo6').innerHTML = logHTML;

    let randomHTML = "";

    randomHTML = '<p>De 0 a 1 -> '+ (Math.random()) +'</p>' +
              '<p>Dos cifras -> '+ Math.floor(Math.random() * 10) + 1 +'</p>' +
              '<p>Tres cifras -> '+ Math.floor(Math.random() * 100) + 1 +'</p>'
    document.getElementById('ejemplo7').innerHTML = randomHTML;

}

window.onload = ejemplos;