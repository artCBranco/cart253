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
    frameRate (20)
    
    // ▽ Setting up auto-shape settings
    noStroke()
    rectMode(CENTER)
    
}

function draw() {
    background("#060606");
    
    // ▽ horizontal distance is equal to 1/6th of the screen (to give a margin) + movement growing
    let x = windowWidth / 6 + frameCount ^ 5
    
    // ▽ ever growing circle  
    circle(x + 100, windowHeight / 2, 50)
    
    // ▽ Loading text
    fill('#FFFFFF')
    text("Loading...", windowWidth / 2, windowHeight / 3,)
    textSize(64)
    
    
}