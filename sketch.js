
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var slingshot;

function setup(){ 
    createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world; 

    ground= new GroundObj(630,350,250,10);
    ground2= new GroundObj(1000,210,200,10);
    //level one
     block1 = new Block(545,330,30,40);
     block2 = new Block(575,330,30,40);
     block3 = new Block(605,330,30,40);
     block4 = new Block(635,330,30,40);
     block5 = new Block(665,325,30,40);
     block6 = new Block(695,325,30,40);
     block7 = new Block(725,325,30,40);
    //level two
     block8 = new Block(575,285,30,40);
     block9 = new Block(605,285,30,40);
     block10 = new Block(635,285,30,40); 
     block11 = new Block(665,285,30,40);
     block12 = new Block(695,285,30,40);
    //level three
     block13 = new Block(605,245,30,40);
     block14 = new Block(635,245,30,40);
     block15 = new Block(665,245,30,40);
    //level four
     block16 = new Block(635,205,30,40);
    // row one
    block17= new Block(930,190,30,40);
    block18= new Block(960,190,30,40);
    block19= new Block(990,190,30,40);
    block20= new Block(1020,185,30,40);
    block21= new Block(1050,185,30,40);
    // row two
    block22= new Block(960,145,30,40);
    block23= new Block(990,145,30,40);
    block24= new Block(1020,145,30,40);
    // row three
    block25= new Block(990,105,30,40);

    // polygon
    polygon = new Polygon(100,200,20);
    
    // slingshot
    slingshot = new Sling(polygon.body,{x:100,y:200});

    
}
function draw(){ 
    background(255);
    Engine.update(engine);

    ground.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    polygon.display();

    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32 ){
       slingshot.attach(this.polygon);
    }
}
