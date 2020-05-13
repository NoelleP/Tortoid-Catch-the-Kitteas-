let cats = [];
let me;
let calicos = [];
let points = 0;
var button;


function setup() {
  createCanvas(400, 500);

  var button = createButton('Reset');
  button.mousePressed(reloadpage);
  me = new Avatar(width/2, 300, 3);
}

function reloadpage(){
  location.reload();

 }
function draw(){
	background(220);


  me.drawMe();
  me.moveMe();

  if (frameCount % 30 == 0) {
      let  c = new Cat(random(0,width), height-500, -3);
      cats.push(c);
      console.log(cats);
    }

    if (frameCount % 50 == 0) {
   let  d = new Calico(random(0,width), height-500, -3, false);
   calicos.push(d);
   console.log(calicos);
 }



	for (let i = 0; i < cats.length; i++) {
	 	      cats[i].drawCat();
       	  cats[i].moveCat();
        	cats[i].bounceCat();
	  }
    for (let i = 0; i < calicos.length; i++) {
           calicos[i].drawCalico();
           calicos[i].moveCalico();
           calicos[i].bounceCalico();
     }

fill(255);
rect(0,0,50,20);
textSize(20);
fill(0);
text(points,18,17);
}


class Avatar {

	constructor(x,y, speed){
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){
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
    if (keyIsDown(UP_ARROW)) {
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
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
class Calico {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, scored){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.scored = scored;
	}

	// draw a ball on the screen at x,y
	drawCalico(){
    //whiskers
    push();
    stroke(0);
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
    	fill(255);
		  ellipse(this.x,this.y,25,35);
      ellipse(this.x,this.y+20,18,18);

//tail
      push();
      stroke(255);
      noFill();
      strokeWeight(8);
      translate(-30,-65);
      bezier(this.x+286/6, this.y+119/6, this.x+264/6, this.y+294/6, this.x+157/6, this.y+138/6, this.x+175/6, this.y+342/6);
      pop();

//eyes
      push();
      noStroke();
      fill(0);
      ellipse(this.x-4,this.y+23,4,4);
      ellipse(this.x+3,this.y+23,4,4);
      pop();

//spots
push();
noStroke();
fill(163, 163, 163);
ellipse(this.x-4,this.y,10,8);
fill(232, 191, 109);
ellipse(this.x+5,this.y-10,6,6);
fill(138, 101, 37);
ellipse(this.x+5,this.y+10,8,10);
pop();
	}

	//update the location of the ball, so it moves across the screen
	moveCalico(){
    this.x = this.x;
		this.y = this.y- this.speed;
	}

  //point system
  bounceCalico(){
      		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40 && this.scored==false){
            if(points>=0){
              points = points+1;
              this.scored=true;
            }
            else{
              points = 0.1;
            }
            }
      		}
}


class Cat {


	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}


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


	moveCat(){
    this.x = this.x;
    this.y = this.y- this.speed;
	}


bounceCat(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            noLoop();

            noStroke();

  fill(0);
  textSize(50);
  text("Game Over", 50, 250);
    		}
  	}

}
