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

}

// ▽ Draw (and update) Mr. Furious
function draw() {

    // ▽ Background color
    background(160, 180, 200);

    // ▽ Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}
