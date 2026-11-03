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


let bubbleX = cnv.w * 0.75;
let bubbleY = cnv.h * 0.5;
let bubbleSize = cnv.w / 8
/**
 * draws the function
*/
function draw() {
    fill(bg.r, bg.g, bg.b)
    rect(cnv.w * half, cnv.h * half, cnv.w, cnv.w)
    bubbleX += random(-1, -3)
    bubbleY += random(-5, 5)
    bubbleSize += random(-15, 15)

    for (let i = 0; i <= bubbles.length; i++) {
        drawBubble(bubbles[i])
    }
}


/** Draws the bubble template */
function createBubble() {
    //Bubble template
    let newBubble = {
        x: bubbleX,
        y: bubbleY,
        size: bubbleSize,
    };
    return newBubble;
}

function drawBubble() {
    push()
    strokeWeight(6)
    fill(200, 100, 0, 50);
    ellipse(bubbleX, bubbleY, bubbleSize);
    pop()
}

function mousePressed() {
    let bubble = createBubble();
    bubbles.push(bubble);
    console.log(bubbles)
}



