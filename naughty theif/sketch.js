var thief_run,thief;
var bg,bg2;
var di,d;
var s,si
var bs,bsi
function preload(){
 //load your images here 
 thief_run=loadAnimation("t1.png","t2.png","t3.png","t4.png","t5.png","t6.png","t7.png","t8.png","t9.png","t10.png","t11.png","t12.png","t13.png","t14.png","t15.png","t16.png","t17.png","t18.png","t19.png","t20.png")
  bg=loadImage("m.jpg")
  di=loadImage("d.png")
  bg2=loadImage("r.jpg")
si=loadImage("soldior.png")
bi=loadImage("bullet.png")
bsi=loadImage("bs.png")


}

function setup() {
  createCanvas(1400, 630);
  
  thief=createSprite(1253,300,30,30)
  thief.addAnimation("run",thief_run)
  thief.scale=0.5
  thief.velocityX=-2
  d=createSprite(700,325,30,30)
  d.addImage(di);
  d.scale=.2;
  s=createSprite(60,309,30,30)
  s.addImage(si)
  s.scale=1
  
  b=createSprite(132,267,10,10)
  b.addImage(bi)
  b.scale=0.1
  
  b.visible=false
  bs=createSprite(1300,300,30,30)
  bs.addImage(bsi)
  bs.scale=0.8
  bs.velocityX=-2
  bs.visible=false
  
 
  //add code here

}
function draw() {
background(bg)
  //add code here
  text(mouseX+','+mouseY,mouseX,mouseY)
  if(thief.isTouching(d)){
    d.visible=false;

}
  if(thief.x<800){
  s.visible=true;
  
  }
 if(keyCode===32){
b.visible=true;
b.velocityX=10
 }

 if(b.isTouching(thief)){
bs.visible=true
thief.visible=false
thief.velocityX=0
bs.velocityX=0
d.visible=true


}

text("theif is stealing the diamond you are the soldior please shoot him press space key to shoot !!!!",500,61 )
textSize(610,61)
drawSprites();
}