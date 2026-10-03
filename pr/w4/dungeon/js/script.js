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
//hint fade in
let fade = 255;

// Setup function
function setup() {
    createCanvas(cnvS * 1.333, cnvS); //Canvas size: 16:9
    background(bgColor)

    // Shape Settings
    //rectMode(CENTER)
    noStroke()
    frameRate(12)

    // Text settings
    fill(255, 255, 255)
    textFont('Courier New')
    textSize(width * 0.025)
    textAlign(CENTER, CENTER)
}







// MouseSpot controls the location of the button.
// 0 = FALSE, 1 = LEFT button, 2 = CENTER, 3 = RIGHT
let mouseSpot;



// Visibility controls what buttons appear on screen
let visible = 0;
// Draws the function
function draw() {
    // Load the appropriate button according to where the mouse is.
    if (mouseY > cnvS * 0.75 && mouseY < cnvS * 0.8 && mouseX > cnvS * 0.15 && cnvS * 0.5) {
        mouseSpot = 1;
    } else if (mouseY > cnvS * 0.75 && mouseY < cnvS * 0.8 && mouseX > cnvS * 0.525 && cnvS * 0.825) {
        mouseSpot = 2;
    } else if (mouseY > cnvS * 0.75 && mouseY < cnvS * 0.8 && mouseX > cnvS * 0.78 && cnvS * 1.22) {
        mouseSpot = 3;
    }
    // If mouse is pressed on left screen, show Answer 1
    if (mouseSpot = 1 && mouseIsPressed) {
        visible = 1;
    }
    //If mouse is pressed on the center, show ending dialogue
    else if (mouseSpot = 2 && mouseIsPressed) {
        visible = 3;
    }
    // if mouse is pressed on the right side, show answer 2
    else if (mouseSpot = 3 && mouseIsPressed) {
        visible = 2;
    } else {
        visible = 0;
    }

    //Buttons Y = .75, .8
    //left button
    // X = 0.15, 0.5
    // Middle button
    // X = 0.525, 0.825
    // Right button
    // X = 0.78, 1.22
    // drawDo()


    // visible 1 = default button; 2 = choice buttons/ 3 = end button
    if (visible === 1) {
        displayAnswer1();
        fill(255, 0, 0)
        sq(500, 500, 500)
    } else {
        displayDo();
    }
    if (visible === 3) {
        displayAnswer2();
    } else {
        displayDo();
    }
    displayOpt1();
    displayOpt2();
    displayOpt0();
}
























// First text upon boot ("waking up")
function drawBoot() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You wake in a strange dungeon,', width / 2, height / 2 * 1.25)
    text('face pressed into cold floor.', width / 2, height / 2 * 1.35)
}

// Second text upon boot ("Where you are")
function drawCell() {
    background(bgColor)
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You are in a cell.', width / 2, height / 2 * 1.3)
}

// Repeated string for CTAs
function displayDo() {
    background(bgColor)
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('What do you do?', width / 2, height / 2 * 1.3)
}

// Conntinue button, returns to boot
function displayOpt0() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Continue.]', width / 2, height / 2 * 1.55)
}

// First option button
function displayOpt1() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Call for help.]', width / 4, height / 2 * 1.55)
}

// Second option button
function displayOpt2() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Look for a way out.]', width / 4 * 3, height / 2 * 1.55)
}

// Third option button, returns to boot
function displayOpt3() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('[Go to sleep.]', width / 2, height / 2 * 1.55)
}

// Answer to Option 1
function displayAnswer1() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('No one answers.', width / 2, height / 2 * 1.3)
}
// Answer to Option 2
function displayAnswer2() {
    fill(255, 255, 255, constrain(fade, 0, 255))
    text('You are stuck in this cell.', width / 2, height / 2 * 1.3)
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