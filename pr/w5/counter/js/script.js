/**
 * Click Counter
 * by Felipe Amorim Castelo Branco
 * 
 * A simple Click Counter using event listener. Click to raise the counter, Rightclick to lower the counter. It restarts when the window is minimized. 
 */

"use strict";



// Canvas resolution. Height in pixels and horizontal ratio
let cnvS = 600;
let cnvW = 1;
let count = 0;

//Prevents the default action of right click
window.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

// Sets up the canvas
function setup() {
    // Creates the Canvas
    createCanvas(cnvS * cnvW, cnvS)
    background(0, 150, 150)

    //Basic settings
    rectMode(CENTER)
    textFont('Arial');
    textSize(64);
    textAlign(CENTER, CENTER);
}



// Draw function
function draw() {
    // Draws the counter
    drawClicker();

    // If the screen is minimized, resets the counter.
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            zero();
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



// Function to add to counter
function counter() {
    count = count + 1;
}



// Function to remove from counter
function invers() {
    count = count - 1;
}



// Function to reset the counter
function zero() {
    count = 0;
}



// If screen is clicked, add to the counter
window.addEventListener("click", (event) => {
    counter()
});


// if right button is clicked, remove from counter.
window.addEventListener("contextmenu", (event) => {
    invers()
});