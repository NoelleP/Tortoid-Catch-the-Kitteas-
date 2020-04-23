//create an empty array called balls
let cats = [];


function setup() {
  createCanvas(500, 400);
}

function draw(){
	background(220);

  if (frameCount % 25 == 0) {
      let  c = new Cat(width, random(0,height), -3);
      cats.push(c);
      console.log(cats); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < cats.length; i++) {
	 	      cats[i].drawCat();
       	  cats[i].moveCat();
	  }
}

//ball class from which to create new balls with similar properties.
class Cat {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawCat(){
    	noStroke();
    	fill(232, 191, 109);
		  ellipse(this.x,this.y,35,25);
      ellipse(this.x-20,this.y,18,18);
      push();
      stroke(232, 191, 109);
      noFill();
      strokeWeight(8);
      translate(-5,-45);
      bezier(this.x+119/6, this.y+286/6, this.x+294/6, this.y+264/6, this.x+138/6, this.y+157/6, this.x+342/6, this.y+175/6);
      pop();
      push();
      stroke(0);
      strokeWeight(2);
      line(this.x-20,this.y,this.x-40,this.y-50);
      line(10,100,200,50);
      pop();
	}

	//update the location of the ball, so it moves across the screen
	moveCat(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

}
