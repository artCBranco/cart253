/**
 * Duungeon Arrayed
 * By Felipe Amorimm Castelo Branco
 * 
 * A short CHYOA/RPG graphic novel about someone in a dungeon. Press the mouse to continue the dialogue.
 * UPDATE: Code now uses Array
 */

"use strict";
/** Canvas resolution */
const cnvH = 600;
const cnvR = 1.333;
const cnvW = cnvH * cnvR;
/** Background color */
const bgColor = 30;
/** Text color */
const txtClr = 255;
/** 0.5 */
let half = 0.5
/** Dialogue Array Index (NEW) */
let speechIndex = 0;
/** Option Array Index (NEW) */
let opt = 1;
/** Dialogue to be displayed (NEW) */
let currentLine = speech[speechIndex];
/** Option to be displayed (NEW) */
let currentOpt = options[opt];
// Hint fade-in
let fade = 255




/** Setup Function*/
function setup() {
    createCanvas(cnvW, cnvH); //Canvas size: 16:9
    background(bgColor, bgColor, bgColor)

    // Shape Settings
    rectMode(CENTER)
    noStroke()
    // Text settings
    fill(255, 255, 255)
    textFont('Courier New')
    textSize(cnvW * 0.025)
    textAlign(CENTER, CENTER)
}


/** Advances the mouse on MouseReleased*/
function mouseReleased() {
    // Whenever mouse is pressed, advance the dialogue by 1
    speechIndex += 1;
}

/** All the dialogue strings, in an Array (NEW) */
let speech = ["You wake in a strange dungeon,", "face pressed into cold floor.", "You are in a cell.", "What do you do?", "No one answers.", "You are stuck in this cell."]
let options = ["", "[Continue.]", "[Call for help.]", "[Look for a way out.]", "[Go to sleep.]"];
const boot1 = 
const boot2 = 
const opt0 = 
const dialog1 = 
const whatDo = 
const opt1 = 
const opt2 =
const answer1 = 
const answer2 = 
const reset =

    /** draws a background on each new draw (NEW) */
    function drawBg() {
        fill(bgColor)
        rect(cnvW * half, cnvH * half, cnvW, cnvH)
    }
/** Function that draws the first text (Updated) */
function drawText() {
    fill(txtClr)
    text(currentLine, cnvW * half, cnvH * half)
    text(currentOpt, width / 2, height / 2 * 1.45)
    if (speechIndex < 2 || speechIndex === 4) {


        function drawBoot() {
            drawBg()
            // Draws the text
            fill(txtClr)
            text(boot1, width / 2, height / 2)
            text(boot2, width / 2, height / 2 * 1.1)
            text(opt0, width / 2, height / 2 * 1.45)
        }



        // Function that draws the second text
        function drawDialog1() {
            // Draws a dark background to hide the last dialogue
            fill(30, 30, 30)
            rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
            // Draws the text
            fill(255, 255, 255)
            text(dialog1, width / 2, height / 2)
            text(opt0, width / 2, height / 2 * 1.45)
        }



        // Function that draws the 1st option dialog
        function drawDo() {
            // Draws a dark background to hide the last dialogue
            fill(30, 30, 30)
            rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
            // Draws the text
            fill(255, 255, 255)
            text(whatDo, width / 2, height / 2)
            text(opt1, width / 2, height / 2 * 1.45)
        }



        // function that draws the Answer to the first dialog
        function drawAnswer1() {
            // Draws a dark background to hide the last dialogue
            fill(30, 30, 30)
            rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
            // Draws the text
            fill(255, 255, 255)
            text(answer1, width / 2, height / 2)
            text(opt0, width / 2, height / 2 * 1.45)
        }



        // Function that draws the 2nd option dialog
        function drawDo2() {
            // Draws a dark background to hide the last dialogue
            fill(30, 30, 30)
            rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
            // Draws the text
            fill(255, 255, 255)
            text(whatDo, width / 2, height / 2)
            text(opt2, width / 2, height / 2 * 1.45)
        }



        // Function that draws the Answer to the second dialog
        function drawAnswer2() {
            // Draws a dark background to hide the last dialogue
            fill(30, 30, 30)
            rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
            // Draws the text
            fill(255, 255, 255)
            text(answer2, width / 2, height / 2)
            text(opt0, width / 2, height / 2 * 1.45)
        }



        // Function that draws the 3rd option dialog
        function drawDo3() {
            // Draws a dark background to hide the last dialogue
            fill(30, 30, 30)
            rect(cnvS * 1.333 / 2, cnvS / 2, cnvS * 1.333, cnvS)
            // Draws the text
            fill(255, 255, 255)
            text(whatDo, width / 2, height / 2)
            text(reset, width / 2, height / 2 * 1.45)
        }



        // Hint that appears on top right of the page.
        function displayHint(fade) {
            fade = 255
            // Text
            fill(255, 255, 255, constrain(fade, 0, 255))
            text('Crying is a', width / 4 * 3, height / 4)
            text(' free action.', width / 4 * 3, height / 4 * 1.15)
            //  Bracket
            push()
            textSize(width * 0.09)
            text(']', width / 4 * 3.46, height / 4 * 1.05)
            pop()
        }



        // Main Draw function
        function draw() {


            // IF statements that make the dialog run on mouseclick
            if (dialog == 0) {
                drawBoot()
            } else if (dialog == 1) {
                drawDialog1()
            } else if (dialog == 2) {
                drawDo()
            } else if (dialog == 3) {
                drawAnswer1()
            } else if (dialog == 4) {
                drawDo2()
                displayHint()
            } else if (dialog == 5) {
                drawAnswer2()
                displayHint()
            } else if (dialog == 6) {
                drawDo3()
                displayHint()
            } else if (dialog == 7) {
                dialog = 0;
            }
        }

