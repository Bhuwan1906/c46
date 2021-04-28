var  backgroundImage;

var gameState = 0;

var database;

var form, planter, game;



function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState===1){

  }
  if(gameState===2){

  }
}
