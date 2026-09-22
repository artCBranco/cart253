/**
 * Charge
 * by Felipe Amorim Castelo Branco
 * 
 * How long will you wait?
 * 
 */

"use strict";


// ▽ Code Setup
function setup() {

    // ▽ Canvas fullscreen
    createCanvas(1080, 1080);
    background("#060606");

    frameRate(60)

    // ▽ Setting up auto-shape settings
    noStroke()

}

function draw() {

    let x = 150 + frameCount * 3



    // ▽ If the loading bar reaches 100%
    if (x > 930) {

        // ▽ Draw a new frame
        fill("#FFFFFF")
        square(1080, 1080, 540)

        // ▽ Hello world text
        fill("#060606")
        textSize(64)
        text('hello world', 540, 540)

    }

    else {



        // ▽ Loading text
        fill("#FFFFFF")
        textSize(64)
        text('Loading', 540, 540)

        // ▽ Setting up auto-growing square
        fill("#FFFFFF")
        square(x, 740, 25, 100)
    }



}