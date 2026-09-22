/**
 * Variables - Mr. Red
 * by Pippin Bar
 * Make Mr. Furious Furious
 * 
 * Felipe A. Castelo Branco and Felipe S. Paiva
 * 
 */

"use strict";

// ▽ Our friend Mr. Furious
let mrFurious = {

    // ▽ Position and size
    x: 540,
    y: 540,
    size: 540,

    // ▽ Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }

};



function setup() {

    // ▽ Create the canvas
    createCanvas(1080, 1080);

    // ▽ speed in which circle turns red, in fps
    frameRate(12)
}

// ▽ Draw (and update) Mr. Furious
function draw() {



    // ▽ Background color turns dark with frame count
    background(constrain(160 - frameCount / 2, 45, 225), constrain(180 - frameCount / 2, 45, 225), constrain(200 - frameCount / 2, 45, 225))


    // ▽ MrFurious Shirt
    fill(100, 200, 200)
    noStroke()
    ellipse(540, 1000, 1000, 600)

    // ▽ Draw Mr. Furious as a coloured circle
    push();
    noStroke();


    // ▽ Skin tone changes with passing FrameCounts
    fill(mrFurious.fill.r, constrain(mrFurious.fill.g - frameCount, 150, 225), constrain(mrFurious.fill.b - frameCount, 150, 255));

    // ▽ Mr. Furious neck area
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    ellipse(mrFurious.x, mrFurious.y + 300, mrFurious.size + 200, mrFurious.size / 2)

    pop();
}
