/** Array that tracks the position of all black pixels in the screen */
let pxlTrack = [];

/** Notes the black pixel coordinates */
function pxlCoordinates(x, y) {
    /** Coordinates template*/
    let newCoordinate = {
        x: x,
        y: y,
    };
    return newCoordinate;
}



/** Draws a single black pixel */
function drawPoint(x, y, objSize) {
    /** Limits the horizontal parameter to be within the pixel limit */
    let piX = constrain(x, 0, pxl.max);
    /** Limits the vertical parameter to be within the pixel limit */
    let piY = constrain(y, 0, pxl.max);

    pxlTrack.push(pxlCoordinates(piX, piY))
    console.log(pxlTrack.value)

    //Objective
    fill(typo.ink)
    square(cnv.w * (pointX + pxl.x * piX), cnv.h * (pointY + pxl.y * piY), cnv.h * pxl.y * objSize, offQuart)
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
    //  fill(palette.screen.r, palette.screen.g, palette.screen.b)
    //  square(cnv.w * moveX, cnv.h * moveY, cnv.h * pxl.y * 3, offQuart)
    fill(typo.ink)
    square(cnv.w * moveX, cnv.h * moveY, cnv.h * pxl.y, offQuart)
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

/** Draws any win/loss pixels */
function drawObstacles() {
    drawPoint(24, 1, 1)
    drawPoint(24, 24, 1)
}

/** Draws the black pixel border */
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

