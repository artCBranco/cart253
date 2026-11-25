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
    addFrontier()
    addObstacles()
}



/** Main Draw Function */
function draw() {
    drawBg()
    // Win, loss and Blocked areas
    limitScreen()
    // Draw Functions
    //drawPoint()
    drawPlayer()

}
