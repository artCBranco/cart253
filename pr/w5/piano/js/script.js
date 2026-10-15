/**
 * Pianinho
 * by Felipe Amorim Castelo Branco
 * 
 * This program lets the user play a simple piano.
 * All the main variables appear at the beginning.
 */

"use strict";

// Canvas Size
const cnvS = 900;
// Canvas ratio. Vertical < 1 < Horizontal
const cnvW = 2;
// number of keys
const nmb = 20;
//Canvas color and black keys color
let bgColor = 40;
// Key roundness
let round = 16;
// White keys color
let keyColor = 240;
// Stroke and key press highlight color
let strColor = 150;
// Key press position
let prs;
// Oscillator variable
let note;



// Sets up the function
function setup() {
    //Create Canvas
    createCanvas(cnvS * cnvW, cnvS);
    // Canvas background
    background(strColor);

    //Text settings
    textFont('Arial');
    textSize(32);
    textAlign(CENTER, CENTER);

    // Creates the sound
    note = new p5.Oscillator(440, `sine`);
}



// Creates the draw
function draw() {
    // draws the responsive piano function
    drawPiano();
    // Configures the piano controls
    drawSwitch();
}



function drawSwitch() {
    switch (key) {
        case 'a':
            prs = 0;
            break;
        case 'w':
            prs = 1
            break;
        case 's':
            prs = 2
            break;
        case 'e':
            prs = 3
            break;
        case 'd':
            prs = 4
            break;
        case 'f':
            prs = 6
            break;
        case 't':
            prs = 7
            break;
        case 'g':
            prs = 8
            break;
        case 'y':
            prs = 9
            break;
        case 'h':
            prs = 10
            break;
        case 'u':
            prs = 11
            break;
        case 'j':
            prs = 12
            break;
        case 'k':
            prs = 14
            break;
        case 'o':
            prs = 15
            break;
        case 'l':
            prs = 16
            break;
        case 'p':
            prs = 17
            break;
        case ';':
            prs = 18
            break;
        default:
            prs = -2;
            break;
    }
}



/*
* Function that assembles the entire piano 
* with responsive keys. Visuals only, no sound here.
*/
function drawPiano() {
    // White Piano Keys
    drawKey(0, "C", "a");
    drawKey(2, "D", "s");
    drawKey(4, "E", "d");
    drawKey(6, "F", "f");
    drawKey(8, "G", "g");
    drawKey(10, "A", "h");
    drawKey(12, "B", "j");
    drawKey(14, "C", "k");
    drawKey(16, "D", "l");
    drawKey(18, "E", ";");

    // Draws the highlight when White Piano Keys are pressed
    if (prs % 2 == 0) {
        drawKeyPress(prs);
    }

    // Black Piano keys
    drawSharp(1, "C#", "w");
    drawSharp(3, "D#", "e");
    drawSharp(7, "F#", "t");
    drawSharp(9, "G#", "y");
    drawSharp(11, "A#", "u");
    drawSharp(15, "C#", "o");
    drawSharp(17, "D#", "p");
    // Draws the highlight when Black Piano Keys are pressed
    if (prs % 2 !== 0) {
        drawKeyPress(prs);
    }
}


/*
* Draws the white piano keys.
* Pos is the position onscreen, divided by 7 because 7 notes. 
* note is the text indicating the piano note
* btn indicates the key to press
*/
function drawKey(pos, note, btn) {
    // Basic piano settings
    strokeWeight(8);
    stroke(strColor);
    fill(keyColor);
    // Piano key, ps is defined within function parenthesis.
    rect(cnvS * cnvW * pos / nmb, -round, cnvS * cnvW / 10, cnvS, 0, 0, round, round);

    // Basic text settings
    noStroke();
    fill(strColor);
    // Text. Note is defined within function parenthesis.
    text(note, cnvS * cnvW * pos / nmb + cnvS / 9.5, cnvS * 0.9);
    push()
    textSize(18);
    text(btn, cnvS * cnvW * pos / nmb + cnvS * .1, cnvS * 0.8);
    pop()
}



/*
* Draws the black piano keys.
* Pos is the position onscreen, divided by 7 because 7 notes. 
* note is the text indicating the piano note
* btn indicates the key to press
*/
function drawSharp(pos, note, btn) {
    // Basic piano settings
    strokeWeight(6);
    stroke(strColor);
    fill(bgColor);
    // Piano key, ps is defined within function parenthesis.
    rect(cnvS * cnvW * (pos + 1) / nmb - cnvS * 1.5 / nmb, -round, cnvS * .15, cnvS * .6, 0, 0, round, round);

    // Basic text settings
    noStroke()
    fill(strColor)
    // Text. Note is defined within function parenthesis.
    text(note, cnvS * cnvW * (pos + 1) / nmb, cnvS * .475);
    push()
    fill(strColor);
    textSize(18);
    text(btn, cnvS * cnvW * (pos + 1) / nmb, cnvS * .375);
    pop()
}



/* Highlights the piano key when pressed. 
* prs is the position of the key pressed, 
*divided by 7 which is the amount of keys.
*/
function drawKeyPress(prs) {
    if (prs % 2 == 0) {
        // Basic piano settings
        strokeWeight(8);
        stroke(strColor);
        fill(strColor);
        // Piano key highlight, prs is defined within function parenthesis.
        rect(cnvS * cnvW * prs / nmb, -round, cnvS * cnvW / 10, cnvS, 0, 0, round, round);
    } else {
        // Basic piano settings
        strokeWeight(8);
        stroke(strColor);
        fill(strColor);
        // Piano key highlight, prs is defined within function parenthesis.
        rect(cnvS * cnvW * (prs + 1) / nmb - cnvS * 1.5 / nmb, 0, cnvS * .15, cnvS * .6, 0, 0, round, round);
    }
}



// Translate press to a note
function getPress(key) {
    if (key == "a")
        return "C";
    if (key == "w")
        return "Cs";
    if (key == "s")
        return "D";
    if (key == "e")
        return "Ds";
    if (key == "d")
        return "E";
    if (key == "f")
        return "F";
    if (key == "t")
        return "Fs";
    if (key == "g")
        return "G";
    if (key == "y")
        return "Gs";
    if (key == "h")
        return "A";
    if (key == "u")
        return "As";
    if (key == "j")
        return "B";
    if (key == "k")
        return "C2";
    if (key == "o")
        return "C2s";
    if (key == "l")
        return "D2";
    if (key == "p")
        return "D2s";
    if (key == ";")
        return "E2";
    return "";
}



// Translate note to a frequency in Hertz
function getFreq(press) {
    if (press === "C")
        return 261.63;
    if (press === "Cs")
        return 277.18;
    if (press == "D")
        return 293.66;
    if (press === "Ds")
        return 311.13;
    if (press === "E")
        return 329.63;
    if (press == "F")
        return 349.23;
    if (press === "Fs")
        return 369.99;
    if (press === "G")
        return 392;
    if (press == "Gs")
        return 415.3;
    if (press === "A")
        return 440;
    if (press === "As")
        return 466.16;
    if (press == "B")
        return 493.88;
    if (press === "C2")
        return 523.25;
    if (press === "C2s")
        return 554.37;
    if (press == "D2")
        return 587.33;
    if (press === "D2s")
        return 622.25;
    if (press === "E2")
        return 659.25;
    return 0;
}



// If key is pressed, start the sound.
function keyPressed(event) {
    // Change frequency according to key pressed
    note.freq(getFreq(getPress(event.key)));
    // Start sound
    note.start();
}



// If key is released, stop the sound.
function keyReleased() {
    // Stop sound
    note.stop();
}
