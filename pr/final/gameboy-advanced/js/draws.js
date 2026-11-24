/**
 * Draws the background gameboy used in Gameboy Advanced
 * by Felipe Amorim Castelo Branco
 * 
 * All extensively documented
 */
// Text & Screen Visuals

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

// Screen

/** Draws a single black pixel */
function drawPoint() {
    fill(typo.ink)
    // For every coordinates on the pxlTracker Array
    for (let point of pxlTracker) {
        // Draws the Square at Every coordinate
        square(cnv.w * (pointX + pxl.x * point.x), cnv.h * (pointY + pxl.y * point.y), cnv.h * pxl.y, offQuart)
    }
}
/** Draw the Background */
function drawBg() {
    //3D Depth
    fill(palette.depth)
    square(cnv.w * half - offHalf, cnv.h * (screenHeight) + offset, cnv.h * (screenSize) + offset + map(cnv.h, 0, pxl.maxRes * half, 0, offset), offset)

    // 3D detail right corner
    fill(palette.depth)
    rect(cnv.w * 0.99, cnv.h * half, cnv.w * 0.02, cnv.h)

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


// Gameboy Hardware

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

