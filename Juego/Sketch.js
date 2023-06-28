//ALUMNO:EMMANUEL KUGUE TAPIZ
//TAREA VIDEOJUEGO PÓKE-DINO
//VERSION 1.0
//FECHA DE ENTREGA 09/04/2023
let bgImg;
let bg1;
let bg2;
let rapidashImg;
let rapidash;
const SPACE_KEY = 32;
let exeggutorImg;

const exeggutors = [];
let score = 0;
let scoreElement;
function preload() {
  let jumpSound;
  bgImg = loadImage('assets/bg.png');
  rapidashImg = loadImage('assets/mario.png');
  exeggutorImg = loadImage('assets/tortuga.png');
  audio = document.getElementById('jump');
  loseSound = document.getElementById('lose');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg1 = new Bg(bgImg, 0);
  bg2 = new Bg(bgImg, width);
  rapidash = new Rapidash(rapidashImg);
  scoreElement = createDiv('Score: 0');
  scoreElement.position(10, 10);
}

function draw() {
  let newExeggutor = null;
  if (random(10) >= 9.80) {
    let tempExeggutor = new Exeggutor(exeggutorImg);
    if (tempExeggutor.noOverlap(exeggutors)) {
      newExeggutor = tempExeggutor;
    }
  }
  if (newExeggutor) {
    exeggutors.push(newExeggutor);
  }
  bg1.draw();
  bg2.draw();
  rapidash.draw();
  let exeggutorPassed = false;
  for (let exeggutor of exeggutors) {
    exeggutor.draw();
    if (rapidash.rectCollision(exeggutor)) {
      loseSound.play();
      noLoop();
    }
    exeggutor.move();

    if (rapidash.x > exeggutor.x + exeggutor.s && !exeggutor.passed) {
      exeggutor.passed = true;
      exeggutorPassed = true;
      score += 10;
    }
  }

  if (exeggutorPassed) {
    exeggutors.shift();
  }
  bg1.scroll();
  bg2.scroll();
  rapidash.update();
  scoreElement = select('div');
  scoreElement.html(`Score: ${score}`);
}

function keyPressed() {
  if (keyCode === SPACE_KEY) {
    rapidash.jump();
    audio.play();
  }
}
