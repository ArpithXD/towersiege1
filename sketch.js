const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,polygonImage;

function preload() {
    polygonImage = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //Creating the ground
    ground = new Ground(600, 587.5, 1200, 25);

    //Creating the 3 floors to hold the blocks
    floor1 = new Ground(700,325,250,20);
    floor2 = new Ground(1000,200,250,20);
    floor3 = new Ground(1000,450,250,20); 

    //Blocks for the centre - bottom row
    block1 = new Block(695,305,26,40);
    block2 = new Block(708,305,26,40);
    block3 = new Block(721,305,26,40);
    block4 = new Block(734,305,26,40);
    block5 = new Block(747,305,26,40);
    block6 = new Block(682,305,26,40);
    block7 = new Block(669,305,26,40);
    block8 = new Block(656,305,26,40);

    //Blocks near the bottom right corner - bottom row 
    block9 = new Block(995,430,26,40);
    block10 = new Block(1008,430,26,40);
    block11 = new Block(982,430,26,40);
    block12 = new Block(1021,430,26,40);
    block13 = new Block(969,430,26,40);
    block14 = new Block(1034,430,26,40);
    block15 = new Block(956,430,26,40);
    block16 = new Block(1047,430,26,40);   

    //Blocks near the top right corner - bottom row
    block17 = new Block(995,180,26,40);
    block18 = new Block(1008,180,26,40);
    block19 = new Block(982,180,26,40);
    block20= new Block(1021,180,26,40);
    block21 = new Block(969,180,26,40);
    block22 = new Block(1034,180,26,40);
    block23 = new Block(956,180,26,40);
    block24 = new Block(1047,180,26,40);

    //Blocks on top of centre - middle row
    block25 = new Block(695,265,26,40);
    block26 = new Block(708,265,26,40);
    block27 = new Block(721,265,26,40);
    block28 = new Block(734,265,26,40);
    block29 = new Block(685,265,26,40);
    block30 = new Block(669,265,26,40);

    //Blocks on top of bottom right - middle row
    block31 = new Block(995,410,26,40);
    block32 = new Block(1008,410,26,40);
    block33 = new Block(982,410,26,40);
    block34 = new Block(1021,410,26,40);
    block35 = new Block(969,410,26,40);
    block36 = new Block(1034,410,26,40); 

    //Blocks on top of top right - middle row
    block37 = new Block(995,130,26,40);
    block38 = new Block(1008,130,26,40);
    block39 = new Block(982,130,26,40);
    block40 = new Block(1021,130,26,40);
    block41 = new Block(969,130,26,40);
    block42 = new Block(1034,130,26,40); 

    //Blocks for the bottom right - top row
    block43 = new Block(998,370,26,40);
    block44 = new Block(1005,370,26,40);
    block45 = new Block(989,370,26,40);
    block46 = new Block(1013,370,26,40); 

    //Blocks for top right - top row
    block47 = new Block(990,80,26,40);
    block48 = new Block(1016,80,26,40);
    block49 = new Block(964,80,26,40);
    block50 = new Block(1042,80,26,40);

    //Blocks for center - top row
    block51 = new Block(680.5,210,26,40);
    block52 = new Block(706.5,210,26,40);
    block53 = new Block(732.5,210,26,40);

    //Creating polygon body
    polygon = Bodies.circle(200,300,50);
    World.add(world,polygon.body);

    //creating constraint
    sling = new Slingshot(polygon.body,{x:200,y:300});


}

function draw(){
    background(0);
    Engine.update(engine);

    //Writing the text message on the screen
    fill("lightblue")
    textSize(25)
    textFont("Courier New");
    text("Drag the polygon and release it to knock out the blocks!",150,50);

    fill("lightblue")
    textSize(25)
    textFont("Courier New");
    text("Press space to try again.",150,100);


    //Displaying Bodies on screen
    ground.display();
    floor1.display();
    floor2.display();
    floor3.display();

    fill("yellow");
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

    fill("green");
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();

    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();

    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();

    fill("red");
    block43.display();
    block44.display();
    block45.display();
    block46.display();
  
    block47.display();
    block48.display();
    block49.display();
    block50.display();

    block51.display();
    block52.display();
    block53.display();

    keyPressed();
    polygon.display();
    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    sling.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        sling.reset(polygon.body);
    }
}