/**
 * 
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Canvas resolution
let cnvS = 600;
//Background color
let bgColor = 30;
//Fade in;Fade Out
let fade = 255;
//Dialogue roller
let dialog = 0;


function setup() {
    let cnv = createCanvas(cnvS * 1.333, cnvS); //Canvas size: 16:9
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
/*

// First text upon boot ("waking up")
function drawBoot() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You wake in a strange dungeon,', width / 2, height / 2 * 1.25)
    text('face pressed into cold floor.', width / 2, height / 2 * 1.35)
}

// Second text upon boot ("waking up")
function drawCell() {
    background(bgColor)
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You are in a cell.', width / 2, height / 2 * 1.3)
}

// Repeated string for CTAs
function drawDo() {
    background(bgColor)
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('What do you do?', width / 2, height / 2 * 1.3)
}

// First option button
function drawOpt1() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Call for help.]', width / 4, height / 2 * 1.55)
}

// Second option button
function drawOpt2() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Look for a way out.]', width / 4 * 3, height / 2 * 1.55)
}

// Third option button, returns to boot
function drawOpt3() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Go to sleep.]', width / 2, height / 2 * 1.55)
}

// Answer to Option 1
function drawAnswer1() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('No one answers.', width / 2, height / 2 * 1.3)
}
// Answer to Option 2
function drawAnswer2() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You are stuck in this cell.', width / 2, height / 2 * 1.3)
}

// Hint that appears on top right of the page.
function drawHint(fade) {
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

// If mouse is pressed...
/*function mouseReleased(cnv) {
    // Background covers the screen
    fill(0, 0, 0);
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS, cnvS);
    //Draw second text
    drawCell();
    //Draw dialogue options
    drawOpt1();
    drawOpt2();
}*/

let size = 0;
// Draws the canvas
function draw() {

    if (mouseIsPressed) {
        size += 20;
    }

    if (size < 1) {
        fill(0, 255, 0);
        circle(50, 50, 50, 50);
    }
    else if (size > 1) {
        fill(255, 0, 0);
        circle(50, 50, 50 * size, 50 * size);
    }
}

/*drawWake()
if (mouseX < cnv * 1.333 / 2 && mouseY < cnv / 2) {
drawAnswer1()
drawOpt2()
}


/*if (frameCount > 12 * 12) {
fade = 0
fade = fade + 5
drawCell()
}
if (frameCount > 12 * 24) {
fade = fade + 5
drawOpt1()
drawOpt2()
}



if (frameCount > 12 * 12) {
fade = fade + 5
drawHint()
}

/*drawWake()
drawDo()
drawOpt1()
drawOpt2()
drawOpt3()
drawAnswer1()
drawAnswer2()*/


/*You wake in a strange dungeon, face pressed into cold floor. 
The room is bare and dark, cobbled stone walls and rusted bars.
You are in a cell. 
What do you do?
[Call for help]
No one answers
[Look for a way out]
You are stuck in this cell.
[Go to sleep]
Hint: Crying is a free action
*/