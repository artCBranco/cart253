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
 * Gameboy Pixel size: 0.035
 */

"use strict";



//Canvas resolution (Reworked)
let cnvS = 1080;
// Canvas resolution (Added). Vertical < 1 < Horizontal
let cnvW = 0.75;

// Horizontal and Vertical Movement (Reworked)
let ad = .095;
let ws = 0.065;
// Gameboy pixel size
let pxl = 0.035;

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
    //drawPoint()
    //Player (Reworked)
    drawPlayer()
    //Game Controls
    //gameSwitch()
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
            ws -= pxl;
            break;
        case 's':
            ws += pxl;
            break;
        case 'a':
            ad -= pxl;
            break;
        case 'd':
            ad += pxl;
            break;
        case 'r':
            ad = .095;
            ws = 0.065;
            break;
        default:
            break;
    }

    // Limits the AD and WS number to the Gameboy borders
    if (ad < 0.095) {
        ad = 0.095
    } else if (ad > 0.905) {
        ad = 0.905
    } else if (ws < 0.065) {
        ws = 0.065
    } else if (ws > 0.675) {
        ws = 0.675
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
    moveX = constrain(ad, 0.095, 0.905);
    moveY = constrain(ws, 0.065, 0.675);
    // Movable square (Reworked)
    fill(palette.txt)
    square(cnvS * cnvW * moveX, cnvS * moveY, cnvS * 0.025, cnvS * 0.0035)
}

// Draws the Objective (Reworked)
function drawPoint() {
    //Objective
    fill(palette.txt)
    square(cnvS * cnvW * 0.875, cnvS * 0.875, cnvS * 0.00375, cnvS * 0.1875)


}

// Draw the Background (Reworked)
function drawBg() {
    //3D Depth
    fill(palette.depth)
    square(cnvS * cnvW * 0.49, cnvS * 0.38, cnvS * 0.67, cnvS * 0.0075)
    //Green Screen
    fill(palette.screen.r, palette.screen.g, palette.screen.b)
    square(cnvS * cnvW * 0.5, cnvS * 0.37, cnvS * 0.65, cnvS * 0.0075)
}



// Draws the Game Control Guide (Reworekd)
function drawGuide() {
    fill(palette.txt)
    text("To move the square:", cnvS * cnvW * 0.7, cnvS * .12)
    text(ad, cnvS * cnvW * 0.7, cnvS * 0.16)
}

//[W] [A] [S] [D]

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

