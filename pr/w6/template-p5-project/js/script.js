/*Sisyphus
* Help sisyphus clim the mountain
*/
"use strict";

/** Canvas Height */
let cnvH = 800;

/** Canvas ratio: Vertical < 1 < Horizontal */
let cnvR = 1.6;

/** Canvas Width (cnvH * cnvR) */
let cnvW = cnvH * cnvR;

/** Canvas Color */
let bgColor = 0;

/** 0.5 */
let half = 0.5;
/** 0.25 */
let squared = half * half;

let mainColor = 190
/** Font information */
let typo = {
    type: 'Lucida Sans',
    h: 32
}
/** Sisyphus properties*/
let sis = {
    size: 6.9,
    img1: undefined,
    img2: undefined,
    frame: undefined,
    txt: 'Help Sisyphus push the bolder to the top!',
}
/** Setup function*/
async function setup() {
    createCanvas(cnvW, cnvH);

    // Basic Settings
    noStroke()
    rectMode(CENTER)


    // Text settings
    textSize(typo.h)
    textFont(typo.type)

    sis.img1 = await loadImage("./assets/sisyphusImage.png");
    sis.img2 = await loadImage("./assets/sisyphusImage2.png");

}

/** Main Draw function*/
function draw() {
    drawSisyphus();
    drawMountain(1, 1);

}
//min 0.3, max 1
let climb = 0.4;
let climbSpeed = 1
/** Draw Sisyphus*/
function drawSisyphus() {

    background(bgColor);
    fill(mainColor)
    text(sis.txt, cnvW / 10, cnvH / 6)

    // moves the X and Y only on the Triangle slope
    let currentX = lerp(0, cnvW, climb);
    let currentY = lerp(cnvH, cnvH * squared, climb);

    fill(mainColor);
    circle(currentX - cnvW / 6, currentY, cnvW / sis.size);

    // Runs the character animation
    sis.frame = false
    if (keyIsPressed) {
        sis.frame = true;
    }
    // Character animation images
    tint(mainColor)
    if (sis.frame === false) {
        image(sis.img1, currentX - cnvW / 6 - 165, currentY + 12, cnvW / 8, cnvW / 8)
    } else if (sis.frame === true) {
        image(sis.img2, currentX - cnvW / 6 - 165, currentY + 12, cnvW / 8, cnvW / 8)
    }
}

/** Key press effect: Moves the ball*/
function keyReleased() {


    // Speed at which ball rolls
    climbSpeed += 1
    // Acceleration parameters
    if (climb >= 0.9) {
        climbSpeed *= -1.01
    }
    if (climb < 0.35) {
        climbSpeed = 1
    }
    //climbing calculation
    climb += 0.001 * climbSpeed
}
/** Draws the triangle for the mountain*/
function drawMountain(x, y) {

    let x1 = 0 + x, y1 = cnvH + y;
    let x2 = cnvW + x, y2 = cnvH * squared + y;
    let x3 = cnvW + x, y3 = cnvH + y;


    fill(mainColor);
    triangle(x1, y1, x2, y2, x3, y3);
}


