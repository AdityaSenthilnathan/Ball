var ball;
var database;
var pos;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballref = database.ref('ball/position');
    ballref.on("value", readPosition, showError);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
  pos = data.val();
  ball.x = pos.x;
  ball.y = pos.y;

}

function showError(){
console.log("An Error has Occured");


}

function writePosition(x,y){
var bref = database.ref('ball/position'); 
bref.set({
    x: pos.x + x,
    y: pos.y + y
});


}
