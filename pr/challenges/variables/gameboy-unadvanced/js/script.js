/**
 * Gameboy Unadvanced
 * by Felipe Amorim Castelo Branco
 * 
 * A simple moving square. It can jump.
 */

"use strict";

// Canvas resolution
let cnv = 1080;
let ad = 3;
let ws = 3;

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

function keyPressed() {

}

function drawSquare() {

    // draws the movement limit of the square
    let moveX = 0.35 * constrain(round(ad), 3, 20)
    let moveY = 0.35 * constrain(round(ws), 3, 20)

    //game controls
    if (keyIsPressed === true) {
        if (key === w) {
            ws -= 1;
        }
        if (key === s) {
            ws += 1;
        }
        if (key === a) {
            ad -= 1;
        }
        if (key === d) {
            ad += 1;
        }
    }

    //movable squared
    fill(0, 0, 0)
    square(cnv * moveX / 8, cnv * moveY / 8, cnv / 25, 6)
}


function draw() {

    //Screen Depth
    fill(90, 90, 90)
    square(cnv * 0.4885, cnv * 0.4885, 925, 12)
    //Green Screen
    fill(117, 166, 72)
    square(cnv / 2, cnv / 2, 900, 16)

    drawSquare()

}