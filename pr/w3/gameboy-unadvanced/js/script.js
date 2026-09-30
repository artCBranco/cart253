/**
 * Gameboy Unadvanced
 * by Felipe Amorim Castelo Branco
 * 
 * A simple moving square. It can jump.
 */

"use strict";

// Canvas resolution
let cnv = 800;

// Horizontal and Vertical Grid
let ad = 3;
let ws = 3;

function setup() {
    //Square Canvas
    createCanvas(cnv, cnv)
    background(100, 100, 100)

    // text settings
    fill(0, 0, 0)
    textFont('Lucida Sans', map(cnv, 0, 1080, 4, 26))
    textAlign(CENTER)

    // Base settings
    noStroke()
    rectMode(CENTER)
}

/**
     * Draws the movable square controlled by the player. All is calculated as percentage of canvas.
     * ws = adds to the vertical position
     * ad = adds to the horizontal position
     * moveX = Is the horizontal position
     * moveY = Is the vertical position
     */
function drawSquare() {

    // draws the movement limit of the square
    let moveX = 0.35 * constrain(ad, 3, 20)
    let moveY = 0.35 * constrain(ws, 3, 20)

    /**
     * Game Controls
     * ws = changes the vertical position
     * ad = changes the horizontal position
     */
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

    //movable squared
    fill(0, 0, 0)
    square(cnv * moveX / 8, cnv * moveY / 8, cnv / 25, cnv / 150)

    //Win Condition
    if (moveX == 7 && moveY == 7) {
        //Screen Depth
        fill(90, 90, 90)
        square(cnv * 0.4885, cnv * 0.4885, cnv * 0.845, cnv / 150)
        //Green Screen
        fill(117, 166, 72)
        square(cnv / 2, cnv / 2, cnv * 0.82, cnv / 150)

        //Win Title
        push()
        fill(0, 0, 0)
        textSize(map(cnv, 0, 1080, 12, 64))
        text("Congratulations", cnv / 2, cnv / 2)
        text("you won!", cnv / 2, cnv * 0.575)
        textFont('Lucida Sans', map(cnv, 0, 1080, 4, 26))
        text("Press [R] to restart", cnv / 2, cnv * 0.625)
        pop()
    }
}


function draw() {

    //Screen Depth
    fill(90, 90, 90)
    square(cnv * 0.4885, cnv * 0.4885, cnv * 0.845, cnv / 150)
    //Green Screen
    fill(117, 166, 72)
    square(cnv / 2, cnv / 2, cnv * 0.82, cnv / 150)

    //Game Guide
    fill(0, 0, 0)
    text("To move the square:", cnv * 0.75, cnv * 0.15)
    text("[W] [A] [S] [D]", cnv * 0.75, cnv * 0.18)

    //Player
    drawSquare()

    //Objective
    fill(0, 0, 0)
    square(cnv * 0.875, cnv * 0.875, cnv / 25, cnv / 150)


}