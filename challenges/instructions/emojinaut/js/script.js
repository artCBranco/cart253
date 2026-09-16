/**
 * The Emojinaut
 * Felipe A. C. Branco
 * 
 * This is an illustration of my "emojinaut". A space explorer that displays their emotions on their helmet. This character was inspired by
 [a past project of mine](https://www.instagram.com/p/DBUugzkPLyj/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==), but this illustration was created entirely through code.
 */

"use strict";

function setup() {

    // ▽ Create a canvas that is 1920x1080 pixels.
    createCanvas(1920, 1080);

    // ▽ Automatically recalculate the stars in the background
    frameRate(.5);

    // ▽ Setting up automatic shape settings
    noStroke()
    rectMode(CENTER)

}

function drawEmojinaut() {

    // ▽ Create the Emojinaut backpack
    fill('#90007d')
    rect(1250, 1080, 1000, 500, 60, 60, 0, 0)

    //▽ Create the Emojinaut body
    fill('#ffc2f7')
    rect(1250, 1080, 1200, 150, 120, 120, 0, 0)

    // ▽ Create the Emojinaut neck
    fill('#ff80ee')
    rect(1250, 980, 700, 250, 60, 60, 0, 0)

    // ▽ Create the Emojinaut's helmet
    fill('#cbe7ff')
    circle(1250, 600, 1000)

}

function drawEmoji() {

    // ▽ Create the Emojinaut's light reflection
    fill('#feffc7')
    circle(1050, 400, 250)

    fill('#cbe7ff')
    circle(1110, 500, 400);

    // ▽ Create the Emojinaut's mouth
    fill('#80c6ff')
    circle(1250, 750, 250)

    fill('#cbe7ff')
    circle(1250, 650, 400);

    // ▽ Create the Emojinaut's eyes
    fill('#80c6ff')
    circle(1050, 600, 200)
    circle(1450, 600, 200)

    fill('#cbe7ff')
    circle(1050, 675, 250)
    circle(1450, 675, 250)

}

function drawStar(x, y, size) {

    // ▽ Create a star
    fill('#fefffe')
    triangle(x, y + size * 0.3, x + size, y + size / 3, x + size / 2, y + size * 1.3);
    triangle(x, y + size, x + size / 2, y, x + size, y + size);

}

function drawSky() {

    // ▽ Create the starry night
    let numberOfStars = random(1, 15); // Total number of stars: 15
    for (let i = 0; i < numberOfStars; i++) {

        // ▽ randomly generate the position and size of each star
        drawStar(random(0, 1890), random(0, 1050), random(5, 80));

    }

    // ▽ Create the sun
    fill('#ffc800')
    circle(0, 0, 1000)

}

function draw() {

    // ▽ Draw the background color 
    background('#130145');

    // ▽ Draw the illustration 
    drawSky();
    drawEmojinaut();
    drawEmoji();

    //▽ Describe the artwork for accessibility settings
    describe('an emojinaut in the vastness of space.')

}