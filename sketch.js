var paddle,leftEdge,topEdge,rightEdge
var bola,grupoBlocos
var edges


function preload(){


}
                                                                                                      
function setup(){
  createCanvas(500,500)

paddle = createSprite(200,350,120,10 );
bola = createSprite(250,250,30,20)
 edges= createEdgeSprites();
grupoBlocos = new Group()



topEdge =createEdgeSprites(topEdge)
leftEdge = createEdgeSprites(leftEdge)
rightEdge = createEdgeSprites(rightEdge)


criarLinha(65,"red")
criarLinha(65+29,"blue")
criarLinha(65+29+29,"green")
criarLinha(65+29+29+29,"yellow")

bola.velocityX = 20  
bola.velocityY= 20

}
                                     
function draw() {
 background(0)
paddle.x = World.mouseX;
if(paddle.x < 80){

  paddle.x =80;
  
  }
   
  
  
  if(paddle.x  >435 ){   

  paddle.x = 435;
  }
  
 

drawSprites();

                                         
bola.bounceOff(topEdge);
bola.bounceoff(leftEdge);
bola.bounceoff(rightEdge);
bola.bounceoff(paddle);
bola.bounceoff(grupoBlocos);


drawSprites()








}
function  criarLinha(y,cor) {
 
for(i = 0; i<6; i++){
var brick  = createSprite(64+54*i,y,50, 25);
brick.shapeColor=cor

brick.shapeColor = cor
grupoBlocos.add(brick)



  }
  }


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































