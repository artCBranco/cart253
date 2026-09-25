/**
 * Let There Be Light
 * by Felipe Amorim Castelo Branco
 * 
 * a simple p5.js coded animation that turns on a flashlight following the mouse's axis
 */

"use strict";

let canvasW = 1920
let canvasH = 1080

function setup() {
    // Create a full screen canvas
    createCanvas(canvasW, canvasH)

    // Rectangle alignment, remove cursor
    rectMode(CENTER)
    noStroke()

}

// Simple Background


function drawDay() {

    background(205, 240, 255)
}
function drawEve(x) {

    background(240, 160, 100, x)
}
function drawNight(x) {

    background(20, 20, 40, x)
}

function draw() {
    drawDay()
    drawEve(map(mouseX, canvasW / 6, canvasW / 6 * 3, 0, 255))
    drawNight(map(mouseX, canvasW / 6 * 3, canvasW / 6 * 5, 0, 255))

    fill("#ffe604")
    circle(canvasW / 2, map(mouseX, canvasW / 6, canvasW / 6 * 5, 0, canvasH * 1.25), 100)
}
