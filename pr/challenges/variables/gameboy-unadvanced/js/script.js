/**
 * Gameboy Unadvanced
 * by Felipe Amorim Castelo Branco
 * 
 * A simple moving square. It can jump.
 */

"use strict";

// Canvas resolution
let cnv = 1080

function setup() {
    //Square Canvas
    createCanvas(cnv, cnv)
    background(100, 100, 100)

    // text settings
    fill(0, 0, 0)
    textFont('LucidaConsole', 18)

    // Base settings
    noStroke()
    rectMode(CENTER)
}

function draw() {
    //Screen Depth
    fill(90, 90, 90)
    square(cnv * 0.4885, cnv * 0.4885, 925, 12)
    //Green Screen
    fill(117, 166, 82)
    square(cnv / 2, cnv / 2, 900, 16)

    fill(0, 0, 0)
    square(cnv * move.x / 8, cnv * move.y / 8, cnv / 25, 6)


}