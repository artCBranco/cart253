/**
 * 
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Canvas resolution
let cnv = 600;
//Background color
let bgColor = 30;
//Speed
let speed = 10;


function setup() {
    createCanvas(cnv * 1.333, cnv); //Canvas size: 16:9
    background(bgColor)

    // Shape Settings
    rectMode(CENTER)
    noStroke()

    // Text settings
    textFont('Courier New')
    textSize(width * 0.025)
    textAlign(CENTER, CENTER)
}

// First text upon boot ("waking up")
function drawWake() {
    fill(255, 255, 255)
    text('You wake in a strange dungeon,', width / 2, height / 2 * 1.25)
    text('face pressed into cold floor.', width / 2, height / 2 * 1.35)
}
// Repeated string for CTAs
function drawDo() {
    text('What do you do?', width / 2, height / 2 * 1.3)
}

function drawOpt1() {
    text('face pressed into cold floor.', width / 2, height / 2 * 1.35)
}


function draw() {




}

