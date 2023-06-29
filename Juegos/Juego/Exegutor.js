class Exeggutor {
  constructor(img) {
    this.img = img;
    this.s = 70;
    this.x = width;
    this.y = height - this.s;
    this.SPEED = 8;
  }

  draw() {

    image(this.img, this.x, this.y, this.s, this.s);
  }

  noOverlap(exeggutors) {
    const safeDistance = this.s * 3;
    for (let exeggutor of exeggutors) {
      if (dist(this.x, this.y, exeggutor.x, exeggutor.y) < safeDistance) {
        return false;
      }
    }
    return true;
  }
  move() {
    this.x -= this.SPEED;
  }

  isOffScreen() {
    return this.x + this.s < 0;
  }
}
