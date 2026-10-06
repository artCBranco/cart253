/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let cnvS = 1600;
let bg = 200;
function setup() {
    createCanvas(cnvS, cnvS)
    frameRate(1200)
    background(bg, bg, bg)
    rectMode(CENTER)
    noLoop();
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    if (keyCode === 32) {
        window.location.reload;
    }

}
function mouseDragged() {
    fill(0, 0, 0)
    circle(mouseX, mouseY, 50)

}

