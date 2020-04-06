
//create an empty array called balls

let balls = [];
let diamonds = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(50, 86, 168);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }

    for (let i = 0; i < diamonds.length; i++) {
  	    diamonds[i].drawDiamonds();
        diamonds[i].moveDiamonds();
  	  }
}

function keyPressed(){
   if(keyCode === UP_ARROW) {
     let e = random(10,500);
     let u = random(10,500);
    let  b = new Ball(e,u);
    balls.push(b);
    console.log(balls);
   }
   if(keyCode === DOWN_ARROW) {
     let k = random(50,300);
     let c = random(50,300);
     let d = new Diamond(k,c);
     diamonds.push(d);
     console.log(diamonds);
   }
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		noStroke();
        let f = random(0,255);
        let g = random(0,255);
        let h = random(0,255);
    		fill(f,g,h);
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+1;
		this.y = this.y+.25;
	}
}

class Diamond {

  	constructor(x,y){ //every ball needs an x value and a y value
  		    this.x = x;
      		this.y = y;
  	}

  	drawDiamonds(){  // draw a ball on the screen at x,y
      		noStroke();
          let f = random(0,255);
          let g = random(0,255);
          let h = random(0,255);
      		fill(f,g,h);
          rotate(2);
  		 rect(this.x,this.y,30,10);

  	}

  	moveDiamonds(){ //update the location of the ball, so it moves across the screen
  		this.x = this.x+1;
  		this.y = this.y+0.5;
  	}
}
