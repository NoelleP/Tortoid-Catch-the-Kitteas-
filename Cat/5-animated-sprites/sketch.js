// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var bird;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  bird = loadAnimation('sprites/Bird001.png', 'sprites/Bird002.png', 'sprites/Bird003.png', 'sprites/Bird004.png', 'sprites/Bird005.png');

}

function setup() {
  createCanvas(1000, 750);
}

function draw() {
  background(255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(bird, 500, 500);

}
