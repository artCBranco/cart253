/* Hangman's Final Word
 * by Felipe Amorim Castelo Branco
 * 
 * A simple game of Hangman with only one answer. Press the letters on the keyboard to play.
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
    textFont('Silkscreen')
    textSize(128)
    textAlign(CENTER, CENTER)
    life = 7;
}


// Main Draw
function draw() {

    // Draws the Gallow in which Hangman hangs
    drawGallow()
    // Draws the Hangman
    drawLife()
    //Draws the blank dashes for the correct answers. 
    drawBlank()
    // Draws the revealed answer if the correct button is pressed. 
    drawAnswer()
    drawEnd()

}





// Draws the Gallow in which Hangman hangs
function drawGallow(magic1, magic2) {
    // Color
    fill(bgColor)
    rect(0, 0, cnv, cnvS)
    // Color
    fill(drawColor)
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
    magic1 = 0.325
    // Vertical Position
    magic2 = 0.35
    // Text Spacing
    magic3 = 0.06

    if (answer.e.bol === true) {
        text(answer.e.letter, cnv * magic1 + cnv * magic3, cnvS * magic2)
        text(answer.e.letter, cnv * magic1 + cnv * magic3 * 4, cnvS * magic2)
        text(answer.e.letter, cnv * magic1 + cnv * magic3 * 6, cnvS * magic2)
    }
    if (answer.p.bol === true) {
        text(answer.p.letter, cnv * magic1 + cnv * magic3 * 2, cnvS * magic2)
    }
    if (answer.h.bol === true) {
        text(answer.h.letter, cnv * magic1 + cnv * magic3 * 3, cnvS * magic2)
    } if (answer.m.bol === true) {
        text(answer.m.letter, cnv * magic1 + cnv * magic3 * 5, cnvS * magic2)
    } if (answer.r.bol === true) {
        text(answer.r.letter, cnv * magic1 + cnv * magic3 * 7, cnvS * magic2)
    } if (answer.a.bol === true) {
        text(answer.a.letter, cnv * magic1 + cnv * magic3 * 8, cnvS * magic2)
    } if (answer.l.bol === true) {
        text(answer.l.letter, cnv * magic1 + cnv * magic3 * 9, cnvS * magic2)
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
        case (answer.e.letter):
            answer.e.bol = true;
            break;
        case (answer.p.letter):
            answer.p.bol = true;
            break;
        case (answer.h.letter):
            answer.h.bol = true;
            break;
        case (answer.m.letter):
            answer.m.bol = true;
            break;
        case (answer.r.letter):
            answer.r.bol = true;
            break;
        case (answer.a.letter):
            answer.a.bol = true;
            break;
        case (answer.l.letter):
            answer.l.bol = true;
            break;
        default:
            life -= 1;
            break;
    }
}




// Draws the end screen 
function drawEnd() {
    // Win condition
    if (answer.e.bol && answer.p.bol && answer.h.bol && answer.m.bol && answer.r.bol && answer.a.bol && answer.l.bol) {

        // Win condition
        background(bgColor)
        fill(drawColor)
        text('Congratulations!', cnv * half, cnvS * 0.45)
        push()
        textSize(48)
        text('Life is EPHEMEROUS, and so are you!', cnv * half, cnvS * 0.575)
        pop()
        push()
        textSize(24)
        text('Enjoy the rest of your life!', cnv * half, cnvS * 0.65)
        pop()
    } else if (life === 0) {
        // Loss Condition
        background(bgColor)
        fill(drawColor)
        text('You Lost!', cnv * half, cnvS * 0.45)
        push()
        textSize(48)
        text("That's rough, buddy.", cnv * half, cnvS * 0.575)
        pop()
        push()
        textSize(16)
        text('Life is short, so are your chances.', cnv * half, cnvS * 0.65)
        pop()

    } else if (life <= 0) {
        //Restart condition
        life = 7;
        answer.e.bol = false;
        answer.p.bol = false;
        answer.h.bol = false;
        answer.m.bol = false;
        answer.r.bol = false;
        answer.a.bol = false;
        answer.l.bol = false;
    }
}