/**
 * Pen Draw
 * by Felipe Amorim Castelo Branco
 * 
 * This program lets the user draw with the mouse. Pressing SPACEBAR will erase the drawing. Pressing S will save it as an image. 
 */
"use strict";

// Size and color of the Canvas
let cnvS = 1600;
let bg = 200;

// setting up the canvas
function setup() {
    createCanvas(cnvS, cnvS)
    background(bg, bg, bg)

    // Draw Settings
    rectMode(CENTER)
    noLoop();
}

// If SPACEBAR is pressed, clear the drawing
//function clearDraw() {
function keyPressed() {
    background(bg)
}


//function draw: Currently empty
function draw() {

}

function mouseDragged() {
    fill(0, 0, 0)
    rect(mouseX, mouseY, 5, 35)
}

