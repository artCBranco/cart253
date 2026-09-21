/**
 * Charge
 * by Felipe Amorim Castelo Branco
 * 
 * How long will you wait?
 * 
 */

"use strict";

function setup() {

    // ▽ Canvas fullscreen
    createCanvas(1080, 1080);
    background("#060606");



    frameRate(60)

    // ▽ Setting up auto-shape settings
    noStroke()

}



function drawSquare(y) {


    fill(255, 255, 255)
    square(y, 740, 25, 100)

    textSize(64)
    text('Loading', 540, 540)

}

function draw(y) {

    drawSquare(y = 150 + frameCount * 6)


    if (y = 800)
}