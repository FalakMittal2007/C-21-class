function bounceOff(gameObject3,gameObject4){
    if (gameObject3.x - gameObject4.x < gameObject4.width/2 + gameObject3.width/2
      && gameObject4.x - gameObject3.x < gameObject4.width/2 + gameObject3.width/2) {
      
      gameObject4.velocityX=gameObject4.velocityX*(-1);
      gameObject3.velocityX=gameObject3.velocityX*(-1);
    }
    if (gameObject3.y - gameObject4.y < gameObject4.height/2 + gameObject3.height/2
      && gameObject4.y - gameObject3.y < gameObject4.height/2 + gameObject3.heigh/2) {
      
      gameObject4.velocityY=gameObject4.velocityY*(-1);
      gameObject3.velocityY=gameObject3.velocityY*(-1);
    }
  
  }
  function isTouching(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }