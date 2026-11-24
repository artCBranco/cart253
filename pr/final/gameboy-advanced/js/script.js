/**
 * Gameboy Advanced
 * by Felipe Amorim Castelo Branco
 * 
 * The ultimate gameboy. Play through infinite random mazes.
 * Gameboy Screen Resolution: 25x25
 */

"use strict";

/** Setup Function */
function setup() {
    //Canvas
    createCanvas(cnv.w, cnv.h);
    background(palette.bg);

    // Text Variable defined above. Also maps a max text-size according to the screen resolution
    textFont(typo.type, map(cnv.h, offset, pxl.maxRes, offset, typo.size.h2));
    textAlign(CENTER, CENTER);

    // Base settings
    noStroke();
    rectMode(CENTER);

    // Any code to run at Setup
}

/** Main Draw Function */
function draw() {

    // Draw Functions
    drawBg()
    drawFrontier()
    drawObstacles()

    limitScreen()
    drawPlayer()



    //loss()  SWITCH TO CONSTANT
    if (playerX() === (pxl.cornerX + pxl.x * 24) && playerY() === (pxl.cornerY + pxl.y * 24)) {
        drawWin()
        noLoop()
    }
    //Win()
    else if (playerX() === (pxl.cornerX + pxl.x * 1) && playerY() === (pxl.cornerY + pxl.y * 24)) {
        drawLoss()
        noLoop()
    }

    for (let i = 0; i >= pxlTrack.lenght; i++) {
        pxlTrack.pop(i)
    }

}







/** Defines the Limits of the Gameboy Screen */
function limitScreen() {
    // Limits the player (AD and WS number) to the Gameboy borders
    if (ad < pxl.x) {
        ad = pxl.cornerX
    } else if (ad > borderX) {
        ad = borderX
    } else if (ws < pxl.y) {
        ws = pxl.cornerY
    } else if (ws > borderY) {
        ws = borderY
    }

    // limits the points to be within the Gameboy border
    if (pointX < pxl.x) {
        pointX = pxl.x
    } else if (pointX > borderX) {
        pointX = borderX
    } else if (pointY < pxl.y) {
        pointY = pxl.y
    } else if (pointY > borderY) {
        pointY = borderY
    }
}

/** The function containing Game Controls. */
function keyPressed() {
    /** Game Controls
         * ws = changes the vertical position
         * ad = changes the horizontal position
         * Note: Renaming this to a drawFunction makes the movement choppy and pixelated 
         */
    prs = 0;
    switch (key) {
        case 'w':


            ws -= pxl.y;
            if (ws >= pxl.cornerX + (pxl.y * 3)) {
                shadowY += pxl.y
            }
            prs = 3;
            break;
        case 's':
            ws += pxl.y;
            if (ws >= pxl.cornerX + (pxl.y * 3)) {
                shadowY += pxl.y
            }
            prs = 4;
            break;
        case 'a':
            ad -= pxl.x;
            if (ad >= pxl.cornerX + (pxl.x * 3)) {
                shadowX -= pxl.x
            }
            prs = 1;
            break;
        case 'd':
            ad += pxl.x;
            if (ad >= pxl.cornerX + (pxl.x * 3)) {
                shadowX += pxl.x
            }
            prs = 2;
            break;
        case 'r':
            ad = pxl.cornerX + pxl.x;
            ws = pxl.cornerY + pxl.y;
            shadowX = pxl.cornerX + pxl.x;
            shadowY = pxl.cornerY + pxl.y;
            prs = 5;
            loop()
            break;
        default:
            prs = 0;
            break;
    }
}









/*TO BE ADDED:
function checkOverlap() {
    // Check overlap

    // Calculate distance between circles' centres
    const d = dist(moveX, moveY, drawWall.x, drawWall.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < pxl.y);
    // Set fill based on whether they overlap
    if (overlap) {
        fill(200)
        square(500, 500, 50, 50)
    }
    else {

    }
    
    
    
    
    
    
    
    Collide:
    
    Every wall and every item onscreen array.push(x, y).
    
    on switch, if (array[variable] !== something){ move}
} */
