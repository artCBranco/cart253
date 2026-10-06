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
let boot1 = "You wake in a strange dungeon,"
let boot2 = "face pressed into cold floor."
let opt0 = "[Continue.]"
let dialog1 = "You are in a cell."
let whatDo = "What do you do?"
let opt1 = "[Call for help.]"
let opt2 = "[Look for a way out.]"
let answer1 = "No one answers."
let answer2 = "You are stuck in this cell."
let reset = "[Go to sleep]"



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



function drawAnswer1() {
    // Draws a dark background to hide the last dialogue
    fill(30, 30, 30)
    rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
    // Draws the text
    fill(255, 255, 255)
    text(answer2, width / 2, height / 2)
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
    text(reset, width / 2, height / 2 * 1.45)
}




function draw() {
    if (dialog == 0) {
        drawBoot()
    } else if (dialog == 1) {
        drawDialog1()
    }
}















/*



// First text upon boot ("waking up")
function displayBoot() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You wake in a strange dungeon,', width / 2, height / 2 * 1.25)
    text('face pressed into cold floor.', width / 2, height / 2 * 1.35)

    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}

// Second text upon boot ("Where you are")
function displayCell() {
    background(bgColor)
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You are in a cell.', width / 2, height / 2 * 1.3)

    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}

// Repeated string for CTAs
function displayDo() {
    background(bgColor)
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('What do you do?', width / 2, height / 2 * 1.3)

    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}

// Conntinue button, returns to boot
function displayOpt0() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Continue.]', width / 2, height / 2 * 1.55)

    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}

// First option button
function displayOpt1() {
    return text('[Call for help.]', width / 4, height / 2 * 1.55)
}

// Second option button
function displayOpt2() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Look for a way out.]', width / 4 * 3, height / 2 * 1.55)

    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}

// Third option button, returns to boot
function displayOpt3() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Go to sleep.]', width / 2, height / 2 * 1.55)

    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}

// Answer to Option 1
function displayAnswer1() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('No one answers.', width / 2, height / 2 * 1.3)


    fill(255, 0, 0)
    rect(cnvS / 2, cnvS / 2, 300, 300)
}
// Answer to Option 2
function displayAnswer2() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You are stuck in this cell.', width / 2, height / 2 * 1.3)

    fill(255, 0, 0)
    rect(cnvS / 2, cnv / 2, 300, 300)
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
//Buttons Y = .75, .8
//left button
// X = 0.15, 0.5
// Middle button
// X = 0.525, 0.825
// Right button
// X = 0.78, 1.22
// drawDo()

//displayAnswer1()
/*

    displayOpt2();
    displayOpt0();
    */

// MouseSpot controls the location of the button.
// 0 = FALSE, 1 = LEFT button, 2 = CENTER, 3 = RIGHT
////let mouseSpot;

// Visibility controls what buttons appear on screen
//let visible = 0;