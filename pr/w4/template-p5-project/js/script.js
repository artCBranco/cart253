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
    fill(255, 255, 255)
    textFont('Courier New')
    textSize(width * 0.025)
    textAlign(CENTER, CENTER)
}

// First text upon boot ("waking up")
function drawWake() {

    text('You wake in a strange dungeon,', width / 2, height / 2 * 1.25)
    text('face pressed into cold floor.', width / 2, height / 2 * 1.35)
}
// Repeated string for CTAs
function drawDo() {
    text('What do you do?', width / 2, height / 2 * 1.3)
}
// First option button
function drawOpt1() {
    text('[Call for help.]', width / 4, height / 2 * 1.55)
}

// Second option button
function drawOpt2() {
    text('[Look for a way out.]', width / 4 * 3, height / 2 * 1.55)
}

// Third option button
function drawOpt3() {
    text('[Go to sleep.]', width / 2, height / 2 * 1.55)
}


// Answer to Option 1
function drawAnswer1() {
    text('No one answers.', width / 2, height / 2 * 1.3)
}
// Answer to Option 2
function drawAnswer2() {
    text('You are stuck in this cell.', width / 2, height / 2 * 1.3)
}

function drawHint() {
    text('Crying is a', width / 4 * 3, height / 4)
    text(' free action.', width / 4 * 3, height / 4 * 1.15)
    push()
    textSize(width * 0.09)
    text(']', width / 4 * 3.46, height / 4 * 1.05)
    pop()

}

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

function draw() {
    drawHint()
    /*drawWake()
    drawDo()
    drawOpt1()
    drawOpt2()
    drawOpt3()
    drawAnswer1()
    drawAnswer2()*/
}


