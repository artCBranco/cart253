/**
 * Hangman's Final Word
 * by Felipe Amorim Castelo Branco
 * 
 * A simple game with Hangman with only one answer. Press the letters on the keyboard to play.
 * Answer: That which is neverlasting, but endlessly final.
 */

"use strict";


// Canvas Size, Ratio and Resolution
const cnvS = 900;
const cnvW = 2;
const cnv = cnvS * cnvW;

let bgColor = 0;
let drawColor = 255;

let mgc1 = 0.18
let mgc2 = 0.275



// To calculate
const half = 0.5
const quarter = 0.25
const line = 0.02





// Main variables

//How much life is left
let life;

// The properties of the answer letters.
let answer = {
    y: 0.75,
    e: {
        letter: 'e',
        bol: false,
        x: 0.5,
    },
    p: {
        letter: 'p',
        bol: false,
        x: 0.56,
    },
    h: {
        letter: 'h',
        bol: false,
        x: 0.6,
    },
    m: {
        letter: 'm',
        bol: false,
        x: 0.65,
    },
    r: {
        letter: 'r',
        bol: false,
        x: 0.7,
    },
    a: {
        letter: 'a',
        bol: false,
        x: 0.7,
    },
    l: {
        letter: 'l',
        bol: false,
        x: 0.7,
    },
}





// Setup function
function setup() {
    createCanvas(cnv, cnvS)
    background(bgColor)

    //Basic settings
    noStroke()
    angleMode(DEGREES)
    translate(cnv / 2, cnvS / 2)
    // Text settings
    textSize(128)

    life = 6
}


// Main Draw
function draw() {
    // Color
    fill(drawColor)
    // Draws the Gallow in which Hangman hangs
    drawGallow()
    // Draws the Hangman
    drawLife()
    //Draws the blank dashes for the correct answers. 
    drawBlank()
    // Draws the revealed answer if the correct button is pressed. 
    drawAnswer()

    if (life === 0) {
        life = 6
    }
}





// Draws the Gallow in which Hangman hangs
function drawGallow(magic1, magic2) {
    // Magic numbers to draw the Gallow in the left corner of the screen.
    magic1 = 0.15
    magic2 = 0.75
    rect(cnv * magic1, cnvS * quarter, cnv * line, cnvS * half)
    rect(cnv * magic1, cnvS * magic2, cnv * magic1, cnvS * line)
    rect(cnv * magic1, cnvS * quarter, cnvS * quarter, cnvS * line)
    rect(cnv * mgc2, cnvS * quarter, cnvS * line, cnv * line * 2)
}


// Draws the dashed lines for the letters
function drawBlank(magic1, magic2, magic3, magic4) {
    //Horizontal Position
    magic1 = 0.3
    // Vertical Position
    magic2 = 0.42
    // Line size
    magic3 = 0.05
    // Line Spacing
    magic4 = 0.06
    // Draws all the lines
    rect(cnv * magic1 + cnv * magic4, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 2, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 3, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 4, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 5, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 6, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 7, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 8, cnvS * magic2, cnv * magic3, cnvS * line / 2)
    rect(cnv * magic1 + cnv * magic4 * 9, cnvS * magic2, cnv * magic3, cnvS * line / 2)
}

// Draws the revealed answer in the screen.
function drawAnswer(magic1, magic2, magic3) {
    //Horizontal Position
    magic1 = 0.3
    // Vertical Position
    magic2 = 0.4
    // Text Spacing
    magic3 = 0.06

    if (answer.e.bol === true) {
        text("E", cnv * magic1 + cnv * magic3, cnvS * magic2)
        text("E", cnv * magic1 + cnv * magic3 * 4, cnvS * magic2)
        text("E", cnv * magic1 + cnv * magic3 * 6, cnvS * magic2)
    }
    if (answer.p.bol === true) {
        text("P", cnv * magic1 + cnv * magic3 * 2, cnvS * magic2)
    }
    if (answer.h.bol === true) {
        text("H", cnv * magic1 + cnv * magic3 * 3, cnvS * magic2)
    } if (answer.m.bol === true) {
        text("M", cnv * magic1 + cnv * magic3 * 5, cnvS * magic2)
    } if (answer.r.bol === true) {
        text("R", cnv * magic1 + cnv * magic3 * 7, cnvS * magic2)
    } if (answer.a.bol === true) {
        text("A", cnv * magic1 + cnv * magic3 * 8, cnvS * magic2)
    } if (answer.l.bol === true) {
        text("L", cnv * magic1 + cnv * magic3 * 9, cnvS * magic2)
    }
}

// Draws the Hangman
function drawLife() {
    if (life === 6) {
        head()
    } if (life === 5) {
        head()
        body()
    } else if (life === 4) {
        head()
        body()
        armLeft()
    } else if (life === 3) {
        head()
        body()
        armLeft()
        armRight()
    } else if (life === 2) {
        head()
        body()
        armLeft()
        armRight()
        legLeft()
    } else if (life === 1) {
        head()
        body()
        armLeft()
        armRight()
        legLeft()
        legRight()
    }
}



// Draws each separate section of Hangman's body.
function head(magic) {
    magic = 0.28
    circle(cnv * magic, cnv * mgc1, cnv * line * 2)
}
function body(magic) {
    magic = 0.355
    fill(drawColor)
    rect(cnv * mgc2, cnvS * magic, cnvS * line, cnvS * mgc1)
}
function armLeft(magic1, magic2) {
    magic1 = 0.34;
    magic2 = 0.08;
    push()
    rotate(30)
    rect(cnv * magic1, cnvS * magic2, cnvS * (half * line), cnvS * (half * quarter))
    pop()
}
function armRight(magic1, magic2) {
    magic1 = 0.14;
    magic2 = 0.64;
    push()
    rotate(-30)
    rect(cnv * magic1, cnvS * magic2, cnvS * (half * line), cnvS * (half * quarter))
    pop()
}
function legLeft(magic1, magic2, magic3) {
    magic1 = 0.35
    magic2 = 0.31
    magic3 = 0.6
    push()
    rotate(20)
    rect(cnv * magic1, cnvS * magic2, cnvS * (half * line), cnvS * magic3 * quarter)
    pop()
}
function legRight(magic1, magic2, magic3) {
    magic1 = 0.1715
    magic2 = 0.69
    magic3 = 0.6
    push()
    rotate(-20)
    rect(cnv * magic1, cnvS * magic2, cnvS * (half * line), cnvS * magic3 * quarter)
    pop()
}


// Answer detector switch
function keyPressed() {


    // If right answer is pressed: leter is revealed. If wrong, -1 to life.
    switch (key) {
        case 'e':
            answer.e.bol = true;
            break;
        case 'p':
            answer.p.bol = true;
            break;
        case 'h':
            answer.h.bol = true;
            break;
        case 'm':
            answer.m.bol = true;
            break;
        case 'r':
            answer.r.bol = true;
            break;
        case 'a':
            answer.a.bol = true;
            break;
        case 'l':
            answer.l.bol = true;
            break;
        default:
            life -= 1;
            break;
    }
}

function drawEnd() {
    if (answer.e.bol && answer.p.bol && answer.h.bol && answer.m.bol && answer.r.bol && answer.a.bol && answer.l.bol &&) {
        text('You Win!', cnv * half, cnvS * half)
    } else if (life === 0) {
        text('You Lost!', cnv * half, cnvS * half)
        push()
        textSize(48)
        text('press [ENTER] to restart', cnv * half, cnvS * 0.6)
        pop()
    }
}