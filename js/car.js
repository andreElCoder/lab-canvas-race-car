class Car {
    constructor(game,x,y,imageSrc){
        this.game=game;
        this.x=x;
        this.y=y;
        this.speedX=0;
        this.speedY=0;
        this.image = new Image();
        this.image.src = imageSrc;
    }
    displayCar(){
        if(this.x+this.speedX<this.game.$canvas.width-44 && this.x+this.speedX>22)
            this.x+=this.speedX;
        if(this.y+this.speedY<this.game.$canvas.height-20 && this.y+this.speedY>0)
            this.y+=this.speedY;

        this.game.ctx.beginPath()
        this.game.ctx.drawImage(this.image,this.x,this.y,20,20);
        this.game.ctx.closePath();
    }
    moveCar(){
        
        window.addEventListener("keydown", event => {
        switch(event.keyCode){
            case 37:  this.speedX=-2;this.speedY=0;break
            case 38:  this.speedY=-2;this.speedX=0;break
            case 39:  this.speedX=2;this.speedY=0;break
            case 40:  this.speedY=2;this.speedX=0;break
       default: ;
        }
        })
    }
}