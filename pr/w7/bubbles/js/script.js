/**
 * Shower Thoughts
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

/** 0.5 */
const half = 0.5;

/** background Color settings */
let bg = {
    r: 180,
    g: 240,
    b: 240,
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

/** Bubble Size, random increments */
let bubbleSize = 0

/** draws the function */
function draw() {

    drawLine()

    bubbleSize = random(cnv.w / 6, cnv.w / 12)

    // Draws bubbles from the array
    for (let i = 0; i < bubbles.length; i++) {
        drawBubble(bubbles[i])
        moveBubble(bubbles[i])
    }

    /*Restarts the bubble movement
    if (bubbleX < 0) {
        bubbleX = cnv.w
        bubbleY = cnv.h * half
    }*/

}


function moveBubble(bubble) {
    // Defines the variables
    let wind = random(-1, 0)
    bubble.x += random(-2, wind)
    bubble.y += random(0, 0.5)
}

/** Draws the bubble template */
function createBubble() {
    /** Bubble template*/
    let newBubble = {
        x: mouseX,
        y: mouseY,
        size: bubbleSize,
    };
    return newBubble;
}

function drawLine(artX) {
    // Draws a background
    fill(bg.r, bg.g, bg.b)
    rect(cnv.w * half, cnv.h * half, cnv.w, cnv.w)
    artX = 5;

    while (artX < cnv.w) {
        artX += 100;
        push()
        strokeWeight(3)
        stroke(255)
        line(0, artX, cnv.w, artX)
        line(artX, 0, artX, cnv.h)
        pop()
        fill(255, 255, 255, 75);
    }
}

function drawBubble(bubbleIn) {
    // Draws the bubble
    push()
    strokeWeight(6)
    fill(255, 255, 255, 75);
    ellipse(bubbleIn.x, bubbleIn.y, bubbleIn.size);
    pop()
}

/** When pressed, create a new bubble*/
function mousePressed() {
    let bubble = createBubble();
    bubbles.push(bubble);
    bubbles.push(bubble);
    console.log(bubbles)
}