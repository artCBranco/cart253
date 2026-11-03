/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
    b: 180,
}

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

/** draws the function */
function draw() {

}