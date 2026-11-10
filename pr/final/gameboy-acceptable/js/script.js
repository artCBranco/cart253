/**
 * Gameboy Acceptable
 * by Felipe Amorim Castelo Branco
 * 
 * An improvement from the last project.
 * Gameboy Screen Resolution: 25x25
 */

"use strict";

/** Canvas properties */
const cnv = {
    /** Canvas Height */
    h: 900,
    /** Canvas Ratio */
    r: 0.75,
    /** Canvas Width */
    w: 0,
}

// Canvas Width calculation
cnv.w = cnv.h * cnv.r;


/** Anything related to Typography */
const typo = {
    /** Font */
    type: 'Handjet',
    /** Color Black */
    ink: 30,
    /** Hierarchy */
    size: {
        /** Hierarchy */
        h1: 96,
        /** Hierarchy */
        h2: 64,
        /** Hierarchy */
        h3: 48,
        /** Hierarchy */
        h4: 32,
    },

    /** Array with ALL the text strings */
    str: ["To move the square:", "[ W ] [ A ] [ S ] [ D ]", "restart [R]", "Press [R] to restart", "Congratulations,", "you won!", "Oh no!", "You lost..."],
    /** Line Height */
    line1: 0.3,
    /** Line Height */
    line2: 0.36,
    /** Game Guide text */
    guide: {
        /** Position on Canvas */
        x: 0.65,
        /** Line Height */
        line1: .12,
        /** Line Height */
        line2: .155,
    },
}

/** Controls the color palette of the game(Added) */
const palette = {
    /** Background Color */
    bg: 100,
    /** 3D depth color */
    depth: 90,
    /** Screen color */
    screen: {
        /** Red */
        r: 117,
        /** Green */
        g: 166,
        /** Blue */
        b: 72,
    },
    /** Button color */
    btn: {
        /** Red */
        r: 255,
        /** Green */
        g: 0,
        /** Blue */
        b: 0,
    },
    /** Button 3d Side color */
    shdw: {
        /** Red */
        r: 150,
        /** Green */
        g: 0,
        /** Blue */
        b: 0,
    },
    /** Color of button when pressed */
    prs: {
        /** Red */
        r: 200,
        /** Green */
        g: 0,
        /** Blue */
        b: 0,
    },
}

/** Objective (Win/Loss) coordinates 
const objectives = {
    winX: 24,
    winY: 24,
    lossX: 1,
    lossY: 24,
}

/** Wall Types */
const wall = {
    /** Single Dot */
    POINT: 0,
    /** 3-dot Straight Horizontal */
    STRAIGHT_H: 1,
    /** 3-dot Straight Vertical */
    STRAIGHT_V: 2,
    /** L corner on the Top Right */
    L_CORNER_Q1: 3,
    /** L corner on the Top Left */
    L_CORNER_Q2: 4,
    /** L corner on the Bottom Left */
    L_CORNER_Q3: 5,
    /** L corner on the Bottom Right */
    L_CORNER_Q4: 6,
}

/** Gameboy Button layout */
const gameboy = {
    /** Gameboy Button X Position */
    posX: 0.185,
    /** Gameboy Button Y Position */
    posY: 0.874,
    /** Gameboy Size X Position */
    sizeX: 0.1325,
    /** Gameboy Size Y Position */
    sizeY: 0.0525,
    /** Minimum gap between buttons */
    gap: 0.4,
}

/** Gameboy horizontal pixel size. */
const pxl = {
    /** Gameboy horizontal pixel size. */
    x: 0.0325,
    /** Gameboy vertical pixel size. */
    y: 0.025,
    /** Maximum Pixel size */
    max: 25,
    /** Max resolution */
    maxRes: 2160,
    /** Top Right corner of the screen */
    cornerX: 0.095,
    /** Top Right corner of the screen */
    cornerY: 0.065,
}

// Calculations
/** 0.5 */
const half = 0.5;
/** 0.25 */
const quarter = 0.25
/** Offset number, also used as MinRes */
const offset = 8;
/** Half of the Offset value (4) */
const offHalf = offset * half;
/** Used as rounded corners (2) */
const offQuart = offset * quarter;

/** Green Screen Height */
const screenHeight = half - (pxl.cornerY + pxl.cornerX - pxl.y);
/** Green Screen Width */
const screenSize = half + pxl.cornerY + pxl.cornerX;


/** Vertical Movement of the Player */
let ad = pxl.cornerX + pxl.x;
/** Horizontal Movement of the Player */
let ws = pxl.cornerY + pxl.y;
/** Vertical Movement of the Player's shadow */
let shadowX = pxl.cornerX + pxl.x;
/** Horizontal Movement of the Player'shadow */
let shadowY = pxl.cornerY + pxl.y;

/** Initial Horizontal position of the Points */
let pointX = pxl.cornerX;
/** Initial Vertical position of the Points */
let pointY = pxl.cornerY;

/** Defines the Horizontal limit of the screen */
const borderX = pxl.cornerX + pxl.x * pxl.max;
/** Defines the Vertical limit of the screen */
const borderY = pxl.cornerY + pxl.y * pxl.max;

/** KeyPress counter, used in Switch and drawButtonBack() */
let prs;





/** Setup Function */
function setup() {
    //Canvas
    createCanvas(cnv.w, cnv.h)
    background(palette.bg)

    // Text Variable defined above. Also maps a max text-size according to the screen resolution
    textFont(typo.type, map(cnv.h, offset, pxl.maxRes, offset, typo.size.h2))
    textAlign(CENTER, CENTER)

    // Base settings
    noStroke()
    rectMode(CENTER)

    // Any code to run at Setup
    drawBg()
    drawFrontier()
}

/** Main Draw Function */
function draw() {


    // 3D detail 
    fill(palette.depth)
    rect(cnv.w * 0.99, cnv.h * half, cnv.w * 0.02, cnv.h)

    // Draw Functions
    // 
    limitScreen()



    drawObstacles()
    drawPlayer()
    drawShadowP()


    //loss()  SWITCH TO CONSTANT
    if (playerX() === (pxl.cornerX + pxl.x * 24) && playerY() === (pxl.cornerY + pxl.y * 24)) {
        drawWin()
        noLoop()
    }
    //Win()
    else if (playerX() === (pxl.cornerX + pxl.x * 1) && playerY() === (pxl.cornerY + pxl.y * 24)) {
        drawLoss()
        noLoop()
    }
}



/** Draws a single black pixel */
function drawPoint(x, y, objSize) {
    /** Limits the horizontal parameter to be within the pixel limit */
    let piX = constrain(x, 0, pxl.max);
    /** Limits the vertical parameter to be within the pixel limit */
    let piY = constrain(y, 0, pxl.max);


    //Objective
    fill(typo.ink)
    square(cnv.w * (pointX + pxl.x * piX), cnv.h * (pointY + pxl.y * piY), cnv.h * pxl.y * objSize, offQuart)
}

/** Draws any win/loss pixels */
function drawObstacles() {
    drawPoint(24, 1, 1)
    drawPoint(24, 24, 1)
}

/** Draws the black pixel borde */
function drawFrontier() {
    /** Number of Horizontal walls */
    let wallX = -1;
    /** Number of Vertical walls */
    let wallY = -1;

    // Draws each wall on the screen borders
    while (wallX <= 25) {
        wallX += 1
        drawPoint(wallX, 0, 1);
        drawPoint(wallX, 25, 1);
    }
    while (wallY <= 25) {
        wallY += 1
        drawPoint(0, wallY, 1);
        drawPoint(25, wallY, 1);
    }

}

/** Draws a wall */
function createWalls(x, y, type) {
    /** Creates prepared walls */
    switch (type) {
        case wall.STRAIGHT_H:
            drawPoint(x, y, 1);
            drawPoint(x + 1, y, 1);
            drawPoint(x + 2, y, 1);
            break;
        case wall.STRAIGHT_V:
            drawPoint(x, y, 1);
            drawPoint(x, y + 1, 1);
            drawPoint(x, y + 2, 1);
            break;
        case wall.L_CORNER_Q1:
            drawPoint(x + 2, y + 1, 1);
            drawPoint(x + 2, y + 2, 1);
            drawPoint(x, y, 1);
            drawPoint(x + 1, y, 1);
            drawPoint(x + 2, y, 1);
            break;
        case wall.L_CORNER_Q2:
            drawPoint(x, y, 1);
            drawPoint(x, y + 1, 1);
            drawPoint(x, y + 2, 1);
            drawPoint(x + 1, y, 1);
            drawPoint(x + 2, y, 1);
            break;
        case wall.L_CORNER_Q3:
            drawPoint(x, y, 1);
            drawPoint(x, y + 1, 1);
            drawPoint(x, y + 2, 1);
            drawPoint(x + 1, y + 2, 1);
            drawPoint(x + 2, y + 2, 1);
            break;
        case wall.L_CORNER_Q4:
            drawPoint(x + 2, y, 1);
            drawPoint(x + 2, y + 1, 1);
            drawPoint(x, y + 2, 1);
            drawPoint(x + 1, y + 2, 1);
            drawPoint(x + 2, y + 2, 1);
            break;
        default:
            drawPoint(x, y, 1);
            break;
    }
}





/**
 * Draws the movable square controlled by the player. 
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 */
function drawPlayer(moveX, moveY) {
    /** Is the horizontal position */
    moveX = playerX();
    /** Is the vertical position */
    moveY = playerY();
    // Movable square (Player)  
    fill(typo.ink)
    square(cnv.w * moveX, cnv.h * moveY, cnv.h * pxl.y, offQuart)
}
/**
 * Draws  a shadow of the movable square controlled by the player. 
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 */
function drawShadowP(shadowX, shadowY) {
    /** Is the horizontal position */
    shadowX = playerX();
    /** Is the vertical position */
    shadowY = playerY();
    // Movable square (Player)  
    fill(palette.screen.r, palette.screen.g, palette.screen.b)
    square(cnv.w * shadowX, cnv.h * shadowY, cnv.h * pxl.y, offQuart)
}

/** Returns the player X position */
function playerX(playX) {
    playX = constrain(ad, pxl.cornerX, borderX);
    return playX;
}

/** Returns the player Y position*/
function playerY(plaY) {
    plaY = constrain(ws, pxl.cornerY, borderY);
    return plaY;
}

/** Draws the Limits of the Gameboy Screen */
function limitScreen() {
    // Limits the player (AD and WS number) to the Gameboy borders
    if (ad < pxl.x) {
        ad = pxl.cornerX
    } else if (ad > borderX) {
        ad = borderX
    } else if (ws < pxl.y) {
        ws = pxl.cornerY
    } else if (ws > borderY) {
        ws = borderY
    }

    // limits the points to be within the Gameboy border
    if (pointX < pxl.x) {
        pointX = pxl.x
    } else if (pointX > borderX) {
        pointX = borderX
    } else if (pointY < pxl.y) {
        pointY = pxl.y
    } else if (pointY > borderY) {
        pointY = borderY
    }
}

/** The function containing Game Controls. */
function keyPressed() {
    /** Game Controls
         * ws = changes the vertical position
         * ad = changes the horizontal position
         * Note: Renaming this to a drawFunction makes the movement choppy and pixelated 
         */
    prs = 0;
    switch (key) {
        case 'w':
            ws -= pxl.y;
            if (ws >= pxl.cornerX + (pxl.y * 3)) {
                shadowY += pxl.y
            }
            prs = 3;
            break;
        case 's':
            ws += pxl.y;
            if (ws >= pxl.cornerX + (pxl.y * 3)) {
                shadowY += pxl.y
            }
            prs = 4;
            break;
        case 'a':
            ad -= pxl.x;
            if (ad >= pxl.cornerX + (pxl.x * 3)) {
                shadowX -= pxl.x
            }
            prs = 1;
            break;
        case 'd':
            ad += pxl.x;
            if (ad >= pxl.cornerX + (pxl.x * 3)) {
                shadowX += pxl.x
            }
            prs = 2;
            break;
        case 'r':
            ad = pxl.cornerX + pxl.x;
            ws = pxl.cornerY + pxl.y;
            shadowX = pxl.cornerX + pxl.x;
            shadowY = pxl.cornerY + pxl.y;
            prs = 5;
            loop()
            break;
        default:
            prs = 0;
            break;
    }
}





/** Draw the Background */
function drawBg() {
    //3D Depth
    fill(palette.depth)
    square(cnv.w * half - offHalf, cnv.h * (screenHeight) + offset, cnv.h * (screenSize) + offset + map(cnv.h, 0, pxl.maxRes * half, 0, offset), offset)
    //Green Screen
    fill(palette.screen.r, palette.screen.g, palette.screen.b)
    square(cnv.w * half, cnv.h * (screenHeight) + offHalf + map(cnv.h, 0, pxl.maxRes * half, 0, offset), cnv.h * (screenSize) + offset, offset)
    // Draw the 3D button shadows
    push()
    drawBtnBack(0.006, 0.006, 1)
    pop()
    // Draw the 3D button top
    drawBtn(0, 0, 1)
    // "To move the square" string
    drawGuide()
}

/** Draw the 3D back of the buttons */
function drawBtnBack(x, y, size) {
    const typeWidth = 0.68
    push()
    //Draws a background behind the string
    fill(palette.bg)
    rect(cnv.w * typeWidth, cnv.h * 0.825, 100, 50)
    //"Restart" string above button
    fill(typo.ink)
    textSize(map(cnv.h, offset, pxl.maxRes, offset, typo.size.h4))
    text(typo.str[2], cnv.w * typeWidth, cnv.h * 0.825)
    pop()

    fill(palette.shdw.r, palette.shdw.g, palette.shdw.b)
    // Horizontal Arrows
    rect(cnv.w * (gameboy.posX + x), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeX * size, cnv.h * gameboy.sizeY * size, offset)
    // Vertical Arrow
    rect(cnv.w * (gameboy.posX + x), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeY * size, cnv.h * gameboy.sizeX * size, offset)
    // Reset Button
    rect(cnv.w * (gameboy.posX + (gameboy.gap + (size * 0.1)) + x), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeX * size, cnv.h * gameboy.sizeY * size, offset)
}

/** Draws the red reactive buttons at the bottom of the screen */
function drawBtn(x, y, size) {
    /** position of the center of the button cross */
    const center = 1.0
    /** Horizontal distance between the gap */
    const gapX = 0.325
    /**Vertical distance between the gap */
    const gapY = 0.046

    // Base red color
    fill(palette.btn.r, palette.btn.g, palette.btn.b)

    //Arrow Left
    push()
    // If button pressed, change the color.
    if (prs === 1) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv.w * (gameboy.posX + x) * (center - gapX), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeX * size / 3, cnv.h * gameboy.sizeY * size, offset)
    pop()

    // Arrow Right
    push()
    // If button pressed, change color
    if (prs === 2) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv.w * (gameboy.posX + x) * (center + gapX), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeX * size / 3, cnv.h * gameboy.sizeY * size, offset)
    pop()

    //Arrow Up
    push()
    // If button pressed, change color
    if (prs === 3) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv.w * (gameboy.posX + x) * center, cnv.h * (gameboy.posY + y) * (center - gapY), cnv.h * gameboy.sizeX * size / 2.75, cnv.h * gameboy.sizeY * size, offset)
    pop()

    // Arrow Down
    push()
    // If button pressed, change color
    if (prs === 4) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv.w * (gameboy.posX + x) * center, cnv.h * (gameboy.posY + y) * (center + gapY), cnv.h * gameboy.sizeX * size / 2.75, cnv.h * gameboy.sizeY * size, offset)
    pop()

    // Reset Button
    push()
    // If button pressed, change color
    if (prs === 5) {
        fill(palette.prs.r, palette.prs.g, palette.prs.b)
    }
    rect(cnv.w * (gameboy.posX + (gameboy.gap + (size * 0.1)) + x), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeX * size, cnv.h * gameboy.sizeY * size, offset)
    pop()

    // If no key is pressed, no change
    if (prs > 0 && !keyIsPressed) {
        prs = 0;
    }
    // decoration
    rect(cnv.w * (gameboy.posX + x), cnv.h * (gameboy.posY + y), cnv.h * gameboy.sizeX * size / 2.7, cnv.h * gameboy.sizeY * size, offset)
}

/** Draws the Game Control Guide */
function drawGuide() {
    fill(typo.ink)
    text(typo.str[0], cnv.w * typo.guide.x, cnv.h * typo.guide.line1)
    text(typo.str[1], cnv.w * typo.guide.x, cnv.h * typo.guide.line2)
}

/** Draws the Win Screen */
function drawWin() {
    //Background
    drawBg()

    //Text color
    fill(typo.ink)

    // Title text
    push()
    // Text Size
    textSize(map(cnv.h, offset, pxl.maxRes, offset, typo.size.h1))
    // Dialogues
    text(typo.str[4], cnv.w / 2, cnv.w * typo.line1)
    text(typo.str[5], cnv.w / 2, cnv.w * typo.line2)
    pop()

    //Smaller restart suggestion
    textSize(map(cnv.w, offset, pxl.maxRes, offset, typo.size.h3))
    text(typo.str[3], cnv.w * half, cnv.h * half)
}

/** Draws the Loss Screen */
function drawLoss() {
    // Background
    drawBg()

    //Text color
    fill(typo.ink)

    // Title text
    push()
    // Text Size
    textSize(map(cnv.w, offset, pxl.maxRes, offset, typo.size.h1))
    // Dialogues
    text(typo.str[6], cnv.w * half, cnv.h * typo.line1)
    text(typo.str[7], cnv.w * half, cnv.h * typo.line2)
    pop()

    // Smaller restart suggestion
    textSize(map(cnv.w, offset, pxl.maxRes, offset, typo.size.h3))
    text(typo.str[3], cnv.w * half, cnv.h * half)
}


/*TO BE ADDED:
function checkOverlap() {
    // Check overlap

    // Calculate distance between circles' centres
    const d = dist(moveX, moveY, drawWall.x, drawWall.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < pxl.y);
    // Set fill based on whether they overlap
    if (overlap) {
        fill(200)
        square(500, 500, 50, 50)
    }
    else {

    }
} */
