/**
 * Gameboy Unadvanced
 * by Felipe Amorim Castelo Branco
 * 
 * An improvement from the last project. "(Unchanged)" in comments shows the old code.
 * 
 * Magic Numbers
 * All is calculated as percentage of canvas.
 * 
 * Green Screen corners:
 * {X:0.095, Y:0.065, X:0.905, Y:0.675}
 * Gameboy Pixel size: 25x25
 */

"use strict";

let count = 0;

//Canvas resolution (Reworked)
let cnvS = 1080;
// Canvas resolution (Added). Vertical < 1 < Horizontal
let cnvW = 0.75;

// Gameboy pixel size. X <25, Y<24
let pxlX = 0.0325;
let pxlY = 0.025;

// Initial X and Y of the Player (added)
let iAd = .095;
let iWs = 0.065;

// Horizontal and Vertical Movement of the Player (Reworked)
let ad = .095;
let ws = 0.065;

//Horizontal and vertical location of Obstacles
let pointX = .095;
let pointY = 0.065;

let prs;

//Game font used (Added)
let police = "Lucida Sans"
// Controls the color palette of the game(Added)
let palette = {
    // Background Color
    bg: 100,
    // 3D depth color
    depth: 90,
    // Screen color
    screen: {
        r: 117,
        g: 166,
        b: 72,
    },
    txt: 0,
    btn: {
        r: 255,
        g: 0,
        b: 0,
    },
    shdw: {
        r: 150,
        g: 0,
        b: 0,

    },
    prs: {
        r: 200,
        g: 0,
        b: 0,
    },
}


// Set up function (Reworked)
function setup() {
    //Square Canvas (Reworked)
    createCanvas(cnvS * cnvW, cnvS)
    background(palette.bg)

    // text settings (Reworked)

    // Text FOnt Variable defined above. Also maps a max text-size according to the screen resolution
    textFont(police, map(cnvS, 8, 2160, 4, 48))
    textAlign(CENTER)

    // Base settings (Unchanged)
    noStroke()
    rectMode(CENTER)



    // Any code to run at Setup (Added)
    push()
    textSize(map(cnvS, 8, 2160, 4, 32))
    text("Restart [R]", cnvS * cnvW * 0.75, cnvS * 0.825)
    pop()
}


// Draw Function (Reworked)
function draw() {

    // Background (Reworked)
    drawBg()
    //Draw Game Control Guide
    drawGuide()
    // Draws the objective
    drawWall1(7, 5)
    //Player (Reworked)
    drawPlayer()
    //Game Controls
    //gameSwitch()
    limitScreen()
    drawConsole()

}


function limitScreen() {
    // Limits the AD and WS number to the Gameboy borders
    if (ad < pxlX) {
        ad = iAd
    } else if (ad > iAd + pxlX * 25) {
        ad = iAd + pxlX * 25
    } else if (ws < pxlY) {
        ws = iWs
    } else if (ws > iWs + pxlY * 25) {
        ws = iWs + pxlY * 25
    }
    // limits the Goal to be within the Gameboy border
    if (pointX < pxlX) {
        pointX = pxlX
    } else if (pointX > pxlX * 25) {
        pointX = pxlX * 25
    } else if (pointY < pxlY) {
        pointY = pxlY
    } else if (pointY > pxlY * 25) {
        pointY = pxlY * 25
    }
}



// The function containing Game Controls. 
// Note: Renaming this to a drawFunction makes the movement choppy and pixelated
function keyPressed() {
    /** Game Controls
         * ws = changes the vertical position
         * ad = changes the horizontal position
         * (Unchanged)
         */
    prs = 0;
    switch (key) {
        case 'w':
            ws -= pxlY;
            prs = 3;
            break;
        case 's':
            ws += pxlY;
            prs = 4;
            break;
        case 'a':
            ad -= pxlX;
            prs = 1;
            break;
        case 'd':
            ad += pxlX;
            prs = 2;
            break;
        case 'r':
            ad = .095;
            ws = 0.065;
            prs = 5;
            break;
        default:
            prs = 0;
            break;
    }

}





/*
 * Draws the movable square controlled by the player. 
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 * (Reworked)
 */
function drawPlayer(moveX, moveY) {
    // draws the movement limit of the square(Reworked)
    moveX = constrain(ad, iAd, (iAd + pxlX * 25));
    moveY = constrain(ws, iWs, (iWs + pxlY * 25));
    // Movable square (Reworked)
    fill(palette.txt)
    square(cnvS * cnvW * moveX, cnvS * moveY, cnvS * 0.025, cnvS * 0.0035)
}

// Draws the Objective (Reworked)
function drawPoint(x, y, objSize) {
    // To eventually change the size of the goal. Currently unused
    // draws the movement limit of the square(Reworked)
    let piX = constrain(x, 0, 25);
    let piY = constrain(y, 0, 25);

    //Objective
    fill(palette.txt)
    square(cnvS * cnvW * (pointX + pxlX * piX), cnvS * (pointY + pxlY * piY), cnvS * 0.025 * objSize, cnvS * 0.0035)
}


function drawWall1(x, y, wSize) {
    drawPoint(x, y, 1)
    drawPoint(x + 1, y, 1)
    drawPoint(x + 2, y, 1)
    drawPoint(x + 3, y, 1)
}



// Draw the Background (Reworked)
function drawBg() {
    //3D Depth
    fill(palette.depth)
    rect(cnvS * cnvW * 0.4865, cnvS * 0.39, cnvS * 0.68, cnvS * 0.69, cnvS * 0.0075)
    //Green Screen
    fill(palette.screen.r, palette.screen.g, palette.screen.b)
    rect(cnvS * cnvW * 0.5, cnvS * 0.38, cnvS * 0.66, cnvS * 0.67, cnvS * 0.0075)
}

// Draws the Game Control Guide (Reworekd)
function drawGuide() {
    fill(palette.txt)
    text("To move the square:", cnvS * cnvW * 0.7, cnvS * .12)
    text("[W] [A] [S] [D]", cnvS * cnvW * 0.7, cnvS * 0.16)
}

// Win Screen (Reworked)
function drawWin() {
    //Background
    drawBg()

    //Text color
    fill(palette.txt)

    // Title text
    push()
    textSize(map(cnvS * cnvW, 0, 1080, 12, 64))
    text("Congratulations,", cnvS * cnvW * 0.5, cnvS * 0.3)
    text("you won!", cnvS * cnvW * 0.5, cnvS * 0.36)
    pop()

    //Smaller restart suggestion
    text("Press [R] to restart", cnvS * cnvW * 0.5, cnvS * 0.5)
}

// Loss Screen (Added)
function loss() {
    //Background
    drawBg()

    //Text color
    fill(palette.txt)

    // Title text
    push()
    textSize(map(cnvS * cnvW, 0, 1080, 12, 64))
    text("Oh no!", cnvS * cnvW * 0.5, cnvS * 0.3)
    text("You lost...", cnvS * cnvW * 0.5, cnvS * 0.36)
    pop()

    //Smaller restart suggestion 
    text("Press [R] to restart", cnvS * cnvW * 0.5, cnvS * 0.5)
}

function drawBtn(x, y) {
    /*
        rect(cnvS * cnvW * (0.09 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05)
        rect(cnvS * cnvW * (0.285 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05)
        rect(cnvS * cnvW * (0.185 + x), cnvS * (0.8 + y), cnvS * 0.05, cnvS * 0.07)
        rect(cnvS * cnvW * (0.185 + x), cnvS * (0.95 + y), cnvS * 0.05, cnvS * 0.07)
        */

    push()
    if (prs === 1) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnvS * cnvW * (0.145 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05)
    pop()
    push()
    if (prs === 2) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnvS * cnvW * (0.225 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05)
    pop()
    push()
    if (prs === 3) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnvS * cnvW * (0.185 + x), cnvS * (0.845 + y), cnvS * 0.05, cnvS * 0.07)
    pop()
    push()
    if (prs === 4) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnvS * cnvW * (0.185 + x), cnvS * (0.9 + y), cnvS * 0.05, cnvS * 0.07)
    pop()
    push()
    if (prs === 5) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnvS * cnvW * (0.7 + x), cnvS * (0.875 + y), cnvS * 0.11, cnvS * 0.05, cnvS * 0.005)
    pop()
    fill(palette.prs.r, palette.prs.g, palette.prs.b)
    square(cnvS * cnvW * (0.185 + x), cnvS * (0.875 + y), cnvS * 0.05)
    if (prs > 0 && !keyIsPressed) {
        prs = 0;
    }
}

function drawConsole() {
    fill(palette.shdw.r, palette.shdw.g, palette.shdw.b)
    drawBtn(0.06, 0.005)
    fill(palette.btn.r, palette.btn.g, palette.btn.b)
    drawBtn(0.05, 0)
    fill(palette.txt)

}