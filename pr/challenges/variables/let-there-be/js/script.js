/*
 * Let There Be Light
 * by Felipe Amorim Castelo Branco
 * 
 * a simple p5.js coded animation of the sun setting
 */
"use strict";

// define the canvas size
let canvasW = 1920
let canvasH = 1080

function setup() {
    // Create the canvas
    createCanvas(canvasW, canvasH)

    // Rectangle alignment, remove cursor
    rectMode(CENTER)
    noStroke()

}

// Background for the Day
function drawDay() {

    background(205, 240, 255)
}

// Background for the Evening
function drawEve(x) {

    background(240, 160, 100, x)
}

// Background for the Night
function drawNight(x) {

    background(20, 20, 40, x)
}

// Mountains on the foreground
function drawMountain() {

    /*
     * Constrain the  Mouse X to a number between 0 and a percentage of the Canvas Width
     * This will define the tallest peak of the mountain
     * Then it remaps the constrained Mouse X from percentage of CanvasW to a number between 0 and 1.
     * This will define when the camera will pan downwards
    */
    let a = map(constrain(mouseX, 0, canvasW * 0.525), canvasW * 0.75, canvasW / 12, 0, 1)

    // Create the black movie bars
    fill(0, 0, 0)
    rect(canvasW / 2, canvasH / 6 * 5.75, canvasW, canvasH / 12)
    rect(canvasW / 2, canvasH / 6 * 0.15, canvasW, canvasH / 12)

    /* 
    Create the three mountain peaks using relative numbers.
    The Height is multiplied by the variable 'a' to animate it with MouseX
    */
    triangle(canvasW / 6 * 0.25, canvasH / 6 * 5.75, canvasW / 6 * 1.75 * 0.75, constrain(canvasH / 0.5 * a, 0, canvasH / 2 * 4), canvasW / 6 * 4 * 0.75, canvasH / 6 * 5.75)
    triangle(0, canvasH / 8 * 7.75, canvasW / 8 * 0.75 * 1.25, constrain(canvasH / 0.5 * a, 0, canvasH / 2 * 4), canvasW / 8 * 4 * 0.75, canvasH / 8 * 7.75)
    triangle(canvasW / 2, canvasH / 6 * 5.75, canvasW, constrain(canvasH / 0.5 * a, 0, canvasH * 1.5), canvasW, canvasH)

}

// Draws the function
function draw() {

    // MouseX controls the opacity of the Evening and Night backgrounds, making them appear.
    drawDay()
    drawEve(map(mouseX, canvasW / 6, canvasW / 6 * 3, 0, 255))
    drawNight(map(mouseX, canvasW / 6 * 3, canvasW / 6 * 5, 0, 255))

    // Draws the setting sun. The height is set to a MouseX value within the canvas boundaries. 
    fill("#ffe604")
    circle(canvasW / 2, map(mouseX, canvasW / 6, canvasW / 6 * 5, 0, canvasH * 1.25), canvasH / 10)
    drawMountain()
}
