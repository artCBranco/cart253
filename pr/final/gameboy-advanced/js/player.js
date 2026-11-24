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
            prs = 3;
            break;
        case 's':
            ws += pxl.y;
            prs = 4;
            break;
        case 'a':
            ad -= pxl.x;
            prs = 1;
            break;
        case 'd':
            ad += pxl.x;
            prs = 2;
            break;
        case 'r':
            ad = pxl.cornerX + pxl.x;
            ws = pxl.cornerY + pxl.y;
            prs = 5;
            loop()
            break;
        default:
            prs = 0;
            break;
    }
}


/** Defines the Area the Player can Move */
function limitScreen() {
    //loss()  SWITCH TO CONSTANT
    if (playerX() === (pxl.cornerX + pxl.x * pxl.win.x) && playerY() === (pxl.cornerY + pxl.y * pxl.win.y)) {
        drawWin()
        noLoop()
    }
    //Win()
    else if (playerX() === (pxl.cornerX + pxl.x * pxl.loss.x) && playerY() === (pxl.cornerY + pxl.y * pxl.win.y)) {
        drawLoss()
        noLoop()
    }


    //Check the pxlTracker collider and return player to last position if invalid move.

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