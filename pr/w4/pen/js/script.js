/**
 * Pen Draw
 * by Felipe Amorim Castelo Branco
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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




function draw() {
    if (key == 'w') {
        clear();
    }//
}

function mouseDragged() {
    fill(0, 0, 0)
    rect(mouseX, mouseY, 15, 35)
}

