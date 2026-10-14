/**
 * Pianinho
 * by Felipe Amorim Castelo Branco
 * 
 * This program lets the user play a simple piano.
 * All the main variables appear at the beginning.
 */

"use strict";



// Canvas Size
let cnvS = 600
// Canvas ratio. Vertical < 1 < Horizontal
let cnvW = 1.6
//Canvas color and black keys color
let bgColor = 20;
// White keys color
let keyColor = 255;
// Stroke and key press highlight color
let strColor = 150;
// Key press position
let prs;


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
    textSize(48)
    textAlign(CENTER, CENTER)
}


// Creates the draw
function draw() {

    prs = 2
    // White Piano Keys
    drawKey(0, "C")
    drawKey(2, "D")
    drawKey(4, "E")
    drawKey(6, "F")
    drawKey(8, "G")
    drawKey(10, "A")
    drawKey(12, "B")
    // Draws the highlight when White Piano Keys are pressed


    // Black Piano keys
    drawSharp(1, "D#")
    drawSharp(3, "E#")
    drawSharp(7, "G#")
    drawSharp(9, "A#")
    drawSharp(11, "B#")
    // Draws the highlight when Black Piano Keys are pressed
    drawKeyPress(prs)
}

/*
* Draws the white piano keys.
* Pos is the position onscreen, divided by 7 because 7 notes. 
* note is the text indicating the piano note
*/
function drawKey(pos, note) {
    // Basic piano settings
    strokeWeight(8)
    stroke(strColor)
    fill(keyColor)
    // Piano key, ps is defined within function parenthesis.
    rect(cnvS * cnvW * pos / 14, 0, cnvS * cnvW / 7, cnvS)

    // Basic text settings
    noStroke()
    fill(strColor)
    // Text. Note is defined within function parenthesis.
    text(note, cnvS * cnvW * pos / 14 + cnvS * .125, cnvS * 0.9)
}

/*
* Draws the black piano keys.
* Pos is the position onscreen, divided by 7 because 7 notes. 
* note is the text indicating the piano note
*/
function drawSharp(pos, note) {
    // Basic piano settings
    strokeWeight(8)
    stroke(strColor)
    fill(bgColor)
    // Piano key, ps is defined within function parenthesis.
    rect(cnvS * cnvW * (pos + 1) / 14 - cnvS * 0.075, 0, cnvS * cnvW * .1, cnvS * .6)

    // Basic text settings
    noStroke()
    fill(strColor)
    // Text. Note is defined within function parenthesis.
    text(note, cnvS * cnvW * (pos + 1) / 14 + cnvS * 0.005, cnvS * cnvW * .325)
}

/* Highlights the piano key when pressed. 
* prs is the position of the key pressed, 
*divided by 7 which is the amount of keys.
*/
function drawKeyPress(prs) {

    if (prs % 2 == 0) {
        // Basic piano settings
        strokeWeight(8)
        stroke(strColor)
        fill(strColor)
        // Piano key highlight, prs is defined within function parenthesis.
        rect(cnvS * cnvW * prs / 14, 0, cnvS * cnvW / 7, cnvS)
    } else {
        // Basic piano settings
        strokeWeight(8)
        stroke(strColor)
        fill(strColor)
        // Piano key highlight, prs is defined within function parenthesis.
        rect(cnvS * cnvW * (prs + 1) / 14 - cnvS * 0.075, 0, cnvS * cnvW * .1, cnvS * .6)
    }
}

