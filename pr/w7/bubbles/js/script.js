/**
 * Bubbles
 * by Felipe Amorim Castelo Branco
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
const half = 0.5;

/** background Color settings */
let bg = {
    r: 180,
    g: 240,
    b: 180,
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
    textSize(64);
}

/**
 * draws the function
*/
function draw() {

}

/** Draws the bubble template */
function createBubble() {
    //Bubble template
    const newBubble = {
        x: cnv.w * 0.75,
        y: cnv.h * 0.5,
        size: random(75, 100),
        speed: random(1, 10),
        fill: {
            r: random(200, 255),
            g: random(200, 255),
            b: random(200, 255),
        },
    };
    return newBubble;
}

function drawBubble() {
    push()
    strokeWeight(6)
    fill(bubble.fill.r, bubble.fill.g, bubble.fill.b)
    ellipse(bubble.x, bubble.y, bubble.size);
    pop()
}

function mousePressed() {

    let bubble = createBubble();
    bubbles.push(bubble);
    fill(random(200, 255), random(200, 255), random(200, 255))
    rect(cnv.w * half, cnv.h * half, cnv.w, cnv.h)
}



