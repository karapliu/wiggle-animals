class Lion {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.mane = 0;
    this.tail = 0;

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);
    
    this.draw();
  }

  animate() {
    window.setInterval(() => {
      this.draw();

      if (this.mane === 0) {
        this.mane = 2
        this.tail = 3;
      } else {
        this.mane = 0;
        this.tail = 0;
      }
    }, 600);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // background
    // this.ctx.beginPath();
    // this.ctx.fillStyle = "#287fa1";
    // this.ctx.fillRect(0, 0, 400, 220);
    // this.ctx.fill();

    // tail
    this.ctx.beginPath();
    this.ctx.fillStyle = "#EADBBF";
    this.ctx.moveTo(320, 320);
    this.ctx.lineTo(260, 270);
    this.ctx.lineTo(275, 270);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#C69661";
    this.ctx.moveTo(320, 320);
    this.ctx.lineTo(337, 328 + this.tail);
    this.ctx.lineTo(330, 337 + this.tail);
    this.ctx.closePath();
    this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#EADBBF";
    this.ctx.roundRect(126, 120, 150, 230, 60);
    this.ctx.fill();

    // mane
    this.ctx.beginPath(); // top
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(200 + this.mane, 58, 38, 50, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // top left
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(154, 70 + this.mane, 38, 50, 2.2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // top right
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(250, 70 + this.mane, 38, 50, -2.2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // bottom
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(200 + this.mane, 180, 38, 50, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // bottom right
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(248 + this.mane, 165, 38, 50, 2.2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // right middle
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(273, 120 + this.mane, 38, 50, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // bottom left
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(146 + this.mane, 165, 38, 50, -2.2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath(); // left middle
    this.ctx.fillStyle = "#C69661";
    this.ctx.ellipse(127, 120 + this.mane, 38, 50, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // left ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6E7D0";
    this.ctx.ellipse(155, 74, 20, 26, 8.6, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(155, 74, 10, 16, 8.5, 0, 2 * Math.PI);
    this.ctx.fill();

    // right ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6E7D0";
    this.ctx.ellipse(245, 74, 20, 26, -8.6, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.ellipse(245, 74, 10, 16, -8.5, 0, 2 * Math.PI);
    this.ctx.fill();

    // face
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6E7D0";
    this.ctx.ellipse(200, 120, 70, 58, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // mouth
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.ellipse(200, 153, 40, 20, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#A89A8A";
    this.ctx.ellipse(200, 143, 9, 12, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();
    
    // left pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(179, 120, 5, 5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(221, 120, 5, 5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#D1C4B0";
    this.ctx.roundRect(138, 240, 45, 120, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#D1C4B0";
    this.ctx.ellipse(160, 364, 34, 34, Math.PI / 1, 0, Math.PI);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#D1C4B0";
    this.ctx.roundRect(218, 240, 45, 120, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#D1C4B0";
    this.ctx.ellipse(241, 364, 34, 34, Math.PI / 1, 0, Math.PI);
    this.ctx.fill();
  }
}

export default Lion;