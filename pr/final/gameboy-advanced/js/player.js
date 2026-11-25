/** Stores the player's last positions*/
let playerHistory = [];

/** Returns the player's current position*/
function calculatePlayerPos() {
    let playX = pxl.cornerX + pxl.x * constrain(ad, 0, pxl.max);
    let plaY = pxl.cornerX + pxl.y * constrain(ws, 0, pxl.max);
    /*if (pxlTracker.includes({ playX, plaY }) === true) {
        playX = playerHistory[4].x;
        plaY = playerHistory[4].y;
    }*/
    return { x: playX, y: plaY };
}

/** 
 * Draws the movable square controlled by the player. 
 * moveX = Is the horizontal position
 * moveY = Is the vertical position
 */
function drawPlayer() {
    /** Player's current position */
    let pos = calculatePlayerPos();

    // Movable square (Player)  
    fill(typo.ink)
    square(cnv.w * (pos.x), cnv.h * (pos.y), cnv.w * pxl.y, offQuart)
}


/** The function containing Game Controls. */
function keyPressed() {
    // Gameboy Button Color Change
    prs = 0;
    // Total Amount of Moves
    keyCount += 1;


    /** Game Controls
    * ws = changes the vertical position
    * ad = changes the horizontal position
    **/
    switch (key) {
        case 'w':
            ws -= 1;
            prs = 3;
            break;
        case 's':
            ws += 1;
            prs = 4;
            break;
        case 'a':
            ad -= 1;
            prs = 1;
            break;
        case 'd':
            ad += 1;
            prs = 2;
            break;
        case 'r':
            ad = 0;
            ws = 0;
            prs = 5;
            loop()
            keyCount = 0;
            break;
        default:
            prs = 0;
            break;
    }

    // Adds the Current Position to the Array and removes the last one
    playerHistory.push({ ad, ws });
    if (playerHistory.lenght > 5) {
        playerHistory.shift();
    }
}


/** Defines the Area the Player can Move */
function limitScreen() {
    //loss()  SWITCH TO CONSTANT
    if (ad === pxl.win.x && ws === pxl.win.y) {
        drawWin()
        noLoop()
    }
    //Win()
    else if (ad === pxl.loss.x && ws === pxl.loss.y) {
        drawLoss()
        noLoop()
    }

    // Limits the player (AD and WS number) to the Gameboy borders
    if (ad < 0) {
        ad = 0;
    } else if (ad > pxl.max) {
        ad = pxl.max;
    } else if (ws < 0) {
        ws = 0;
    } else if (ws > pxl.max) {
        ws = pxl.max;
    }

    // limits the points to be within the Gameboy border
    if (pointX < pxl.x) {
        pointX = pxl.x;
    } else if (pointX > borderX) {
        pointX = borderX;
    } else if (pointY < pxl.y) {
        pointY = pxl.y;
    } else if (pointY > borderY) {
        pointY = borderY;
    }
}