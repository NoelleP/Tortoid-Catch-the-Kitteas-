//create an empty array called balls
let cats = [];
let me;


function setup() {
  createCanvas(400, 500);
  me = new Avatar(width/2, 300, 3);
}

function draw(){
	background(220);
  me.drawMe();
  me.moveMe();

  if (frameCount % 55 == 0) {
      let  c = new Cat(random(0,width), height-500, -3);
      cats.push(c);
      console.log(cats); //print the balls array to the console
    }

	// draw all the balls in that array
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
    //whiskers
    push();
    stroke(138, 101, 37);
    strokeWeight(1);
    line(this.x-8,this.y-25+42,this.x-13,this.y-27+42);
    line(this.x-8,this.y-23+42,this.x-13,this.y-23+42);
    line(this.x-8,this.y-21+42,this.x-13,this.y-19+42);
    line(this.x+8,this.y-25+42,this.x+13,this.y-27+42);
    line(this.x+8,this.y-23+42,this.x+13,this.y-23+42);
    line(this.x+8,this.y-21+42,this.x+13,this.y-19+42);
    pop();

//head + body
      noStroke();
    	fill(232, 191, 109);
		  ellipse(this.x,this.y,25,35);
      ellipse(this.x,this.y+20,18,18);

//tail
      push();
      stroke(232, 191, 109);
      noFill();
      strokeWeight(8);
      translate(-30,-65);
      bezier(this.x+286/6, this.y+119/6, this.x+264/6, this.y+294/6, this.x+157/6, this.y+138/6, this.x+175/6, this.y+342/6);
      pop();

//eyes
      push();
      noStroke();
      fill(138, 101, 37);
      ellipse(this.x-4,this.y+23,4,4);
      ellipse(this.x+3,this.y+23,4,4);
      pop();
	}

	//update the location of the ball, so it moves across the screen
	moveCat(){
    this.x = this.x;
		this.y = this.y- this.speed;
	}

}

class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		noStroke();
        fill(143, 199, 70);
        //arms
        ellipse(this.x+20,this.y-12,20, 10);
        ellipse(this.x+20,this.y+12,20, 10);
        ellipse(this.x-20,this.y-12,20, 10);
        ellipse(this.x-20,this.y+12,20, 10);
        //head
        ellipse(this.x, this.y-25, 20,25);
        //tail
        triangle(this.x, this.y+32, this.x+15, this.y, this.x-15, this.y);
        //shell
        fill(45,143,45);
		    ellipse(this.x,this.y,40,50);
        //eyes
        fill("black");
        ellipse(this.x+8,this.y-30,4,4);
        ellipse(this.x-8,this.y-30,4,4);
        //shell design
        stroke(102,102,51);
        strokeWeight(1);
        line(this.x-9,this.y-3.75, this.x-3.75, this.y-11.25);
        line(this.x+9,this.y+3.75, this.x+3.75, this.y+11.25);
        line(this.x+9,this.y-3.75, this.x+3.75, this.y-11.25);
        line(this.x-9,this.y+3.75, this.x-3.75, this.y+11.25);
        line(this.x-3.75, this.y+11.25, this.x+3.75, this.y+11.25)
        line(this.x-3.75, this.y-11.25, this.x+3.75, this.y-11.25)
        line(this.x-9, this.y-3.75, this.x-9, this.y+3.75)
        line(this.x+9, this.y-3.75, this.x+9, this.y+3.75)
        line(this.x+9, this.y-3.75, this.x+18, this.y-8)
        line(this.x-9, this.y-3.75, this.x-18, this.y-8)
        line(this.x-3.75, this.y-11.25, this.x-7, this.y-23)
        line(this.x-3.75, this.y+11.25, this.x-7, this.y+23)
        line(this.x+3.75, this.y-11.25, this.x+7, this.y-23)
        line(this.x+3.75, this.y+11.25, this.x+7, this.y+23)
        line(this.x+9, this.y+3.75, this.x+18, this.y+8)
        line(this.x-9, this.y+3.75, this.x-18, this.y+8)

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
      }
        if(keyIsDown(LEFT_ARROW)){
     this.x -=this.speed;
   }

   if(keyIsDown(RIGHT_ARROW)){
     this.x +=this.speed;

    }
	}

  die(){

  }

  bounceBall(){
    if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      this.speed = -this.speed;
            mySound.setVolume(0.1);
            mySound.play();
    }
  }

}
