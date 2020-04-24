//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

// let mySound;
//
// function preload() {
//   soundFormats('mp3', 'ogg');
//   mySound = loadSound('squawk.mp3');
// }


function setup() {
  createCanvas(400, 500);


  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background("gray");
  // fill("yellow")
  // ellipse(100,100,100,100)

  me.drawMe();
  me.moveMe();

  if (frameCount % 100 == 0) {
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


        // line(this.x,this.y, this.x, this.y+80);
        // line(this.x, this.y+80, this.x-40, this.y+120);
        // line(this.x, this.y+80, this.x+20, this.y+100);
        // line(this.x+20, this.y+100, this.x+10, this.y+120);
        // line(this.x, this.y+30, this.x-20, this.y+50);
        // line(this.x-20, this.y+50, this.x+20, this.y+70);
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
      // strokeWeight(1);
    	fill(200,150, 150);
		  ellipse(this.x,this.y,20,18);
      fill(220, 130, 130)
      ellipse(this.x+30,this.y,40,15);
      triangle(this.x+40, this.y+20, this.x+12, this.y-2, this.x+30, this.y-5 )
      fill("orange")
      triangle(this.x-10, this.y+2, this.x-22, this.y, this.x-10, this.y-2)

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
            mySound.setVolume(0.1);
            mySound.play();
    		}
  	}

}