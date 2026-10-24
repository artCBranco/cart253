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



//Canvas resolution (Reworked)
let cnvS = 1080;
// Canvas resolution (Added). Vertical < 1 < Horizontal
let cnvW = 0.75;

// Initial X and Y of the Player (added)
let iAd = .095;
let iWs = 0.065;
// Horizontal and Vertical Movement of the Player (Reworked)
let ad = .095;
let ws = 0.065;

//Horizontal and vertical location of Obstacles
let objX = .095;
let objY = 0.065;

// Gameboy pixel size. X <25, Y<24
let pxlX = 0.0325;
let pxlY = 0.025;

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
}



// Draw Function (Reworked)
function draw() {



    // Background (Reworked)
    drawBg()
    //Draw Game Control Guide
    drawGuide()
    // Draws the objective
    drawPoint(0, 0, 1)
    drawPoint(1, 1, 1)
    drawPoint(2, 2, 1)
    drawPoint(3, 3, 1)
    drawPoint(4, 4, 1)
    drawPoint(5, 5, 1)
    drawPoint(6, 6, 1)
    drawPoint(7, 7, 1)
    drawPoint(8, 8, 1)
    drawPoint(9, 9, 1)
    drawPoint(10, 10, 1)
    drawPoint(11, 11, 1)
    drawPoint(12, 12, 1)
    drawPoint(13, 13, 1)
    drawPoint(14, 14, 1)
    drawPoint(15, 15, 1)
    drawPoint(16, 16, 1)
    drawPoint(17, 17, 1)
    drawPoint(18, 18, 1)
    drawPoint(19, 19, 1)
    drawPoint(20, 20, 1)
    drawPoint(21, 21, 1)
    drawPoint(22, 22, 1)
    drawPoint(23, 23, 1)
    drawPoint(24, 24, 1)
    drawPoint(25, 25, 1)
    //Player (Reworked)
    drawPlayer()
    //Game Controls
    //gameSwitch()
    limitScreen()

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
    if (objX < pxlX) {
        objX = pxlX
    } else if (objX > pxlX * 25) {
        objX = pxlX * 25
    } else if (objY < pxlY) {
        objY = pxlY
    } else if (objY > pxlY * 25) {
        objY = pxlY * 25
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
    switch (key) {
        case 'w':
            ws -= pxlY;
            break;
        case 's':
            ws += pxlY;
            break;
        case 'a':
            ad -= pxlX;
            break;
        case 'd':
            ad += pxlX;
            break;
        case 'r':
            ad = .095;
            ws = 0.065;
            break;
        default:
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
    //Objective
    fill(palette.txt)
    square(cnvS * cnvW * (objX + pxlX * x), cnvS * (objY + pxlY * y), cnvS * 0.025 * objSize, cnvS * 0.0035)
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

