//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("black");
        strokeWeight(3);
    		fill("black");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
        noStroke();
        fill(77,40,0);
        rect(this.x-13,this.y-27,25,20)
        fill(153,102,51);
        rect(this.x-15,this.y-10,30,5);

        // push();
        // // beginShape();
        // scale(1/7);
        // bezier(463, 135, 335, 58, 40, 50, 16, 235);
        // translate(447,-100);
        // bezier(463, 135, 372, 364, 128, 241, 16, 235);
        // translate(-585,250);
        // bezier(136, 469, 345, 332, 128, 241, 157, 63);
        // bezier(18, 342, 345, 332, 128, 241, 555, 111);
        // // endShape();
        // pop();
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	noStroke();
    	fill(123, 131, 189);
		  ellipse(this.x,this.y,10,10);
      fill(164, 165, 171);
      triangle(this.x+27,this.y,this.x+40,this.y+10,this.x+40,this.y-10);
      fill("gray");
      ellipse(this.x+17,this.y,26,18);
      fill("gray");
      triangle(this.x+10,this.y,this.x+22,this.y-30,this.x+25,this.y);
      ellipse(this.x+22,this.y-20,7,19);
      fill(0);
      ellipse(this.x-1,this.y-1, 2,2);
      fill(164, 165, 171);
      triangle(this.x-2,this.y-4,this.x-9,this.y,this.x-9,this.y+4);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}
