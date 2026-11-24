/** Array that tracks the position of all black pixels in the screen */
let pxlTracker = [];

// Pixel Tracker

/** Creates each individual Pixel coordinates */
function createCoordinates(x, y) {
    /** Creates each individual Pixel coordinates*/
    let newCoordinate = {
        x: x,
        y: y,
    };
    return newCoordinate;
}

/** Adds the Coordinates of each pixel to the Array*/
function addPoint(x, y) {
    /** Limits the horizontal parameter to be within the pixel limit */
    let piX = constrain(x, 0, pxl.max);
    /** Limits the vertical parameter to be within the pixel limit */
    let piY = constrain(y, 0, pxl.max);
    pxlTracker.push(createCoordinates(piX, piY))
}

//Obstacles
/** Draws any win/loss pixels */
function addObstacles() {
    addPoint(pxl.loss.x, pxl.loss.y, 1)
    addPoint(pxl.win.x, pxl.win.y, 1)
}

/** Draws the black pixel border */
function addFrontier() {
    /** Number of Horizontal walls */
    let wallX = -1;
    /** Number of Vertical walls */
    let wallY = -1;

    // Draws each wall on the screen borders
    while (wallX <= 25) {
        wallX += 1
        addPoint(wallX, 0, 1);
        addPoint(wallX, 25, 1);
    }
    while (wallY <= 25) {
        wallY += 1
        addPoint(0, wallY, 1);
        addPoint(25, wallY, 1);
    }
}

/** Draws a wall */
function createWalls(x, y, type) {
    /** Creates prepared walls */
    switch (type) {
        case wall.STRAIGHT_H:
            addPoint(x, y, 1);
            addPoint(x + 1, y, 1);
            addPoint(x + 2, y, 1);
            break;
        case wall.STRAIGHT_V:
            addPoint(x, y, 1);
            addPoint(x, y + 1, 1);
            addPoint(x, y + 2, 1);
            break;
        case wall.L_CORNER_Q1:
            addPoint(x + 2, y + 1, 1);
            addPoint(x + 2, y + 2, 1);
            addPoint(x, y, 1);
            addPoint(x + 1, y, 1);
            addPoint(x + 2, y, 1);
            break;
        case wall.L_CORNER_Q2:
            addPoint(x, y, 1);
            addPoint(x, y + 1, 1);
            addPoint(x, y + 2, 1);
            addPoint(x + 1, y, 1);
            addPoint(x + 2, y, 1);
            break;
        case wall.L_CORNER_Q3:
            addPoint(x, y, 1);
            addPoint(x, y + 1, 1);
            addPoint(x, y + 2, 1);
            addPoint(x + 1, y + 2, 1);
            addPoint(x + 2, y + 2, 1);
            break;
        case wall.L_CORNER_Q4:
            addPoint(x + 2, y, 1);
            addPoint(x + 2, y + 1, 1);
            addPoint(x, y + 2, 1);
            addPoint(x + 1, y + 2, 1);
            addPoint(x + 2, y + 2, 1);
            break;
        default:
            addPoint(x, y, 1);
            break;
    }
}




