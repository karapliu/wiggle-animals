class Penguin {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.arm = 5.5;
    this.leftFoot = 2;
    this.rightFoot = 2;

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);
    
    window.setInterval(this.animate, 600);
  }

  animate() {
    this.draw();
    if (this.arm === 5.5) {
      this.arm = 6;
      this.leftFoot = 2;
      this.rightFoot = 2;
    } else {
      this.arm = 5.5;
      this.leftFoot = 2.1;
      this.rightFoot = 1.9;
    }
  }
  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // background
    this.ctx.beginPath();
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillRect(0, 0, 300, 170);
    this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "orange";
    this.ctx.ellipse(120, 260, 8, 25, Math.PI / this.leftFoot, 0, 2 * Math.PI);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "orange";
    this.ctx.ellipse(180, 260, 8, 25, Math.PI / this.rightFoot, 0, 2 * Math.PI);
    this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2d2e2e";
    this.ctx.ellipse(150, 170, 80, 90, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // head
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2d2e2e";
    this.ctx.ellipse(150, 85, 50, 50, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left arm
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2d2e2e";
    this.ctx.ellipse(76, 149, 15, 50, Math.PI / this.arm, 0, 2 * Math.PI);
    this.ctx.fill();

    // right arm
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2d2e2e";
    this.ctx.ellipse(224, 149, 15, 50, Math.PI / -this.arm, 0, 2 * Math.PI);
    this.ctx.fill();

    // stomach
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(150, 170, 55, 90, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(132, 76, 20, 20, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(170, 76, 20, 20, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // left pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(132, 76, 5, 5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(170, 76, 5, 5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // beak
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ed9f45";
    this.ctx.moveTo(130, 85);
    this.ctx.lineTo(170, 85);
    this.ctx.lineTo(150, 100);
    this.ctx.fill();
  }
}

export default Penguin;