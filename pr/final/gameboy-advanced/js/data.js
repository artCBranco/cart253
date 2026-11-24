/**
 * Variables used in Gameboy Advanced
 * by Felipe Amorim Castelo Branco
 * 
 * All extensively documented
 */

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
    ink: 40,
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
    /** Loss Coordinates*/
    loss: {
        x: 23,
        y: 1,
    },
    /** Win Coordinates */
    win: {
        x: 24,
        y: 24,
    },
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

/** Defines the Horizontal limit of the screen */
const borderX = pxl.cornerX + pxl.x * pxl.max;
/** Defines the Vertical limit of the screen */
const borderY = pxl.cornerY + pxl.y * pxl.max;

/** Defines the Horizontal limits of the black pixels */
const pointX = pxl.cornerX
/** Defines the Vertical limits of the black pixels */
const pointY = pxl.cornerY

/** KeyPress counter, used in Switch and drawButtonBack() */
let prs;