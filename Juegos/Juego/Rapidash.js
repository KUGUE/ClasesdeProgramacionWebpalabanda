class Rapidash {
  constructor(img) {
    this.img = img;
    this.x = 0;
    this.s = 100;
    this.y = height - this.s;
    this.vy = 0;
    this.gravity = 2;
  }
  draw() {
    noFill();
    image(this.img, this.x, this.y, this.s, this.s);
  }
  jump() {
    if (this.y === height - this.s) {
      this.vy = -35;
    }
  }

  update() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.s);
  }

  rectCollision(exeggutor) {
    let left = this.x;
    let right = this.x + this.s;
    let top = this.y;
    let bottom = this.y + this.s;

    let eLeft = exeggutor.x;
    let eRight = exeggutor.x + exeggutor.s;
    let eTop = exeggutor.y;
    let eBottom = exeggutor.y + exeggutor.s;

    return right >= eLeft && left <= eRight && top <= eBottom && bottom >= eTop;
  }

  circleCollision(exeggutor) {
    let x1 = this.x + this.s / 2;
    let y1 = this.y + this.s / 2;

    let x2 = exeggutor.x + exeggutor.s / 2;
    let y2 = exeggutor.y + exeggutor.s / 2;

    return this.s / 2 + exeggutor.s / 2 >= this.distance(x1, y1, x2, y2);
  }

  distance(x1, y1, x2, y2) {
    const dx = abs(x2 - x1);
    const dy = abs(y2 - y1);
    return sqrt(pow(dx, 2) + pow(dy, 2));
  }
}
