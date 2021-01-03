var canvas;
var music;
var o , o1 , o2 , o3 , o4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);

    //create 4 different surfaces
    o1 = createSprite(100,390,200,20);
    o1.shapeColor = 'Blue';

    o2 = createSprite(300,390,200,20);
    o2.shapeColor = 'Green';

    o3 = createSprite(500,390,200,20);
    o3.shapeColor = 'pink';

    o4 = createSprite(700,390,200,20);
    o4.shapeColor = 'yellow';
    //create box sprite and give velocity

    o = createSprite(350,20,20,30);
    o.x = Math.round(random(20,750))
    o.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();

    if(isTouching(o , o1)){
        o.shapeColor = o1.shapeColor;
        o.velocityY  = 0; 
        
    }

    if(isTouching(o , o2)){
        o.shapeColor = o2.shapeColor;
        o.velocityY  = 0; 
    }

    if(isTouching(o , o3)){
        o.shapeColor = o3.shapeColor;
        o.velocityY  = 0; 
    }

    if(isTouching(o , o4)){
        o.shapeColor = o4.shapeColor;
        o.velocityY  = 0; 
    }

    //add condition to check if box touching surface and make it box

    drawSprites();
}
