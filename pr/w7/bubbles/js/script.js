/**
 * Bubbles
 *by Felipe Amorim Castelo Branco
 * 
 * Click to make bubbles!
 */

"use strict";

/** Canvas Height */
let cnvH = 800;
/** Canvas Ratio */
let cnvR = 1.8;
/** Canvas Width */
let cnvW = cnvH * cnvR;


let bubbles = [];

/**
 * Sets up the canvas
*/
function setup() {
    createCanvas(cnvW, cnvH);
    background(200, 150, 200);
    // Basic settings
    noStroke();
    rectMode(CENTER);
    colorMode(RGB);

}


/**
 * draws the function
*/
function draw() {
    let clr = '100,200, 255';
    fill(clr)
    circle(500, 500, 100)

}


/**
 * draws the bubble template
*/
function drawBubble(newBubble) {
    /**
 * Bubble template
*/
    const newBubble = {
        x: cnvW * 0.75,
        y: cnvH * 0.5,
        size: random(75, 100),
        fill: {
            r: random(200, 250),
            g: random(200, 250),
            b: random(200, 250),
        },
        cntr: map(random(0, 1), 0, 255),
    }
}
