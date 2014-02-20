// The main logic for your project goes in this file.

/**
 * The {@link Player} object; an {@link Actor} controlled by user input.
 */
var player;

/**
 * Keys used for various directions.
 *
 * The property names of this object indicate actions, and the values are lists
 * of keyboard keys or key combinations that will invoke these actions. Valid
 * keys include anything that {@link jQuery.hotkeys} accepts. The up, down,
 * left, and right properties are required if the `keys` variable exists; if
 * you don't want to use them, just set them to an empty array. {@link Actor}s
 * can have their own {@link Actor#keys keys} which will override the global
 * set.
 */
var keys = {
  up: ['up', 'w'],
  down: ['down', 's'],
  left: ['left', 'a'],
  right: ['right', 'd'],
};

/**
 * An array of image file paths to pre-load.
 */
var preloadables = ['images/Pat.jpg'];

/**
Global Vars
*/
var bkgd;
var scaleSizeX;
var scaleSizeY;
var solid;

/**
 * A magic-named function where all updates should occur.
 */
function update() {
  player.update();
}

/**
 * A magic-named function where all drawing should occur.
 */
function draw() {
     bkgd.draw();
	player.draw();
	//solid.draw();
}

/**
 * A magic-named function for one-time setup.
 *
 * @param {Boolean} first
 *   true if the app is being set up for the first time; false if the app has
 *   been reset and is starting over.
 */
function setup(first) {
     if (first)
     {
          // Switch from side view to top-down.
          Actor.prototype.GRAVITY = false;
          
          // Set up the background layer and tile grass over it
          bkgd = new Layer();
          bkgd.context.drawPattern('images/Pat.jpg');
          
          scaleSizeX = world.width/14;
          scaleSizeY = world.height/21;
          
          Box.prototype.DEFAULT_HEIGHT = scaleSizeY;
          Box.prototype.DEFAULT_WIDTH = scaleSizeX;
     }
  
  // Initialize the player.
  player = new Player(0,0);
  player.src = 'images/Ball.png'
  
  //solid = new Box(10,10);
}