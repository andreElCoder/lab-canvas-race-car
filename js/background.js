class BackGround{
    constructor (height){
                                     //I could have included more generic constructor , like stips step , road heidth or height...
    this.height=height;             // displayRoad () more generic 
    }
displayRoad(){
    const $canvas = document.querySelector("canvas");
    const ctx = $canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle= "green"; //"#FF0000";
    ctx.fillRect(0,0,25,this.height);
    ctx.fillRect(400,0,25,this.height);
    ctx.fillStyle="grey";
    ctx.fillRect(25,0,375,this.height);
    ctx.fillStyle="white";
    ctx.fillRect(50,0,15,this.height);
    ctx.fillRect(350,0,15,this.height);
  
    for(let step =0; step <= this.height ; step+=25 ){
      ctx.fillRect(200,step,10,15);
    }
}
}