
var box1, box2, box3;

function setup() {
  createCanvas(600, 400);
  box1 = new Box();
  box2 = new Box();
  box3 = new Box();
}

function draw() {
  background(220);
  box1.show();
  box1.set_width(40);
  box1.setSpeed(1.5);
  box2.show();
  box2.set_width(70);
  box2.setSpeed(1);
  box3.show();
  box3.set_width(100);
  box3.setSpeed(.5);
}

