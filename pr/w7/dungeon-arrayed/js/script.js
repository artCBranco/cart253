/**
 * Duungeon Arrayed
 * By Felipe Amorimm Castelo Branco
 * 
 * A short CHYOA/RPG graphic novel about someone in a dungeon. Press the mouse to continue the dialogue.
 * UPDATE: Code now uses Array
 */

"use strict";

/** Canvas properties (NEW) */
const cnv = {
    /** Canvas Height (Updated) */
    h: 600,
    /** Canvas Ratio (Updated) */
    r: 1.333,
    /** Canvas Width (Updated) */
    w: 0,
    /** Background color (Updated) */
    bg: 30,
}
// Defines canvas Width
cnv.w = cnv.h * cnv.r;

/** Text properties (NEW) */
let txt = {
    font: 'Courier New',
    size: 0.025,
    clr: 255,
}

/** Setup Function (Updated)*/
function setup() {
    // Creates the Canvas
    createCanvas(cnv.w, cnv.h);
    background(cnv.bg)

    // Shape Settings
    rectMode(CENTER)
    noStroke()

    // Text settings
    fill(txt.clr)
    textFont(txt.font)
    textSize(cnv.w * txt.size)
    textAlign(CENTER, CENTER)
}

/** 0.5 (NEW) */
const half = 0.5
const tQuarter = 0.75

/** All the dialogue strings, in an Array (NEW) */
let speech = ["", "You wake in a strange dungeon,", "face pressed into cold floor.", "You are in a cell.", "What do you do?", "No one answers.", "What do you do?", "You are stuck in this cell."]
/** All the options strings, in an Array (NEW) */
let options = ["", "[Continue.]", "[Call for help.]", "[Look for a way out.]", "[Go to sleep.]"];
/** Dialogue Array Index (NEW) */
let speechIndex = 1;
/** Option Array Index (NEW) */
let optIndex = 0;


/** Advances the mouse on MouseReleased*/
function mouseClicked() {
    // Whenever mouse is pressed, advance the dialogue by 1
    speechIndex += 1;
    // Decides which Option to show (NEW)
    optIndex = 1;
    if (speechIndex === 2) {
        speechIndex = 3;
    } else if (speechIndex === 4) {
        optIndex = 2
    } else if (speechIndex === 6) {
        optIndex = 3
    } else if (speechIndex === 7) {
        optIndex = 4
    }

    //Resets the dialogue (Updated)
    if (speechIndex === speech.length) {
        speechIndex = 1;
        optIndex = 1;
    }
}

/** draws a background on each new draw (NEW) */
function drawBg() {
    fill(cnv.bg)
    rect(cnv.w * half, cnv.h * half, cnv.w, cnv.h)
}
/** draws the option on each new dialogue (NEW) */
function OptCenter() {
    /** Option to be displayed (NEW) */
    let currentOpt = options[optIndex];
    // Draws the "Continue" Option
    if (speechIndex > 0 && speechIndex < 4) {
        optIndex = 1;
        // Option that appears on-screen
        text(currentOpt, cnv.w * half, cnv.h * 0.725)
    }
}


/** Function that draws the text template (Updated) */
function drawText() {
    /** Dialogue to be displayed (NEW) */
    let currentLine = speech[speechIndex];
    /** Dialogue to be displayed (NEW) */
    let currentLine2 = speech[2];

    // Draws the dialogue
    text(currentLine, cnv.w * half, cnv.h * half);
    // Draws the second line of the first dialogue.
    if (speechIndex === 1) {
        text(currentLine2, cnv.w * half, cnv.h * 0.55)
    } else if (speechIndex === 4) {
        // Text
        text('Crying is a', cnv.w * tQuarter, cnv.h * 0.25)
        text(' free action.', cnv.w * tQuarter, cnv.h * 0.3)
        //  Bracket
        push()
        textSize(64)
        text(']', cnv.w * 0.875, cnv.h * 0.2725)
        pop()
    }
}

/** Main Draw (Updated) */
function draw() {
    drawBg();
    fill(txt.clr);
    drawText();
    OptCenter();

    //Draws the Dialogue Number (If needed)
    //text(speechIndex, cnv.w * half, cnv.h * 0.25);
}
