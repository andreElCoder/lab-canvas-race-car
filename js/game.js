class Game{
    constructor(canvas){
        this.$canvas = canvas;
        this.ctx=canvas.getContext("2d");
        this.background= new BackGround(this)
        this.car=new Car(this,this.$canvas.width/2,this.$canvas.height/1.5,"images/car.png");
        this.obstacles=[];
        this.animationId;
        this.frame=0;
    }

start(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frame++;
        console.log(this.frame);
        this.background.displayRoad();
        this.car.displayCar();
        this.car.moveCar();
        if(this.obstacles.length>0)
        this.obstaclesDisplay();
        if(this.frame%120===0){
            console.log("obstacle ")
        this.obstacles.push(new Obstacle(this));

        
    }
        this.animationId = window.requestAnimationFrame(() => {
        
        this.start();
        //window.cancelAnimationFrame(this.animationId);
        });
}
obstaclesDisplay(){
    this.obstacles.forEach(element => {
        if(element.y>this.$canvas.height){
            this.obstacles.shift();
        }
        element.displayobstacle();
        });
}
checkCollision(player, object) {
        if (object) {
          // console.log(`Player -
          // x - ${player.x}
          // y - ${player.y}
          // w - ${player.width}
          // h - ${player.height}
          // obstacle
          // x - ${object.x}
          // y - ${object.y}
          // w - ${object.width}
          // h - ${object.height}`);
          return (
            player.x < object.x + object.width &&
            player.x + player.width > object.x &&
            player.y < object.y + object.height &&
            player.y + player.height > object.y
          );
}
    }
}
