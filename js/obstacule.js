class Obstacle{
    constructor(game){
        this.game=game;
        this.x=Math.floor(Math.random()*this.game.$canvas.width);
        this.y=0;
        this.speedY=Math.floor(Math.random()*5)+2;
        this.width=Math.floor(Math.random()*this.game.$canvas.width/2);
        this.height=20;
    }

    displayobstacle(){
        this.y+=this.speedY;
        this.game.ctx.beginPath()
        this.game.ctx.fillStyle="red";
        this.game.ctx.fillRect(this.x,this.y,this.width,this.height);
        this.game.ctx.closePath();
    }

}