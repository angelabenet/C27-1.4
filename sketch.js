
//  módulos  -  para funcionar a fisica dentro do nosso jogo

const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies; 
const Constraint  = Matter.Constraint;


var engine, world, backgroundImg, tower, towerImage, ground, canvas; 

var cannon; 
var cannon2;


function preload(){

backgroundImg = loadImage ("./assets/background.gif");
towerImage = loadImage("./assets/tower.png")


}



function setup(){

canvas =  createCanvas(1200,600);

engine = Engine.create();
world = engine.world;


var options = {

    isStatic: true

}

ground = Bodies.rectangle (0, height -1 , width * 2,height,1, options );
World.add(world, ground);

tower = Bodies.rectangle (160,350,160,310, options )
World.add(world, tower);

// instaciar uma classe 
cannon = new Cannon (10,20,30,50,30)
cannon2 = new Cannon (25,35,45, 80)



}


function draw(){

// image(nomeDavarQueCArregaUmaImgDeFundo,x,y,l,a)
image(backgroundImg,0,0,1250,600);


Engine.update(engine);



rect(ground.position.x, ground.position.y, width,height);




// encapsulamento 

push();


imageMode(CENTER);
image(towerImage, tower.position.x, tower.position.y, 160,310)


pop();



}





/*

tipos de dados


var let const


var   nome  =  "Kaue";
let nome2 =  Fernando;
const cpf= 123456789;
----------------------

Matriz
let matriz = [123,366,999]

--------------------

POO

variavel detalhada 
objeto: 

variavel detalhada 

let cidade = {

centro: "",]
habitantes: 15,
regiao: 1234556,
casa: "Amarela"



}





*/ 