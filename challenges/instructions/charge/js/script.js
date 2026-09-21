/**
 * Charge
 * by Felipe Amorim Castelo Branco
 * 
 * How long will you wait?
 * 
 */

"use strict";

function setup() {

    // ▽ Canvas fullscreen + Frame
    createCanvas(windowWidth, windowHeight);

    // ▽ Loading speed
    frameRate(5)


    // ▽ Setting up auto-shape settings
    noStroke()

}

function draw() {
    background("#060606");

    // ▽ horizontal distance is equal to 1/6th of the screen (to give a margin) + movement growing
    let width = windowWidth / 6 + frameCount ^ 5

    // ▽ ever growing bar  
    rect(windowWidth / 6, windowHeight / 2, width, 50, 100)

    // ▽ Loading text
    fill('#FFFFFF')
    text("Loading...", windowWidth / 2, windowHeight 4 / 6,)
    textSize(windowWidth / 64)


}