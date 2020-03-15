class BackGround{
    constructor (game){
                                     //I could have included more generic constructor , like stips step , road heidth or height...
    this.game=game;             // displayRoad () more generic 
    }
displayRoad(){
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle= "green"; //"#FF0000";
    this.game.ctx.fillRect(0,0,this.game.$canvas.width,this.game.$canvas.height);
    //this.game.ctx.fillRect(400,0,25,this.game.$canvas.height);
    this.game.ctx.fillStyle="grey";
    this.game.ctx.fillRect(25,0,this.game.$canvas.width-50,this.game.$canvas.height);
    this.game.ctx.fillStyle="white";
    this.game.ctx.fillRect(50,0,15,this.game.$canvas.height);
    this.game.ctx.fillRect(435,0,15,this.game.$canvas.height);
  
    for(let step =0; step <= this.game.$canvas.height ; step+=30 ){
      this.game.ctx.fillRect(this.game.$canvas.width/2,step,10,15);
    }
    this.game.ctx.closePath();
}
}