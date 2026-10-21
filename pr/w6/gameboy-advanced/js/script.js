/**
 * Gameboy Unadvanced
 * by Felipe Amorim Castelo Branco
 * 
 * An improvement from the last project. "(Unchanged)" in comments shows the old code.
 */

"use strict";



//Canvas resolution (Reworked)
let cnvS = 1080;
// Canvas resolution (Added). Vertical < 1 < Horizontal
let cnvW = 0.75



//Game font used
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

// Horizontal and Vertical Movement (Reworked)
let ad = cnvS * 0.00375;
let ws = cnvS * 0.00375;

// draws the movement limit of the square(Reworked)
let moveX = 0.35 * constrain(ad, cnvS * 0.00375, cnvS * 0.025)
let moveY = 0.35 * constrain(ws, cnvS * 0.00375, cnvS * 0.025)






// Set up function (Reworked)
function setup() {
    //Square Canvas (Reworked)
    createCanvas(cnvS * cnvW, cnvS)
    background(palette.bg)

    // text settings (Reworked)

    // Text FOnt Variable defined above. Also maps a max text-size according to the screen resolution
    textFont(police, map(cnvS, 8, 1080, 4, 26))
    textAlign(CENTER)

    // Base settings (Unchanged)
    noStroke()
    rectMode(CENTER)


    // Any code to run at Setup (Added)


}






/** Game Controls
     * ws = changes the vertical position
     * ad = changes the horizontal position
     * (Unchanged)
     */
function keyPressed() {
    switch (key) {
        case 'w':
            ws -= 0.35;
            break;
        case 's':
            ws += 0.35;
            break;
        case 'a':
            ad -= 0.35;
            break;
        case 'd':
            ad += 0.35;
            break;
        case 'r':
            ad = 3
        case 'r':
            ws = 3
            break;
        default:
            break;
    }
}


// Draw Function (Reworked)
function draw() {
    // Background (Reworked)
    drawBg()
    //Draw Game Control Guide
    drawGuide()
    // Draws the objective
    drawPoint()
    //Player (Reworked)
    drawPlayer()

}



/*
 * Draws the movable square controlled by the player. All is calculated as percentage of canvas.
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 * (Reworked)
 */
function drawPlayer() {
    // Movable square (Reworked)
    fill(palette.txt)
    square(cnvS * cnvW * moveX / 2, cnvS * moveY / 8, cnvS * 0.00375, cnvS * 0.1875)
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

