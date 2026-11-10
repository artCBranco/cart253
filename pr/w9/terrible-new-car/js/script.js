/**
 * Terrible New Car
 * Felipe Paiva, konstantinos christodoulakis, Felipe Amorim
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
async function preload() {
    carData = await loadJSON('./assets/data/cars.json');
    dinosaurData = await loadJSON('./assets/data/dinosaurs.json');
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);

    // text settings
    textSize(64)
    textAlign(CENTER, CENTER)
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    let carIndex = random(0, carData.cars.length)
    let currentCar = carData[carIndex]
    let dinosaurIndex = random(0, dinosaurData.dinosaurs.length)
    let currentDinosaur = dinosaurData[dinosaurIndex]
    text(currentCar + " " + currentDinosaur, width / 2, height / 2)
}