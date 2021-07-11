const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5, box6, box7,box16, box8, box9, box10;
var box11,box12,box13,box14;
var box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;
var bg
var backgroundImg

function preload() {
  
  getBack();
}

function setup() {
  createCanvas(2000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 600, 1600, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1300,550,300);

  //1 block
  box1 = new Box(700, 100, 70, 70);
  box8 = new Box(700, 170, 70, 70);
  box9 = new Box(700, 310, 70, 70);
  box10 = new Box(700, 240, 70, 70);

  //2 block
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 170, 70, 70);
  box13 = new Box(800, 310, 70, 70);
  box14 = new Box(800, 240, 70, 70);
  box16 = new Box(800, 380, 70, 70);

  //3 block
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 170, 70, 70);
  box4 = new Box(900, 240, 70, 70);
  box5 = new Box(900, 310, 70, 70);
  box6 = new Box(900, 380, 70, 70);
  box7 = new Box(900, 450, 70, 70);


  //4 block

  box21 = new Box(1000, 100, 70, 70);
  box22 = new Box(1000, 170, 70, 70);
  box23 = new Box(1000, 240, 70, 70);
  box24 = new Box(1000, 310, 70, 70);
  box25 = new Box(1000, 380, 70, 70);
  box26 = new Box(1000, 450, 70, 70);

}

function draw() {
  if(backgroundImg){
  background(backgroundImg);
  }

  Engine.update(engine);


  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box16.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();



  hero.display();
  rope.display();
  monster.display();

  fill ("red")
textSize(20)
text("GO CRUSH THE MONSTER",600,100)
  
}



function keyPressed(){
  if(keyCode === 32){
    rope.attach(hero.body)
  }
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly()
}

async function getBack(){

  var response = await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson = await response.json()
var datetime = responseJson.datetime
var hour = datetime.slice(11,13);


if(hour>=07&&hour<05){
  bg = "gamingbackground2.png"
}
else{
  bg = "gamingbackground1.jpg"
}
backgroundImg = loadImage(bg)
}
