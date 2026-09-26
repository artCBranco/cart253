/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Canvas size
let canvasW = width
let canvasH = height

function setup() {
    // Setup Canvas
    createCanvas(canvasW, canvasH)
    background('#fffdf4')

    frameRate(60)
    // Basic Settings
    rectMode(CENTER)
    noStroke()
}


function mousePressed() {
    background('#fffdf4')
    rect(canvasW / 2, canvasH / 2, canvasW / random(1, 5), canvasH / random(1, 5))
}


function draw() {
    fill(map(mouseY, 0, canvasH, 150, 255) + random(-50, 50), map(mouseY, 0, canvasH, 150, 255) + random(-50, 50), map(mouseY, 0, canvasH, 150, 255) + random(-50, 50))
    circle(mouseX, mouseY, canvasH / 20 * random(0, 1))

}

