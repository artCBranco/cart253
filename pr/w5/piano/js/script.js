/**
 * Pianinho
 * by Felipe Amorim Castelo Branco
 * 
 * This program lets the user play a simple piano.
 */

"use strict";

// Canvas Size
let cnvS = 600
// Canvas ratio. Vertical < 1 < Horizontal
let cnvW = 1.6
//Canvas color 
let bgColor = 20;
let keyColor = 255;
let pressColor = 200;

// Keyboard keys. the "sus" are the black keys
let noteC;
let noteCsus
let noteD;
let noteDsus
let noteE;
let noteF;
let noteFsus;
let noteG;
let noteGsus
let noteA;
let noteAsus;
let noteB;

// Prepares the audio for playing
function preload() {
    // All the keyboard sounds
    noteC = loadSound('assets/c.mp3');
    noteCsus = loadSound('assets/c-sus.mp3');
    noteD = loadSound('assets/d.mp3');
    noteDsus = loadSound('assets/d-sus.mp3');
    noteE = loadSound('assets/e.mp3');
    noteF = loadSound('assets/f.mp3');
    noteFsus = loadSound('assets/f-sus.mp3');
    noteG = loadSound('assets/g.mp3');
    noteGsus = loadSound('assets/g-sus.mp3');
    noteA = loadSound('assets/a.mp3');
    noteAsus = loadSound('assets/a-sus.mp3');
    noteB = loadSound('assets/b.mp3');
}

// Sets up the function
function setup() {
    //Create Canvas
    createCanvas(cnvS * cnvW, cnvS)
    // Canvas background (black keys) color
    background(bgColor)

    // Basic settings

    //Text settings
    textFont('Arial')
    textSize(24)
}


// Creates the draw
function draw() {

    drawKey(0)
    drawKey(1)
    drawKey(2)
    drawKey(3)
    drawKey(4)
    drawKey(5)
    drawKey(6)
}

function drawKey(pos) {

    /*if ( === 1) {
        fill(pressColor)
    } else {
        fill(keyColor)
    }*/
    strokeWeight(8)
    stroke(255, 0, 0)

    // Create all white keys. Pos = Position on canvas
    rect(cnvS * cnvW * pos / 7, 0, cnvS * cnvW / 7, cnvS)
}