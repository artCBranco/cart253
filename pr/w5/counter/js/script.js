/**
 * Click Counter
 * by Felipe Amorim Castelo Branco
 * 
 * A simple Click Counter using event listener. It restarts when the mouse leaves the window
 */

"use strict";
// Canvas resolution. Height in pixels and horizontal ratio
let cnvS = 600
let cnvW = 1
let click = 0;
function setup() {
    // Creates the Canvas
    let cnv = createCanvas(cnvS * cnvW, cnvS)
    background(0, 150, 150)
    cnv.addEventListener(click, (event) => {
        click += click;
    });

    //Text settings
    textFont('Arial')
    textSize(64)
    textAlign(CENTER, CENTER)
}


// draw function


function clicker() {
    fill(0, 150, 150)
    rect(cnvS * cnvW, cnvS)
    fill(0, 0, 0)
    text(click, cnvS * cnvW / 2, cnvS * .6)
    text('Click Counter', cnvS * cnvW / 2, cnvS * .35)
}

function draw() {

    clicker()
    //if (mouseIsPressed) {
    //  click += click
    //}
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            redraw()
        }
    })
}


