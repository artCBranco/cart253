/**
 * Gameboy average
 * by Felipe Amorim Castelo Branco
 * 
 * An improvement from the last project.
 * Gameboy Screen Resolution: 25x25
 */

"use strict";

//Canvas resolution 
const cnvS = 900;
// Canvas resolution. Vertical < 1 < Horizontal
const cnvW = 0.75;






//Anything related to Typography
const typo = {
    // Font
    type: "Lucida Sans",
    ink: 0,
    size: {
        h1: 64,
        h2: 48,
        h3: 32,
        h4: 26,

    },
    // All the text strings
    str: {
        win1: "Congratulations,",
        win2: "you won!",
        reset: "Press [R] to restart",
        button: "restart [R]",
        lose1: "Oh no!",
        lose2: "You lost...",
        guide1: "To move the square:",
        guide2: "[ W ] [ A ] [ S ] [ D ]",
    },
    // Line Height
    line1: 0.3,
    line2: 0.36,
    // Button Guide text
    guide: {
        //Position on Canvas
        x: 0.7,
        // Line Height
        line1: .12,
        line2: .155,
    },
}

// Controls the color palette of the game(Added)
const palette = {
    // Background Color
    bg: 100,
    // 3D depth color
    depth: 90,
    // Screen color
    screen: {
        r: 117,
        g: 166,
        b: 72,
    },
    // Button color
    btn: {
        r: 255,
        g: 0,
        b: 0,
    },
    // Button 3d Side color
    shdw: {
        r: 150,
        g: 0,
        b: 0,

    },
    // Color of button when pressed
    prs: {
        r: 200,
        g: 0,
        b: 0,
    },
}





// Gameboy pixel size. 
const pxlX = 0.0325;
const pxlY = 0.025;
// Maximum Pixel size
const maxPixel = 25;

//Max resolution
const maxRes = 2160;

// Offset number, also used as MinRes
const offset = 8;
const half = 0.5;

// Top Right corners of the screen
const cornerX = 0.095;
const cornerY = 0.065;





//Calculations

// Canvas Width
const cnv = cnvS * cnvW;

// Half of the Offset value
const offHalf = offset * half;
// Used as rounded corners
const offQuart = offset * (half * half);

// Used in Green Screen
const screenHeight = half - (cornerY + cornerX - pxlY);
const screenSize = half + cornerY + cornerX;


// Horizontal and Vertical Movement of the Player
let ad = cornerX;
let ws = cornerY;

// Horizontal and Vertical initial position of the Points
let pointX = cornerX;
let pointY = cornerY;

// Defines the limits of the screen
const borderX = cornerX + pxlX * maxPixel;
const borderY = cornerY + pxlY * maxPixel

// KeyPress counter, used in Switch and `drawButtonBack()`
let prs;





// Set up function
function setup() {
    //Canvas
    createCanvas(cnv, cnvS)
    background(palette.bg)

    // Text Variable defined above. Also maps a max text-size according to the screen resolution
    textFont(typo.type, map(cnvS, offset, maxRes, offset, typo.size.h2))
    textAlign(CENTER)

    // Base settings (Unchanged)
    noStroke()
    rectMode(CENTER)

    // Any code to run at Setup (Added)
    push()
    textSize(map(cnvS, offset, maxRes, offset, typo.size.h4))
    text(typo.str.button, cnv * 0.75, cnvS * 0.825)
    pop()
}


// Draw Function  
function draw() {

    // Background  
    drawBg()
    //Draw Game Control Guide
    drawGuide()
    // Draws the objective
    drawWall(7, 5, 0)
    //Player  
    drawPlayer()
    //Game Controls
    //gameSwitch()
    limitScreen()
    drawBtn(0.05, 0)
    //loss()
}





function limitScreen() {
    // Limits the AD and WS number to the Gameboy borders
    if (ad < pxlX) {
        ad = cornerX
    } else if (ad > borderX) {
        ad = borderX
    } else if (ws < pxlY) {
        ws = cornerY
    } else if (ws > borderY) {
        ws = borderY
    }

    // limits the Goal to be within the Gameboy border
    if (pointX < pxlX) {
        pointX = pxlX
    } else if (pointX > borderX) {
        pointX = borderX
    } else if (pointY < pxlY) {
        pointY = pxlY
    } else if (pointY > borderY) {
        pointY = borderY
    }
}





// The function containing Game Controls. 
// Note: Renaming this to a drawFunction makes the movement choppy and pixelated
function keyPressed() {
    /** Game Controls
         * ws = changes the vertical position
         * ad = changes the horizontal position
         * (Unchanged)
         */
    prs = 0;
    switch (key) {
        case 'w':
            ws -= pxlY;
            prs = 3;
            break;
        case 's':
            ws += pxlY;
            prs = 4;
            break;
        case 'a':
            ad -= pxlX;
            prs = 1;
            break;
        case 'd':
            ad += pxlX;
            prs = 2;
            break;
        case 'r':
            ad = cornerX;
            ws = cornerY;
            prs = 5;
            break;
        default:
            prs = 0;
            break;
    }
}





/*
 * Draws the movable square controlled by the player. 
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 */
function drawPlayer(moveX, moveY) {
    // draws the movement limit of the square 
    moveX = constrain(ad, cornerX, borderX);
    moveY = constrain(ws, cornerY, borderY);
    // Movable square  
    fill(typo.ink)
    square(cnvS * cnvW * moveX, cnvS * moveY, cnvS * pxlY, offQuart)
}

// Draws the Objective  
function drawPoint(x, y, objSize) {
    // To eventually change the size of the goal. Currently unused
    // draws the movement limit of the square 
    let piX = constrain(x, 0, maxPixel);
    let piY = constrain(y, 0, maxPixel);

    //Objective
    fill(typo.ink)
    square(cnvS * cnvW * (pointX + pxlX * piX), cnvS * (pointY + pxlY * piY), cnvS * pxlY * objSize, offQuart)
}





//Creates prepared walls 
function drawWall(x, y, type) {
    if (type === 0) {
        drawPoint(x, y, 1)
        drawPoint(x + 1, y, 1)
        drawPoint(x + 2, y, 1)
        drawPoint(x + 3, y, 1)
    }
    if (type === 1) {
        drawPoint(x, y, 1)
        drawPoint(x, y + 1, 1)
        drawPoint(x, y + 2, 1)
        drawPoint(x, y + 3, 1)
    }
}




// Draw the 3D back of the buttons
function drawBtnBack(x, y) {
    fill(palette.shdw.r, palette.shdw.g, palette.shdw.b)
    rect(cnv * (0.145 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05, cnvS * 0.01)
    rect(cnv * (0.225 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05, cnvS * 0.01)
    rect(cnv * (0.185 + x), cnvS * (0.845 + y), cnvS * 0.05, cnvS * 0.07, cnvS * 0.01)
    rect(cnv * (0.185 + x), cnvS * (0.9 + y), cnvS * 0.05, cnvS * 0.07, cnvS * 0.01)
    rect(cnv * (0.7 + x), cnvS * (0.875 + y), cnvS * 0.11, cnvS * 0.05, cnvS * 0.005)
}





// Draws the reactive buttons at the bottom of the screen
function drawBtn(x, y) {
    push()
    drawBtnBack(0.06, 0.005)
    pop()
    fill(palette.btn.r, palette.btn.g, palette.btn.b)
    push()
    if (prs === 1) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv * (0.145 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05, cnvS * 0.01)
    pop()
    push()
    if (prs === 2) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv * (0.225 + x), cnvS * (0.875 + y), cnvS * 0.07, cnvS * 0.05, cnvS * 0.01)
    pop()
    push()
    if (prs === 3) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv * (0.185 + x), cnvS * (0.845 + y), cnvS * 0.05, cnvS * 0.07, cnvS * 0.01)
    pop()
    push()
    if (prs === 4) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv * (0.185 + x), cnvS * (0.9 + y), cnvS * 0.05, cnvS * 0.07, cnvS * 0.01)
    pop()
    push()
    if (prs === 5) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv * (0.7 + x), cnvS * (0.875 + y), cnvS * 0.11, cnvS * 0.05, cnvS * 0.005)
    pop()
    // fill(palette.prs.r, palette.prs.g, palette.prs.b)
    square(cnv * (0.185 + x), cnvS * (0.875 + y), cnvS * 0.05, cnvS * 0.0075)
    if (prs > 0 && !keyIsPressed) {
        prs = 0;
    }
}



























// Draw the Background  
function drawBg() {
    //3D Depth
    fill(palette.depth)
    square(cnv * half - offHalf, cnvS * (screenHeight) + offset, cnvS * (screenSize) + offset + map(cnvS, 0, maxRes * half, 0, offset), offset)
    //Green Screen
    fill(palette.screen.r, palette.screen.g, palette.screen.b)
    square(cnv * half, cnvS * (screenHeight) + offHalf + map(cnvS, 0, maxRes * half, 0, offset), cnvS * (screenSize) + offset, offset)
}

// Draws the Game Control Guide (Reworekd)
function drawGuide() {
    fill(typo.ink)
    text(typo.str.guide1, cnv * typo.guide.x, cnvS * typo.guide.line1)
    text(typo.str.guide2, cnv * typo.guide.x, cnvS * typo.guide.line2)
}

// Win Screen  
function drawWin() {
    //Background
    drawBg()

    //Text color
    fill(typo.ink)

    // Title text
    push()
    // Text Size
    textSize(map(cnvS, offset, maxRes, offset, typo.size.h1))
    // Dialogues
    text(typo.str.win1, cnv * half, typo.line1)
    text(typo.str.win2, cnv * half, typo.line2)
    pop()

    //Smaller restart suggestion
    textSize(map(cnv, offset, maxRes, offset, typo.size.h3))
    text(typo.str.reset, cnv * half, cnvS * half)
}

// Loss Screen (Added)
function loss() {
    //Background
    drawBg()

    //Text color
    fill(typo.ink)

    // Title text
    push()
    // Text Size
    textSize(map(cnv, offset, maxRes, offset, typo.size.h1))
    // Dialogues
    text(typo.str.lose1, cnv * half, cnvS * typo.line1)
    text(typo.str.lose2, cnv * half, cnvS * typo.line2)
    pop()

    //Smaller restart suggestion
    textSize(map(cnv, offset, maxRes, offset, typo.size.h3))
    text(typo.str.reset, cnv * half, cnvS * half)
}

