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
    angleMode(DEGREES)

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
    armLeft()
    armRight()
    legLeft()
    legRight()
    armRight()
    heart(1, 1, 1000)
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
function armLeft() {
    fill(255)
    push()
    rotate(30)
    rect(cnv * 0.49, cnvS * 0.08, cnvS / 2 * line, cnvS / 2 * quarter)
    pop()
}
function armRight() {
    fill(255)
    push()
    rotate(-30)
    rect(cnv * 0.2095, cnvS * 0.73, cnvS / 2 * line, cnvS / 2 * quarter)
    pop()

}

function legLeft() {
    fill(255)
    push()
    rotate(20)
    rect(cnv * 0.5, cnvS * 0.33, cnvS / 2 * line, cnvS * 0.6 * quarter)
    pop(0)
}
function legRight() {
    fill(255)
    push()
    rotate(-20)
    rect(cnv * 0.255, cnvS * 0.78, cnvS / 2 * line, cnvS * 0.6 * quarter)
    pop()
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
    fill(255)
    text("A", cnv / 2, cnv / 2)
}

function drawError() {
    fill(255)
    text("P", cnv / 2, cnv / 2)

}
