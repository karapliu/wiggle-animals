class Pickle {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.nostril = 2.5;
    this.leftFoot = 2;
    this.rightFoot = 2;
    this.arm = 2;

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);

    this.draw();
  }

  animate() {
    window.setInterval(() => {
      this.draw();
      if (this.nostril === 2.5) {
        this.nostril = 3.5;
        this.arm = 2.1;
        this.leftFoot = 2.4;
        this.rightFoot = -2.4;
      } else {
        this.nostril = 2.5;
        this.arm = 2;
        this.leftFoot = 2;
        this.rightFoot = 2;
      }
    }, 600);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // background
    // this.ctx.beginPath();
    // this.ctx.fillStyle = "lightblue";
    // this.ctx.fillRect(0, 0, 250, 150);
    // this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6DCCB";
    this.ctx.ellipse(85, 215, 6, 15, Math.PI / this.leftFoot, 0, 2 * Math.PI);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6DCCB";
    this.ctx.ellipse(165, 215, 6, 15, Math.PI / this.rightFoot, 0, 2 * Math.PI);
    this.ctx.fill();

    // left ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2D2C29";
    this.ctx.ellipse(75, 62, 16, 32, 2.3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#DCB7A8";
    this.ctx.ellipse(79, 64, 11, 28, 2.3, 0, 2 * Math.PI);
    this.ctx.fill();

    // right ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2D2C29";
    this.ctx.ellipse(175, 62, 16, 32, -2.3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#DCB7A8";
    this.ctx.ellipse(171, 64, 11, 28, -2.3, 0, 2 * Math.PI);
    this.ctx.fill();

    // head
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2D2C29";
    this.ctx.ellipse(125, 118, 65, 80, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();
    
    // body
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2D2C29";
    this.ctx.roundRect(60, 80, 130, 140, 50);
    this.ctx.fill();

    // face (white part)
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.moveTo(125, 38);
    this.ctx.lineTo(60, 112);
    this.ctx.lineTo(190, 112);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.ellipse(125, 112, 65, 30, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();

    // face (brown part)
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C49F69";
    this.ctx.moveTo(125, 38);
    this.ctx.lineTo(60, 112);
    this.ctx.lineTo(125, 112);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#C49F69";
    this.ctx.ellipse(92.5, 112, 32.5, 23, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();

    // nose
    this.ctx.beginPath();
    this.ctx.fillStyle = "#DCB7A8";
    this.ctx.ellipse(125, 106, 12, 15, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();
    
    // left nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ab8f84";
    this.ctx.ellipse(119, 115, 1.5, this.nostril, 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // right nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ab8f84";
    this.ctx.ellipse(131, 115, 1.5, this.nostril, -2, 0, 2 * Math.PI);
    this.ctx.fill();

    // stomach
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.roundRect(90, 150, 70, 50, 23);
    this.ctx.fill();

    // left arm
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6DCCB";
    this.ctx.ellipse(85.5, 165, 5.5, 20, Math.PI * this.arm, 0, Math.PI);
    this.ctx.fill();

    // right arm
    this.ctx.beginPath();
    this.ctx.fillStyle = "#F6DCCB";
    this.ctx.ellipse(164.5, 165, 5.5, 20, Math.PI * this.arm, 0, Math.PI);
    this.ctx.fill();

    // left eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(96, 76, 5, 8, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(93, 74, 1.5, 2.5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // right eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(154, 76, 5, 8, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(156, 74, 1.5, 2.5, Math.PI / 1, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

export default Pickle;