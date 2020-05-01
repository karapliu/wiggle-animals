class Koba {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.tongue = 20;
    this.tail = 286;
    this.leftEar = 125;
    this.rightEar = 276;

    this.hover = false;

    this.animate = this.animate.bind(this);

    this.draw();
  }

  animate() {
    window.setInterval(() => {
      this.draw();

      if (this.tongue === 20) {
        this.tongue = 13;
        this.tail = 289;
        this.leftEar = 120;
        this.rightEar = 280;
      } else {
        this.tongue = 20;
        this.tail = 286;
        this.leftEar = 125;
        this.rightEar = 276;
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
    this.ctx.fillStyle = "#39342E";
    this.ctx.ellipse(this.tail, 290, 29, 32, 2.4, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#C5A57D";
    this.ctx.ellipse(this.tail + 2, 287, 13, 16, 1, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.ellipse(this.tail + 1, 286, 7, 10, 1, 0, 2 * Math.PI);
    this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#39342E";
    this.ctx.roundRect(116, 156, 170, 200, 75);
    this.ctx.fill();

    // belly
    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.roundRect(138, 215, 127, 98, 45);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.ellipse(174, 298, 18, 49, 2.4, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.ellipse(229, 298, 18, 49, -2.4, 0, 2 * Math.PI);
    this.ctx.fill();

    // left ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C5A57C";
    this.ctx.moveTo(this.leftEar, 30);
    this.ctx.lineTo(190, 85);
    this.ctx.lineTo(132, 120);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#f2c7c4";
    this.ctx.moveTo(this.leftEar + 9, 46);
    this.ctx.lineTo(188, 85);
    this.ctx.lineTo(134, 120);
    this.ctx.closePath();
    this.ctx.fill();

    // right ear
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C5A57C";
    this.ctx.moveTo(this.rightEar, 30);
    this.ctx.lineTo(211, 85);
    this.ctx.lineTo(269, 120);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#f2c7c4";
    this.ctx.moveTo(this.rightEar - 9, 46);
    this.ctx.lineTo(220, 85);
    this.ctx.lineTo(267, 120);  
    this.ctx.closePath();  
    this.ctx.fill();

    // head top
    this.ctx.beginPath();
    this.ctx.fillStyle = "#39342E";
    this.ctx.roundRect(130, 53, 140, 118, 70);
    this.ctx.fill();

    // left eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C5A57D";
    this.ctx.ellipse(163.5, 113, 24, 37, 3.65, 0, 2 * Math.PI);
    this.ctx.fill();

    // left brow 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#DAB88E";
    this.ctx.ellipse(170, 100, 3, 10, 1.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // left pupil 
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(169, 111, 6, 9, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // right eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C5A57D";
    this.ctx.ellipse(236.5, 113, 24, 37, -3.65, 0, 2 * Math.PI);
    this.ctx.fill();

    // right brow 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#DAB88E";
    this.ctx.ellipse(230, 100, 3, 10, -1.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // right pupil 
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(230, 111, 6, 9, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // left mouth
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.ellipse(168, 153, 17, 52, 2.38, 0, 2 * Math.PI);
    this.ctx.fill();

    // middle mouth 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.ellipse(200, 156, 24, 40, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // right mouth
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f1f1f1";
    this.ctx.ellipse(232, 153, 17, 52, -2.38, 0, 2 * Math.PI);
    this.ctx.fill();

    // snout
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000000";
    this.ctx.ellipse(200, 136, 9, 12, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();

    // mouth
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000000";
    this.ctx.ellipse(200, 155, 15, 15, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();

    // tongue
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f2c7c4";
    this.ctx.ellipse(200, 159, 9, this.tongue, Math.PI * 2, 0, Math.PI);
    this.ctx.fill();

    // left foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.roundRect(147, 243, 30, 120, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.roundRect(147, 300, 30, 80, 15);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.roundRect(140, 360, 43, 27, 9);
    this.ctx.fill();

    // right foot
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.roundRect(226, 243, 30, 120, 40);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.roundRect(226, 300, 30, 80, 15);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#E7D4B8";
    this.ctx.roundRect(219, 360, 43, 27, 9);
    this.ctx.fill();
  }
}

export default Koba;