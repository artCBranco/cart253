/**
 * Calm horizons
 * Felipe A. C. Branco
 * 
 * This is a calm horizon in the sunset.
*/
"use strict";

function setup() {

    // ▽ Canvas with 1080x1080 pixels.
    createCanvas(1080, 1080);
    background("#060606");

    // ▽ Setting up auto-shape settings
    noStroke()
    rectMode(CENTER)

}

function drawSky() {

    // ▽ Setting up the bg gradient
    fill("#0073d2");
    rect(540, 100, 1080, 200)
    fill("#3aa6ff");
    rect(540, 400, 1080, 400)
    fill("#6eb9f7");
    rect(540, 840, 1080, 478)
    filter(BLUR, 48)

    // ▽ Drawing the left bg cloud 
    fill("#e1e9f0")
    ellipse(50, 300, 200)
    ellipse(200, 400, 250)
    ellipse(50, 400, 200)
    ellipse(350, 400, 200)


}

function draw() {
    drawSky()

}