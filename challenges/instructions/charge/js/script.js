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

    let x = 150 + frameCount

    // ▽ Setting up auto-growing square
    fill(255, 255, 255)
    square(x, 740, 25, 100)

    if (square(x) = 930) {

        drawImage()

    }

    // ▽ Loading text
    textSize(64)
    text('Loading', 540, 540)


}