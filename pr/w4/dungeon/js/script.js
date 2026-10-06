/**
 * Duungeon
 * By Felipe Amorimm Castelo Branco
 * 
 * A short CHYOA/RPG graphic novel about someone in a dungeon. Press the mouse to continue the dialogue
 */

"use strict";

//Canvas resolution
const cnvS = 600;
//Background color
const bgColor = 30;
//Dialogue roller
let dialog = 0;
// Hint fade-in
let fade = 255

// Setup function
function setup() {
    createCanvas(cnvS * 1.333, cnvS); //Canvas size: 16:9
    background(bgColor)

    // Shape Settings
    rectMode(CENTER)
    noStroke()
    frameRate(12)

    // Text settings
    fill(255, 255, 255)
    textFont('Courier New')
    textSize(width * 0.025)
    textAlign(CENTER, CENTER)
}



// Function to run when mouse is clicked
function mouseClicked() {
    // Whenever mouse is pressed, advance the dialogue by 1
    dialog += 1;
}



// All the dialogue strings, summarized
const boot1 = "You wake in a strange dungeon,"
const boot2 = "face pressed into cold floor."
const opt0 = "[Continue.]"
const dialog1 = "You are in a cell."
const whatDo = "What do you do?"
const opt1 = "[Call for help.]"
const opt2 = "[Look for a way out.]"
const answer1 = "No one answers."
const answer2 = "You are stuck in this cell."
const reset = "[Go to sleep]"



// Function that draws the first text
function drawBoot() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(boot1, width / 2, height / 2)
    text(boot2, width / 2, height / 2 * 1.1)
    text(opt0, width / 2, height / 2 * 1.45)
}



// Function that draws the second text
function drawDialog1() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(dialog1, width / 2, height / 2)
    text(opt0, width / 2, height / 2 * 1.45)
}



// Function that draws the 1st option dialog
function drawDo() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(whatDo, width / 2, height / 2)
    text(opt1, width / 2, height / 2 * 1.45)
}



function drawAnswer1() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(answer1, width / 2, height / 2)
    text(opt0, width / 2, height / 2 * 1.45)
}



// Function that draws the 2nd option dialog
function drawDo2() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(whatDo, width / 2, height / 2)
    text(opt2, width / 2, height / 2 * 1.45)
}



function drawAnswer2() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(answer2, width / 2, height / 2)
    text(opt0, width / 2, height / 2 * 1.45)
}



// Function that draws the 2nd option dialog
function drawDo3() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(whatDo, width / 2, height / 2)
    text(reset, width / 2, height / 2 * 1.45)
}



// Main Draw function
function draw() {

    fade = 255
    // IF statements that make the dialog run
    if (dialog == 0) {
        drawBoot()
    } else if (dialog == 1) {
        drawDialog1()
    } else if (dialog == 2) {
        drawDo()
    } else if (dialog == 3) {
        drawAnswer1()
    } else if (dialog == 4) {
        drawDo2()
        displayHint()
    } else if (dialog == 5) {
        drawAnswer2()
    } else if (dialog == 6) {
        drawDo3()
    } else if (dialog == 7) {
        dialog = 0;
    }



}

// Hint that appears on top right of the page.
function displayHint(fade) {
    // Text
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('Crying is a', width / 4 * 3, height / 4)
    text(' free action.', width / 4 * 3, height / 4 * 1.15)
    //  Bracket
    push()
    textSize(width * 0.09)
    text(']', width / 4 * 3.46, height / 4 * 1.05)
    pop()
}