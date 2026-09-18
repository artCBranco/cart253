/**
 * Calm horizons
 * Felipe A. C. Branco
 * 
 * This is a calm horizon in the sunset.
*/
"use strict";

function setup() {

    // ▽ Create a canvas that is 800x600 pixels.
    createCanvas(800, 600);

    // ▽ Setting up automatic shape settings
    noStroke()
    rectMode(CENTER)

}

function drawSunset() {

    // ▽ Setting up the background color
    fill("#ffc17f");
    rect(400, 100, 800, 200)
    fill("#ffc17f");
    rect(400, 200, 800, 100)
}