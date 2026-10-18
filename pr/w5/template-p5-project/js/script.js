/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// Canvas ratio and resolution
let cnvS = 900;
let cnvW = 1.6;



// Count how many jumps total for the Lose() screen
let count = 0;
// Initial jump (Flappy height)
let jump = 200;
// difficulty (jumps get smaller)
let dif = 1;
// Player proprieties
let flappy = {
    //Color
    color: {
        r: 0,
        g: 0,
        b: 0,
    },

    // How fast it falls
    speed: 2,
    // Vertical position
    pos: cnvS,

    // Shape settings
    size: cnvS / 28,
    round: 4,
}



// background color
let bg = {
    r: 240,
    g: 240,
    b: 200,
}



// Set up function
function setup() {
    // Creates the canvas
    createCanvas(cnvS * cnvW, cnvS);
    background(bg.r, bg.g, bg.b);

    // Basic settings
    rectMode(CENTER);
    noStroke()

    // Text settings
    textSize(96)
    textAlign(CENTER, CENTER)
    textFont('Courier New')
}


// Draw function
function draw() {

    // Gravity
    if (jump > 0) {
        jump -= jump / 60
    }

    //   Flappy bird
    drawFlappy()

    // Loss conditions
    if (flappy.pos < 0 && flappy.pos > cnvS) {
        loss()
    }
}


// Flappy appearance
function drawFlappy() {
    fill(bg.r, bg.g, bg.b)
    square(cnvS * cnvW / 2, flappy.pos + flappy.size - jump, cnvS, flappy.round)
    fill(flappy.r, flappy.g, flappy.b)
    square(cnvS * cnvW / 2, flappy.pos + flappy.size - jump, flappy.size, flappy.round)
}

// When any key is pressed, jump
function keyPressed() {
    jump = jump + cnvS / 10 * dif
    count = count + 1
}


// Loss screen
function loss() {
    fill(bg.r, bg.g, bg.b)
    square(cnvS * cnvW / 2, flappy.pos + flappy.size - jump, cnvS, flappy.round)
    fill(flappy.r, flappy.g, flappy.b)
    text("You lose!", cnvS / 2 * cnvW, cnvS / 2 * 0.9)
    push()
    textSize(48)
    text('total jumps:', cnvS / 2 * cnvW, cnvS / 2 * 1.2)
    text(count, cnvS / 2 * cnvW, cnvS / 2 * 1.4)
    pop()

}