var ator,carro1,carro2,carro3,carro4,carro5,carro6,estrada,vidas,pontuacao
var imagemCarro1,imgemCarro2,imagemCarro3,imagemCarro4,imgemCarro5,imagemCarro6





function preload () {
 imagemAtor = loadImage('imagens/ator-1.png')
imagemCarro1 = loadImage('imagens/carro-1.png')
 imagemCarro2 = loadImage('imagens/carro-2.png')
 imagemCarro3 = loadImage('imagens/carro-3.png')
imagemCarro4= loadImage('imagens/carro-1.png')
imagemCarro5 = loadImage('imagens/carro-2.png')
imagemCarro6= loadImage('imagens/carro-3.png')
 estrada=loadImage('imagens/estrada.png')
  
} 


function setup(){
  pontuacao = 0
vidas = 3 
createCanvas(600,350)
carro1 = createSprite(580,50,20,20)
  carro1.addImage(imagemCarro1)
  carro1.scale = 0.5
carro2 = createSprite(580,100,20,20)
   carro2.addImage(imagemCarro2)
  carro2.scale = 0.5
  
carro3 = createSprite(580,150,20,20)
 carro3.addImage(imagemCarro3)
  carro3.scale = 0.5
  
carro4 =createSprite (580,200,20,20)
 carro4.addImage(imagemCarro4)
  carro4.scale = 0.5
  
carro5 =createSprite (580,250,20,20)
 carro5.addImage(imagemCarro5)
  carro5.scale = 0.5
  
carro6 =createSprite (580,300,20,20)
 carro6.addImage(imagemCarro6)
  carro6.scale = 0.5

ator=createSprite(300,335,20,20)
ator.addImage(imagemAtor)
ator.scale = 0.2

  
carro1.velocityX=-8
carro2.velocityX=-10
carro3.velocityX=-9
carro4.velocityX=-8
carro5.velocityX=-10
carro6.velocityX=-9

}

function draw(){

background(estrada)
  
  
  if(carro1.x < 0){
    carro1.x =650
  }
  if(carro2.x < 0){
    carro2.x =650
  }
  if(carro3.x < 0){
    carro3.x =650
  }
    if(carro4.x < 0){
    carro4.x =650
    }
    if(carro5.x < 0){
    carro5.x =650
    }
    if(carro6.x < 0){
    carro6.x =650
  }
  
  
  
  if (keyDown('up')){
  ator.y = ator.y - 2
    

  } 
  
    if(keyDown('down')){
  ator.y = ator.y + 2
    
    
 }
  
  
if(
ator.isTouching(carro1)||
ator.isTouching(carro2)||
ator.isTouching(carro3)||
ator.isTouching(carro3)||
ator.isTouching(carro4)||
ator.isTouching(carro5)||
ator.isTouching(carro6)
){
ator.y=335
  
}

drawSprites()
  
  
   
}