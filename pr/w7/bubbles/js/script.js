/**
 * Bubbles
 *by Felipe Amorim Castelo Branco
 * 
 * Click to make bubbles!
 */

"use strict";

/** Canvas properties */
const cnv = {
    /** Canvas Height */
    h: 600,
    /** Canvas Ratio */
    r: 1.333,
    /** Canvas Width  */
    w: 0,
}

// Defines canvas Width
cnv.w = cnv.h * cnv.r;

/** background Color settings */
let bg = {
    r: 200,
    g: 240,
    b: 200,
}

/** Bubbles array */
let bubbles = [];

/** Sets up the Canvas */
function setup() {
    createCanvas(cnv.w, cnv.h);
    background(bg.r, bg.g, bg.b);
    // Basic settings
    noStroke();
    rectMode(CENTER);
    colorMode(RGB);
}


function mouseClicked() {
    backgroundColor(bg.r, bg.g, bg.b)
}

let randomInt = random(200, 255); // Random integer between 1 and 9
/**
 * draws the function
*/
function draw() {
    fill(randomInt, randomInt, randomInt)
    circle(500, 500, 100)

}

/** Draws the bubble template*/
function drawBubble() {
    //Bubble template
    const newBubble = {
        x: cnvW * 0.75,
        y: cnvH * 0.5,
        size: random(75, 100),
        speed: random(1, 10),
        fill: {
            r: rndm,
            g: rndm,
            b: rndm,
        },
        cntr: map(random(0, 1), 0, 255),
    }
}
