/**
 * The Emojinaut
 * Felipe A. C. Branco
 * 
 * This is an illustration of my "emojinaut". A space explorer that displays their emotions on their helmet. This character was inspired by
 [a past project of mine](https://www.instagram.com/p/DBUugzkPLyj/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==), but this illustration was created entirely through code.
 */

"use strict";

function setup() {
    createCanvas(1920, 1080);
}

function draw() {
    /**
   * ▽ Draw the background color 
   */
    background(220);
    /**
    * ▽ Create the Emojinaut backpack
    */
    rectMode(CENTER)
    fill('#ff00dd')
    noStroke()
    rect(1250, 1080, 1000, 500, 60, 0, 0, 0)
    /**
  * ▽ Create the Emojinaut body
  */
    rectMode(CENTER)
    fill('#ffc2f7')
    noStroke()
    rect(1250, 1080, 1200, 150, 60, 0, 0, 0)
    /**
* ▽ Create the Emojinaut neck
*/
    rectMode(CENTER)
    fill('#ff80ee')
    noStroke()
    rect(1250, 980, 700, 250)
    /**
 * ▽ Create the Emojinaut's helmet
 */
    fill('#ff00ae')
    noStroke()
    rectMode(CENTER)
    circle(1250, 600, 1000)
    /**
* ▽ Create the Emojinaut backpack
*/

    /**
  * ▽ Describe the artwork for accessibility settings
  */
    describe('an emojinaut.')

}