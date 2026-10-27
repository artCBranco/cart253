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
    type: "Handjet",
    ink: 0,
    size: {
        h1: 96,
        h2: 64,
        h3: 48,
        h4: 32,

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

// Gameboy Button layout
const posX = 0.185
const posY = 0.874;
const sizeX = 0.1325;
const sizeY = 0.0525;
const minGap = 0.4;



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
let ad = cornerX + pxlX;
let ws = cornerY + pxlY;

// Horizontal and Vertical initial position of the Points
let pointX = cornerX;
let pointY = cornerY;

// Defines the limits of the screen
const borderX = cornerX + pxlX * maxPixel;
const borderY = cornerY + pxlY * maxPixel;

// KeyPress counter, used in Switch and `drawButtonBack()`
let prs;





// Set up function
function setup() {
    //Canvas
    createCanvas(cnv, cnvS)
    background(palette.bg)

    // Text Variable defined above. Also maps a max text-size according to the screen resolution
    textFont(typo.type, map(cnvS, offset, maxRes, offset, typo.size.h2))
    textAlign(CENTER, CENTER)

    // Base settings (Unchanged)
    noStroke()
    rectMode(CENTER)

    // Any code to run at Setup (Added)

}


// Draw Function  
function draw() {


    // Background  
    drawBg()
    //Draw Game Control Guide
    drawGuide()
    // Draws the objectives
    drawObstacles()
    //Player  
    drawPlayer()
    //Game Controls
    //gameSwitch()
    limitScreen()

    drawBtn(0, 0, 1)

    //loss()
    if (playerX() === borderX && playerY() === borderY) {
        drawWin()
        noLoop()
    } else if (playerX() === cornerX && playerY() === cornerY) {
        loss()
        noLoop()
    }

    //3D detail 
    fill(palette.depth)
    rect(cnv * 0.99, cnvS / 2, cnv * 0.02, cnvS)
}





// Draws objects in the green screen
function drawObstacles() {
    drawPoint(0, 0, 1)
    drawPoint(25, 25, 1)
}



//Draws green Screen pixel border (UNUSED)
function drawFrontier() {
    drawWall(23, 23, 5)
    drawWall(20, 25, 0)
    drawWall(18, 25, 0)
    drawWall(15, 25, 0)
    drawWall(12, 25, 0)
    drawWall(9, 25, 0)
    drawWall(6, 25, 0)
    drawWall(3, 25, 0)
    drawWall(0, 23, 2)
    drawWall(0, 0, 3)
    drawWall(3, 0, 0)
    drawWall(6, 0, 0)
    drawWall(9, 0, 0)
    drawWall(12, 0, 0)
    drawWall(15, 0, 0)
    drawWall(18, 0, 0)
    drawWall(20, 0, 0)
    drawWall(23, 0, 4)
    drawWall(0, 3, 1)
    drawWall(0, 6, 1)
    drawWall(0, 9, 1)
    drawWall(0, 12, 1)
    drawWall(0, 15, 1)
    drawWall(0, 18, 1)
    drawWall(0, 20, 1)
    drawWall(25, 3, 1)
    drawWall(25, 6, 1)
    drawWall(25, 9, 1)
    drawWall(25, 12, 1)
    drawWall(25, 15, 1)
    drawWall(25, 18, 1)
    drawWall(25, 20, 1)
}





// Returns the player X position
function playerX(playX) {
    playX = constrain(ad, cornerX, borderX);
    return playX;
}

// Returns the player Y position
function playerY(plaY) {
    plaY = constrain(ws, cornerY, borderY);
    return plaY;
}





/*
 * Draws the movable square controlled by the player. 
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 */
function drawPlayer(moveX, moveY) {
    // draws the movement limit of the square 
    moveX = playerX();
    moveY = playerY();
    // Movable square  
    fill(typo.ink)
    square(cnv * moveX, cnvS * moveY, cnvS * pxlY, offQuart)
}



// Draws the Objective  
function drawPoint(x, y, objSize) {
    // To eventually change the size of the goal. Currently unused
    // draws the movement limit of the square 
    let piX = constrain(x, 0, maxPixel);
    let piY = constrain(y, 0, maxPixel);

    //Objective
    fill(typo.ink)
    square(cnv * (pointX + pxlX * piX), cnvS * (pointY + pxlY * piY), cnvS * pxlY * objSize, offQuart)
}



//Creates prepared walls 
function drawWall(x, y, type) {
    if (type === 0) {
        drawPoint(x, y, 1)
        drawPoint(x + 1, y, 1)
        drawPoint(x + 2, y, 1)

    }
    if (type === 1) {
        drawPoint(x, y, 1)
        drawPoint(x, y + 1, 1)
        drawPoint(x, y + 2, 1)

    }
    if (type === 2) {
        drawPoint(x, y, 1)
        drawPoint(x, y + 1, 1)
        drawPoint(x, y + 2, 1)
        drawPoint(x + 1, y + 2, 1)
        drawPoint(x + 2, y + 2, 1)

    }
    if (type === 3) {
        drawPoint(x, y, 1)
        drawPoint(x, y + 1, 1)
        drawPoint(x, y + 2, 1)

        drawPoint(x + 1, y, 1)
        drawPoint(x + 2, y, 1)


    } if (type === 4) {
        drawPoint(x + 2, y + 1, 1)
        drawPoint(x + 2, y + 2, 1)

        drawPoint(x, y, 1)
        drawPoint(x + 1, y, 1)
        drawPoint(x + 2, y, 1)


    }
    if (type === 5) {
        drawPoint(x + 2, y, 1)
        drawPoint(x + 2, y + 1, 1)
        drawPoint(x, y + 2, 1)
        drawPoint(x + 1, y + 2, 1)
        drawPoint(x + 2, y + 2, 1)

    }
}



// Draw the 3D back of the buttons
function drawBtnBack(x, y, size) {
    const type = 0.68
    push()
    fill(palette.bg)
    rect(cnv * type, cnvS * 0.825, 100, 50)
    fill(typo.ink)
    textSize(map(cnvS, offset, maxRes, offset, typo.size.h4))
    text(typo.str.button, cnv * type, cnvS * 0.825)
    pop()

    // const offlenght = 0.02;
    fill(palette.shdw.r, palette.shdw.g, palette.shdw.b)
    // Horizontal Arrows
    rect(cnv * (posX + x), cnvS * (posY + y), cnvS * sizeX * size, cnvS * sizeY * size, offset)
    // Vertical Arrow
    rect(cnv * (posX + x), cnvS * (posY + y), cnvS * sizeY * size, cnvS * sizeX * size, offset)
    // Reset Button
    rect(cnv * (posX + (minGap + (size * 0.1)) + x), cnvS * (posY + y), cnvS * sizeX * size, cnvS * sizeY * size, offset)
}



// Draws the reactive buttons at the bottom of the screen
function drawBtn(x, y, size) {
    // position of the center of the cross
    const center = 1.0
    //the distance between the gap
    const gapX = 0.325
    const gapY = 0.046

    // Draw the 3D buttons
    push()
    drawBtnBack(0.006, 0.006, 1)
    pop()

    // Base color
    fill(palette.btn.r, palette.btn.g, palette.btn.b)

    push()
    // If button pressed, change color
    if (prs === 1) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    //Arrow Left
    rect(cnv * (posX + x) * (center - gapX), cnvS * (posY + y), cnvS * sizeX * size / 3, cnvS * sizeY * size, offset)
    pop()

    push()
    // If button pressed, change color
    if (prs === 2) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    // Arrow Right
    rect(cnv * (posX + x) * (center + gapX), cnvS * (posY + y), cnvS * sizeX * size / 3, cnvS * sizeY * size, offset)
    pop()

    push()
    // If button pressed, change color
    if (prs === 3) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    //Arrow Up
    rect(cnv * (posX + x) * center, cnvS * (posY + y) * (center - gapY), cnvS * sizeX * size / 2.75, cnvS * sizeY * size, offset)
    pop()
    push()
    // If button pressed, change color
    if (prs === 4) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    // Arrow Down
    rect(cnv * (posX + x) * center, cnvS * (posY + y) * (center + gapY), cnvS * sizeX * size / 2.75, cnvS * sizeY * size, offset)
    pop()
    push()
    // If button pressed, change color
    if (prs === 5) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    // Reset Button
    rect(cnv * (posX + (minGap + (size * 0.1)) + x), cnvS * (posY + y), cnvS * sizeX * size, cnvS * sizeY * size, offset)
    pop()

    // If no key is pressed, no change
    if (prs > 0 && !keyIsPressed) {
        prs = 0;
    }
    // decoration
    rect(cnv * (posX + x), cnvS * (posY + y), cnvS * sizeX * size / 2.7, cnvS * sizeY * size, offset)
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
    text(typo.str.win1, cnv / 2, cnv * typo.line1)
    text(typo.str.win2, cnv / 2, cnv * typo.line2)
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
            ad = cornerX + pxlX;
            ws = cornerY + pxlY;
            prs = 5;
            loop()
            break;
        default:
            prs = 0;
            break;
    }
}

/*TO BE ADDED:
function checkOverlap() {
    // Check overlap

    // Calculate distance between circles' centres
    const d = dist(moveX, moveY, drawWall.x, drawWall.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < pxlY);
    // Set fill based on whether they overlap
    if (overlap) {
        fill(200)
        square(500, 500, 50, 50)
    }
    else {

    }
} */

