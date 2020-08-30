
var i = 0;
var height = 500;
var top = 0
var autoplay = true;

autoplaySlider()

function log() {
    console.log("test")
}

function autoplaySlider() {
    do {
        
        /*
        if (i < 5) {
            top = top - height
        } else {
            top = top + height
        }
        */
        setTimeout( function() {
            //document.getElementById('sld').style.top = top
            console.log("test")
        }, 1000)
        /*
        if () {
            i ++;
        } else {
            i --;
        }
        */
       i++;
    } while(i==3);
}