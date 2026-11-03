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


let bubbleX = 0
let bubbleY = 0
let bubbleSize = 0
/**
 * draws the function
*/
function draw() {
    fill(bg.r, bg.g, bg.b)
    rect(cnv.w * half, cnv.h * half, cnv.w, cnv.w)

    bubbleX += random(-5, -8)
    bubbleY += random(-15, 16)
    bubbleSize = random(cnv.w / 6, cnv.w / 12)


    for (let i = 0; i < bubbles.length; i++) {
        drawBubble(bubbles[i])
    }

    if (bubbleX < 0) {
        bubbleX = cnv.w
        bubbleY = cnv.h * half
    }
}


/** Draws the bubble template */
function createBubble() {
    //Bubble template
    let newBubble = {
        x: mouseX,
        y: mouseY,
        size: bubbleSize,
    };
    return newBubble;
}

function drawBubble(bubbleIn) {
    let elipX = bubbleIn.x + bubbleX;
    let elipY = bubbleIn.y + bubbleY;
    let elipSize = bubbleIn.size;
    push()
    strokeWeight(6)
    fill(255, 255, 255, 50);
    ellipse(elipX, elipY, elipSize);
    pop()
}

function mousePressed() {
    let bubble = createBubble();
    bubbles.push(bubble);
    bubbles.push(bubble);
    console.log(bubbles)
}