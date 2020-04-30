class Hippo {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.nostril = 6;
    this.tail = 300;

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);

    window.setInterval(this.animate, 600);
  }

  animate() {
    this.draw();

    if (this.tail === 290) {
      this.tail = 300;
      this.nostril = 6;
    } else {
      this.tail = 290;
      this.nostril = 7;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // background
    this.ctx.beginPath();
    this.ctx.fillStyle = "#287fa1";
    this.ctx.fillRect(0, 0, 400, 220);
    this.ctx.fill();

    // tail
    this.ctx.beginPath();
    this.ctx.fillStyle = "#969696";
    this.ctx.moveTo(350, this.tail);
    this.ctx.lineTo(305, 250);
    this.ctx.lineTo(280, 270);
    this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#b0b0b0";
    this.ctx.roundRect(85, 120, 230, 230, 100);
    this.ctx.fill();

    // left ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(155, 50, 10, 20, 8.5, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffdede";
    this.ctx.ellipse(155, 50, 6, 12, 8.5, 0, 2 * Math.PI);
    this.ctx.fill();

    // right ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(245, 50, 10, 20, -8.5, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffdede";
    this.ctx.ellipse(245, 50, 6, 12, -8.5, 0, 2 * Math.PI);
    this.ctx.fill();

    // head
    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(200, 100, 63, 63, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(200, 160, 80, 70, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(175, 82, 5, 5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(225, 82, 5, 5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.ellipse(160, 174, this.nostril, 18, 5.9, 0, 2 * Math.PI);
    this.ctx.fill();

    // right nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.ellipse(240, 174, this.nostril, 18, -5.9, 0, 2 * Math.PI);
    this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#969696";
    this.ctx.roundRect(110, 300, 65, 60, 19);
    this.ctx.fill();

    // left toes
    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(132, 360, 5, 7, Math.PI, 0, Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(142, 360, 5, 7, Math.PI, 0, Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(152, 360, 5, 7, Math.PI, 0, Math.PI);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#969696";
    this.ctx.roundRect(225, 300, 65, 60, 19);
    this.ctx.fill();

    // right toes
    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(247, 360, 5, 7, Math.PI, 0, Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(257, 360, 5, 7, Math.PI, 0, Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#bfbfbf";
    this.ctx.ellipse(267, 360, 5, 7, Math.PI, 0, Math.PI);
    this.ctx.fill();
  }
}

export default Hippo;