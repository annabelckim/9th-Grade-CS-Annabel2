function setup() {
  createCanvas (800,800); //size of screen
  background (153, 255, 255);
  fill (255, 102, 163);// color of chimney
  rect (400,220,35,65); // chimney
  fill (255, 77, 148); // color of house
  rect(300,300,150,160); //house
  fill (255, 77, 148); // color of house
  triangle(300, 300, 450, 300, 375, 200); // roof
  fill (0, 128, 0); // color of grass
  rect(0,450,800,600); // grass
  fill (255, 255, 0);// color of sun
  ellipse(76, 66, 85, 85); // sun
  fill (204, 0, 82); //color of door
  rect (360,410,30,40); // door
  fill (102, 51, 0); // color of tree
  rect (600,250,55,200);// tree
  fill (0, 77, 0); // color of leaves of tree
  ellipse (625,160,200,200);//leaves of tree
  fill (255, 204, 204); // color of windows
  rect (320,325,30,40); // left window
  rect (400,325,30,40); // right window
  fill(166, 166, 166);
  ellipse (420, 180, 55, 45); // smallest smoke 'bubble'
  ellipse (410, 160, 75, 65);// middle smoke 
  ellipse (420, 130, 80, 70);// 2nd to largest
  ellipse (410, 105, 85, 75); // largest smoke
  fill (255, 128, 17);
  ellipse (385,435,10,10);// door knob


}

function draw() {
  // put drawing code here
}