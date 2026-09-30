/**
 * Calm horizons
 * Felipe A. C. Branco
 * 
 * This is a calm horizon in the sunset.
*/
"use strict";

function setup() {

    // ▽ Canvas with 1080x1080 pixels.
    createCanvas(1080, 1080);
    background("#060606");

    // ▽ Setting up auto-shape settings
    noStroke()
    rectMode(CENTER)

}

function drawSky() {

    // ▽ Setting up the bg gradient
    fill("#0073d2");
    rect(540, 100, 1080, 200)
    fill("#3aa6ff");
    rect(540, 400, 1080, 400)
    fill("#6eb9f7");
    rect(540, 840, 1080, 478)
    filter(BLUR, 48)

    // ▽ Drawing the left bg cloud 
    fill("#e1e9f0")
    ellipse(50, 300, 200)
    ellipse(200, 400, 250)
    ellipse(50, 400, 200)
    ellipse(350, 425, 200)

    fill("#c0cdd8")
    ellipse(100, 400, 125)
    fill("#e1e9f0")
    ellipse(100, 425, 125)

    // ▽ Drawing the right bg cloud 
    fill("#c0cdd8")
    ellipse(900, 500, 150)
    ellipse(800, 475, 125)
    ellipse(900, 450, 125)
    ellipse(1000, 450, 200)

}

function drawMountain() {

    // ▽ Drawing the left mountain
    fill("#01070d")
    triangle(200, 900, 400, 600, 600, 900)
    triangle(300, 900, 500, 700, 700, 900)

    // ▽ Drawing the right mountain
    triangle(800, 900, 900, 750, 1100, 900)
    triangle(900, 900, 1040, 600, 1200, 900)

    // ▽ Drawing the ground
    rect(540, 992, 1080, 200)

}

function drawSun() {
    // ▽ Mask only works  inside push/pop
    push()

    // ▽ Drawing a Mask over the Rays
    beginClip({ invert: true })

    // ▽ Draw the cardinal directions
    ellipse(725, 825, 90)
    ellipse(725, 575, 90)
    ellipse(600, 700, 90)
    ellipse(850, 700, 90)

    // ▽ Draw the Secondary directions
    ellipse(825, 600, 110)
    ellipse(625, 600, 110)
    ellipse(825, 800, 110)
    ellipse(625, 800, 110)

    endClip()

    // ▽ Drawing the sun rays
    fill("#ffbb00")
    ellipse(725, 700, 250)

    // ▽ Drawing the sun
    fill("#fedf8c")
    ellipse(725, 700, 130)

    pop()

}

function draw() {

    drawSky()
    drawMountain()
    drawSun()

}