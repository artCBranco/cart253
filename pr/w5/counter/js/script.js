/**
 * Click Counter
 * by Felipe Amorim Castelo Branco
 * 
 * A simple Click Counter using event listener. It restarts when the mouse leaves the window
 */

"use strict";



// Canvas resolution. Height in pixels and horizontal ratio
let cnvS = 600;
let cnvW = 1;
let count = 0;



// Sets up the canvas
function setup() {
    // Creates the Canvas
    createCanvas(cnvS * cnvW, cnvS)
    background(0, 150, 150)

    //Text settings
    rectMode(CENTER)
    textFont('Arial');
    textSize(64);
    textAlign(CENTER, CENTER);
}



// Draw function
function draw() {
    drawClicker();

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            Zero();
        }
    })
}



// Draws the counter
function drawClicker() {
    fill(0, 150, 150);
    rect(cnvS * cnvW / 2, cnvS / 2, cnvS * cnvW, cnvS);
    fill(0, 0, 0);
    text(count, cnvS * cnvW / 2, cnvS * .6);
    text('Click Counter', cnvS * cnvW / 2, cnvS * .35);

}


function Count() {
    count = count + 1;
}

function Zero() {
    count = 0;
}

window.addEventListener("click", (event) => {
    Count()
});
