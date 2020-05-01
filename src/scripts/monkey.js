class Monkey {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.arm = 4;
    this.foot = 0;

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);

    this.draw();
  }

  animate() {
    window.setInterval(() => {
      this.draw();

      if (this.foot === 0) {
        this.foot = 1;
        this.arm = 4.2;
      } else {
        this.foot = 0;
        this.arm = 4;
      }
    }, 600);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // background
    // this.ctx.beginPath();
    // this.ctx.fillStyle = "#93ad78";
    // this.ctx.fillRect(0, 0, 300, 170);
    // this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#694a19";
    this.ctx.ellipse(150, 190, 88, 77, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#694a19";
    this.ctx.ellipse(74, 70, 30, 35, -9, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#d9bf96";
    this.ctx.ellipse(74, 70, 20, 25, -9, 0, 2 * Math.PI);
    this.ctx.fill();

    // right ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#694a19";
    this.ctx.ellipse(228, 70, 30, 35, 9, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#d9bf96";
    this.ctx.ellipse(228, 70, 20, 25, 9, 0, 2 * Math.PI);
    this.ctx.fill();

    // head
    this.ctx.beginPath();
    this.ctx.fillStyle = "#694a19";
    this.ctx.ellipse(150, 100, 80, 70, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // face
    this.ctx.beginPath();
    this.ctx.fillStyle = "#d9bf96";
    this.ctx.ellipse(140, 95, 55, 45, -2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#d9bf96";
    this.ctx.ellipse(161, 95, 55, 45, 2.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // left pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(110, 82, 7, 7, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(192, 82, 7, 7, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();
    
    //nose
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(150, 90, 6, 6, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#d9bf96";
    this.ctx.ellipse(150, 95, 5.5, 5.5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // smile 
    this.ctx.beginPath();
    this.ctx.arc(150, 70, 37, 0.3 *  Math.PI , 0.7 * Math.PI);
    this.ctx.stroke();

    // stomach
    this.ctx.beginPath();
    this.ctx.fillStyle = "#d9bf96";
    this.ctx.ellipse(150, 200, 60, 50, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left arm
    this.ctx.beginPath();
    this.ctx.fillStyle = "#4f3711";
    this.ctx.ellipse(94, 170, 28, 18, this.arm, 0, 2 * Math.PI);
    this.ctx.fill();

    // right arm
    this.ctx.beginPath();
    this.ctx.fillStyle = "#4f3711";
    this.ctx.ellipse(205, 170, 28, 18, -this.arm, 0, 2 * Math.PI);
    this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#4f3711";
    this.ctx.ellipse(102, 238, 25, 26, this.foot, 0, 2 * Math.PI);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#4f3711";
    this.ctx.ellipse(197, 238, 25, 26, -this.foot, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

export default Monkey;