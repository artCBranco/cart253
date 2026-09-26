/*
 * Polka Dot Abstract
 * by Felipe Amorim Castelo Branco
 */

/*
Polka Dot Abstract
by Felipe Amorim Castelo Branco
*/

"use strict";

// Canvas properties.
let canvas = {
    x: 1080,
    y: 1080,
    fill: {
        r: 245,
        g: 245,
        b: 255
    }
}

function setup() {
    // Setup Canvas.
    createCanvas(canvas.x, canvas.y)
    background(canvas.fill.r, canvas.fill.g, canvas.fill.b)

    frameRate(24)
    // Basic Settings.
    rectMode(CENTER)
    noStroke()
}

function drawTxt() {
    //Text settings.
    textSize(18)
    textAlign(CENTER, CENTER)
    textFont('Helvetica')

    //Text 1 - black.
    fill(0, 0, 0)
    text("Draw anything!", canvas.x / 2, canvas.y / 2)
    //Text 2 - white.
    fill(canvas.fill.r, canvas.fill.g, canvas.fill.b)
    text("press [SPACEBAR] to save", canvas.x / 2, canvas.y / 2 * 1.05)
}

//Draw a random sized, rando colored square in the background centered.
function mousePressed() {
    background(canvas.fill.r, canvas.fill.g, canvas.fill.b)
    rect(canvas.x / 2, canvas.y / 2, canvas.x / random(1, 5), canvas.y / random(1, 5))
}

function keyPressed() {
    if (keyCode === 32) {
        save('PolkaDot', 'png')
    }
}

function draw() {
    drawTxt()

    //Random soft colors.
    fill(map(mouseY, 0, canvas.y, 150, 255) + random(-50, 50), map(mouseY, 0, canvas.y, 150, 255) + random(-50, 50), map(mouseY, 0, canvas.y, 150, 255) + random(-50, 50))
    //Circle over the mouse.
    circle(mouseX, mouseY, canvas.y / 20 * random(0, 1))
}
