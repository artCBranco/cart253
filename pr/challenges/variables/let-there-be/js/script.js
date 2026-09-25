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
    // Background color
    background(20, 20, 20)

    // Rectangle alignment, remove cursor
    rectMode(CENTER)
}

// Simple Background
function drawDarkBG() {

    // Darker wall
    fill(15, 15, 15)
    rect(canvasW / 6 * 5, canvasH / 2, canvasW / 6 * 2.5, canvasH)

    // Lighter ground
    fill(40, 40, 40)
    rect(canvasW / 2, canvasH / 6 * 5.5, canvasW, canvasH / 6)

}

// Simple Background
function drawLightBG() {

    // Darker wall
    fill(5, 5, 5)
    rect(canvasW / 6 * 5, canvasH / 2, canvasW / 6 * 2.5, canvasH)
    // Lighter ground
    fill(40, 40, 40)
    rect(canvasW / 2, canvasH / 6 * 5.5, canvasW, canvasH / 6)

}

function drawLanternDark() {
    fill(160, 160, 160)
    circle(mouseX, mouseY, 100)
}

function draw() {
    drawDarkBG()
    drawLanternDark()
}
