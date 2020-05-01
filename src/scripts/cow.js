class Cow {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.nostril = 3.5;
    this.ear = 8.6;
    this.spots = 0;

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);

    this.draw();
  }

  animate() {
    window.setInterval(() => {
      this.draw();

      if (this.tail === 260) {
        this.tail = 262;
        this.ear = 8.8;
        this.spots = 2;
        this.nostril = 4.5;
      } else {
        this.tail = 260;
        this.ear = 8.6;
        this.spots = 0;
        this.nostril = 3.5;
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
    this.ctx.fillStyle = "#E9E4DB";
    this.ctx.ellipse(305, this.tail, 3, 50, 2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3d3d";
    this.ctx.ellipse(360, this.tail + 25, 3, 17, 2, 0, Math.PI);
    this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#E2DDD4";
    this.ctx.roundRect(108, 126, 190, 210, 70);
    this.ctx.fill();

    // left ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(130, 74, 20, 32, this.ear, 0, 2 * Math.PI);
    this.ctx.fill();

    // right ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#E9E4DB";
    this.ctx.ellipse(270, 74, 20, 32, -this.ear, 0, 2 * Math.PI);
    this.ctx.fill();

    // face
    this.ctx.beginPath();
    this.ctx.fillStyle = "#E9E4DB";
    this.ctx.roundRect(140, 43, 120, 130, 50);
    this.ctx.fill();

    // left eye spot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.roundRect(138, 57, 70, 65, 30);
    this.ctx.fill();

    // nose
    this.ctx.beginPath();
    this.ctx.fillStyle = "#D0ACA0";
    this.ctx.ellipse(200, 145, 30, 22, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "#69534C";
    this.ctx.ellipse(185, 145, this.nostril, 10, 2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // right nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "#69534C";
    this.ctx.ellipse(215, 145, this.nostril, 10, -2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // left pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(172, 94, 7, 7, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(228, 94, 7, 7, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left spot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(170 + this.spots, 227, 27, 27, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(150, 235 + this.spots, 27, 30, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right top spot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(250, 188 + this.spots, 27, 18, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(256 + this.spots, 200, 22, 20, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right bottom spot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(230, 300 + this.spots, 30, 18, 2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(237 + this.spots, 290, 30, 25, 2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(245, 300, 27, 23, 2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#EEEBE5";
    this.ctx.roundRect(140, 245, 30, 120, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.roundRect(140, 230, 30, 50, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(155, 362, 14, 25, Math.PI / 1, 0, Math.PI);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#EEEBE5";
    this.ctx.roundRect(230, 230, 30, 130, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#3D3D3D";
    this.ctx.ellipse(245, 362, 14, 25, Math.PI / 1, 0, Math.PI);
    this.ctx.fill();
  }
}

export default Cow;