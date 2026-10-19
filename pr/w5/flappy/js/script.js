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
// Jump Height (Difficulty) Must be > 1.5
let dif = 5;
// Gravity (Falling Speed)
let grav = 10;
// Stores flappy current position
let pos;
// Distance travelled
let dist;


// Player proprieties
let flappy = {
    //Color
    color: {
        r: 60,
        g: 60,
        b: 60,
    },

    // Vertical position
    base: cnvS,

    // Shape settings
    size: cnvS / 28,
    round: 4,
}

// Obstacle positions
let obst = {
    x: cnvS * cnvW,
    y: cnvS * .75,
}

// background color
let bg = {
    r: 200,
    g: 240,
    b: 240,
}



// Set up function
function setup() {
    // Creates the canvas
    createCanvas(cnvS * cnvW, cnvS);

    // Basic settings
    rectMode(CENTER);
    noStroke()

    // Text settings
    textSize(96)
    textAlign(CENTER, CENTER)
    textFont('Courier New')

    pos = flappy.base / 2
}



// Draw function
function draw() {
    background(bg.r, bg.g, bg.b);
    // Flappy bird
    drawFlappy()

    // draws the boundaries
    fill(flappy.color.r, flappy.color.g, flappy.color.b)
    rect(cnvS * cnvW / 2, 0, cnvS * cnvW, cnvS * .05)
    rect(cnvS * cnvW / 2, cnvS * 0.975, cnvS * cnvW, cnvS * .05)
    rect(-count * 50, cnvS / 2, cnvS * cnvW * .2, cnvS)

    // Defines the current position of the Flappy bird
    pos = flappy.base + flappy.size - jump;

    // Gravity
    if (jump > 0) {
        jump = jump - 1 * grav
    }



    // Loss conditions
    if (pos > cnvS + grav * 2 || pos < 0) {
        loss()
    }

    rules()
    drawObstacle()

    // Obstacle loss. FUNCTION NOT WORKING
    if (pos > obst.y && (obst.x - count * 50) === (cnvS * cnvW / 2)) {
        loss()
    }
}



function drawObstacle() {
    fill(flappy.color.r, flappy.color.g, flappy.color.b)
    rect(obst.x - count * 50, cnvS, cnvS / 8, obst.y)
}



// Flappy appearance
function drawFlappy() {
    //Background Square (Hides previous draws)
    background(bg.r, bg.g, bg.b);


    // Flappy bird. Vertical position (pos) is variable.
    fill(flappy.color.r, flappy.color.g, flappy.color.b)
    square(cnvS * cnvW / 2, pos, flappy.size, flappy.round)
}



// When any key is pressed, jump.
function keyPressed() {
    // If Spacebar is pressed, add jump, add count.
    if (keyCode === 32) {
        jump = jump + cnvS / dif
        count = count + 1
    }
    // If key 'r' is pressed, restart the game.
    if (keyCode === 82) {
        loop()
        jump = cnvS / 2
        count = 0;
        dist = 0;

    }
}



// Loss screen
function loss() {
    //Draws "You Lose"
    fill(flappy.color.r, flappy.color.g, flappy.color.b)
    text("You lose!", cnvS / 2 * cnvW, cnvS / 2 * 0.9)

    // Draws Jump Counter
    push()
    textSize(48)
    text('total jumps:', cnvS / 2 * cnvW, cnvS / 2 * 1.2)
    text(count, cnvS / 2 * cnvW, cnvS / 2 * 1.4)
    pop()

    noLoop()
}



// Game controls string
function rules() {

    // Draws the rulesS
    push()
    textSize(24)
    text('Press [SPACEBAR] to fly,', cnvS * 0.8 * cnvW, cnvS * 0.15)
    text('[R] to try again.', cnvS * 0.835 * cnvW, cnvS * 0.19)
    pop()
}