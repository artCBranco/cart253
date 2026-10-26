/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const cnvS = 600
const cnvW = 1.6
const cnv = cnvS * cnvW

const half = 0.5
const quarter = 0.25
const line = 0.02
function setup() {
    createCanvas(cnv, cnvS)
    background(0)

    //Basic settings
    noStroke()

}


let answer = 0;
let life = 5;

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    fill(255)
    rect(cnv * quarter, cnvS * quarter, cnv * line, cnvS * half)
    rect(cnv * (quarter * half), cnvS * (quarter + half), cnv * quarter, cnvS * line)
    rect(cnv * quarter, cnvS * (quarter), cnvS * quarter, cnvS * line)
    rect(cnv * 0.4, cnvS * (quarter), cnvS * line, cnv * (quarter * half * half))
    head(0)
    body(0)
    limbLeft()
}

function head() {
    fill(255)
    circle(cnv * (0.405), cnv * quarter, cnv * (quarter * quarter), cnvS * quarter)
}
function body() {
    fill(255)
    rect(cnv * 0.40, cnvS * 0.35, cnvS * line, cnvS * quarter)
    text(life, cnvS / 2, cnvS / 2)
    text(answer, cnvS / 2, cnvS * 0.7)
}
function limbLeft() {
    fill(255)
    rotate(45)
    rect(cnv * 0.45, cnvS * 0.00001, cnvS * line, cnvS * quarter)


}

function keyPressed() {
    switch (key) {
        case 'a':
            answer += 1
            break;
        default:
            life -= 1
            break;
    }
}

function drawAnswer() {
    text("A", cnv / 2, cnv / 2)
}

function drawError() {
    text("P", cnv / 2, cnv / 2)

}