

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
  let $canvas= document.querySelector("canvas");
  let game=new Game($canvas)
  game.start(); 
  };
}
  /*function startGame() {
  let background = new BackGround(600);
  background.displayRoad();
  let car = new Car(250,250,1,1,"images/car.png");
  console.log(car);
  car.displayCar();
};
*/

