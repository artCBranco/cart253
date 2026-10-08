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

// Keyboard keys. the "sus" are the black keys
let keyC;
let keyCsus
let keyD;
let keyDsus
let keyE;
let keyF;
let keyFsus;
let keyG;
let keyGsus
let keyA;
let keyAsus;
let keyB;

// Prepares the audio for playing
function preload() {
    // All the keyboard sounds
    keyC = loadSound('assets/c.mp3');
    keyCsus = loadSound('assets/c-sus.mp3');
    keyD = loadSound('assets/d.mp3');
    keyDsus = loadSound('assets/d-sus.mp3');
    keyE = loadSound('assets/e.mp3');
    keyF = loadSound('assets/f.mp3');
    keyFsus = loadSound('assets/f-sus.mp3');
    keyG = loadSound('assets/g.mp3');
    keyGsus = loadSound('assets/g-sus.mp3');
    keyA = loadSound('assets/a.mp3');
    keyAsus = loadSound('assets/a-sus.mp3');
    keyB = loadSound('assets/b.mp3');
}

// Sets up the function
function setup() {
    //Create Canvas
    createCanvas(cnvS * cnvW, cnvS)
    // Canvas background (black keys) color
    background(bgColor)

    // Basic settings
    rectMode(CENTER)

    //Text settings
    textFont('Arial')
    textSize(24)
}


// Creates the draw
function draw() {
    fill(keyColor)
    strokeWeight(8)
    stroke(255, 0, 0)
    rect(cnvS * cnvW / 24 * 2, cnvS / 2, cnvS * cnvW / 12, cnvS)
}