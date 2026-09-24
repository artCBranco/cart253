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
    textAlign(CENTER)

}



function draw() {

    // ▽ square horizontal position equals margin + constant move.
    let x = 150 + frameCount * 0.6

    if (x > 780) {

        // ▽ Draw a new frame
        fill("#FFFFFF")
        background("#ffffff");

        // ▽ Hello world text
        fill("#060606")
        textSize(64)
        text("You're still here? Get a life, bro", 540, 540)

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