/**
 * Jump
 * by Felipe Amorim Castelo Branco
 * 
 * Charge your jump. Jump Higher.
 */

"use strict";


//Canvas size
let cnvS = 1080;
//Canvas ratio. Vertical < 1 < Horizontal
let cnvW = 1.333;
//Canvas color
let bgLight = 200;
let bgDark = 0;

// toggle yes/no
let toggle = 0;

// Button Colors
let btn = {
    bg: 100, // background
    drop: 50, // dropshadow
    tog: 150, // switch
}



// sets up the canvas
function setup() {
    createCanvas(cnvS * cnvW, cnvS);

    // Basic settings
    rectMode(CENTER);
    noStroke();
    textSize(96)
    textAlign(CENTER, CENTER)
}


// Draw function, toggle Off
function draw() {
    // Light mode
    background(bgLight);

    // Draws the button
    fill(btn.drop)
    rect(cnvS * cnvW / 2, cnvS / 2 * 1.2, 300, 100, 100)
    fill(btn.bg)
    rect(cnvS * cnvW / 2 * 0.99, cnvS / 2 * 0.99 * 1.2, 300, 100, 100)
    fill(btn.tog)
    circle(cnvS * cnvW / 2 * 0.86 * 0.99, cnvS / 2 * 0.99 * 1.2, 90, 90)

    // text
    fill(btn.drop)
    text("Light mode", cnvS * cnvW / 2, cnvS / 2 * 0.8)

    // Toggle On
    if (toggle === 1) {
        // Dark mode
        background(bgDark);

        // Draws the button
        fill(btn.drop)
        rect(cnvS * cnvW / 2, cnvS / 2 * 1.2, 300, 100, 100)
        fill(btn.bg)
        rect(cnvS * cnvW / 2 * 0.99, cnvS / 2 * 0.99 * 1.2, 300, 100, 100)
        fill(btn.tog)
        circle(cnvS * cnvW / 2 * 1.14 * 0.99, cnvS / 2 * 0.99 * 1.2, 90, 90)

        // text
        fill(btn.tog)
        text("Dark mode", cnvS * cnvW / 2, cnvS / 2 * 0.8)
    }
}

// If mouse is pressed, switch toggle
function mousePressed() {
    if (mousePressed && toggle === 0) {
        toggle = 1
    } else if (mousePressed && toggle === 1) {
        toggle = 0
    }
}