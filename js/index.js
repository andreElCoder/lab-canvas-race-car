window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  let background = new BackGround(600);
  background.displayRoad();
  let car = new Car(250,250,50,50,"../images/car.png");
  console.log(car);
  car.displayCar();
};

}
