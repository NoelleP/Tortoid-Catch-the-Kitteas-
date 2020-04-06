//create a variable to hold one ball
let b;
let g;
let g2;
let g3;

function setup() {
  createCanvas(800, 400);
  b = new Pacman(200, 100,"yellow"); //make a new ball from the Ball class and call it b.
  g = new Ghost(50,100,"blue");
  g2 = new Ghost (-50, 100, "red");
  g3 = new Ghost (-150, 100, "lightgreen");
}


function draw(){
	background(220);
    b.drawPacman(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.movePacman(); //move the ball called b (go look in the Ball class for the moveBall function)
    g.drawGhost();
    g.moveGhost();
    g2.drawGhost();
    g2.moveGhost();
    g3.drawGhost();
    g3.moveGhost();

}


//ball class from which to create new balls with similar properties.
class Pacman {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}

  drawPacman(){  // draw a ball on the screen at x,y
        stroke(0);
        fill(this.color);
        arc(this.x, this.y, 50, 50, 0, PI + 3*QUARTER_PI, PIE);
  }
  movePacman(){ //update the location of the ball, so it moves across the screen
    this.x = this.x+2;
    this.y = this.y;
  }
}

class Ghost {
  constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
}
  drawGhost(){  // draw a ball on the screen at x,y
    	         stroke(0);
          		fill(this.color);
              arc(this.x, this.y, 50, 50, PI, TWO_PI, OPEN);
              arc(this.x, this.y, 50/3, 50/3, 0, PI, OPEN);
              arc(50/3+this.x, this.y, 50/3, 50/3, 0, PI, OPEN);
              arc(-50/3+this.x, this.y, 50/3, 50/3, 0, PI, OPEN);
              fill(255);
              ellipse(-10+this.x, -10+this.y, 5, 5);
              ellipse(10+this.x, -10+this.y, 5, 5);




      	}
	moveGhost(){ //update the location of the ball, so it moves across the screen
      		this.x = this.x+2;
      		this.y = this.y;
      	}

}
