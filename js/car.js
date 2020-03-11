class Car {
    constructor(x,y,width,height,imageSrc){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image= new Image();
        this.image.src = `${imageSrc}`;
    }
    displayCar(){
        const $canvas = document.querySelector("canvas");
        const ctx = $canvas.getContext("2d");
    
        this.image.onload = function() {
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
          }
    }
}