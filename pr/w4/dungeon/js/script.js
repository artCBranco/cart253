/**
 * 
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Canvas resolution
const cnvS = 600;
//Background color
const bgColor = 30;
//Dialogue roller
let dialog = 0;





// Setup function
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

function displayUI() {
    if (UI.visible)

}








/*
// Draws the canvas
function draw() {
    fade = fade + 1
    // Whenever mouse is pressed, advance the dialogue by 1
    if (mouseIsPressed) {
        dialog += 1;
    }
    if (dialog < 1) {
        drawBoot();
    }
    else if (dialog == 1) {
        drawCell();
    }
    else if (dialog >= 2) {
        drawCell();
        drawOpt1();
        drawOpt2();
    }
    else if (dialog >= 6) {
        drawOpt3()
    }


    if (dialog > 2 && mouseX < cnvS * 1.333 / 2 && mouseY > cnvS / 2 && dialogue < 5) {
        fill(bgColor)
        rect(width / 2, height / 2, width, height)
        drawAnswer1();
        drawOpt2();
    }
    else if (dialog > 2 && mouseX > cnvS * 1.333 / 2 && mouseY > cnvS / 2 && dialogue < 5) {
        fill(bgColor)
        rect(width / 2, height / 2, width, height)
        drawAnswer2();
        drawOpt1();
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