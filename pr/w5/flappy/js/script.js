/**
 * Flappy Bird
 * Felipe Amorim Castelo Branco
 * 
 * In this game, users control a little flying bird. By pressing any key, they keep the bird in the air.
 */

"use strict";



// Canvas ratio and resolution
let cnvS = 900;
let cnvW = 1.6;


// Important Variables

// Count how many jumps total for the Lose() screen
let count = 0;
// Initial jump (Flappy height)
let jump = cnvS / 3;
// Difficulty (Jump Height)
let dif = 2.5;
// Gravity (Falling Speed)
let grav = 2;
// summarizes flappy current position
let pos = flappy.base + flappy.size - jump;



// Player proprieties
let flappy = {
    //Color
    color: {
        r: 150,
        g: 150,
        b: 150,
    },

    // Vertical position
    base: cnvS,

    // Shape settings
    size: cnvS / 28,
    round: 4,
}




// background color
let bg = {
    r: 60,
    g: 60,
    b: 60,
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
        jump = jump - 1 * grav
    }

    //   Flappy bird
    drawFlappy()

    // Loss conditions
    if (pos < 0 && pos > cnvS) {
        loss()
    }
}



// Flappy appearance
function drawFlappy() {
    //Background Square (Hides previous draws)
    fill(bg.r, bg.g, bg.b)
    square(cnvS * cnvW / 2, pos, cnvS)

    // Flappy bird. Vertical position (pos) is variable.
    fill(flappy.r, flappy.g, flappy.b)
    square(cnvS * cnvW / 2, pos, flappy.size, flappy.round)
}



// When any key is pressed, jump.
function keyPressed() {
    jump = jump + (cnvS * dif) / grav
    count = count + 1
}



// Loss screen
function loss() {
    //Draws "You Lose"
    fill(flappy.r, flappy.g, flappy.b)
    text("You lose!", cnvS / 2 * cnvW, cnvS / 2 * 0.9)

    // Draws Jump Counter
    push()
    textSize(48)
    text('total jumps:', cnvS / 2 * cnvW, cnvS / 2 * 1.2)
    text(count, cnvS / 2 * cnvW, cnvS / 2 * 1.4)
    pop()
}