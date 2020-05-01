import './styles/index.scss';
import Penguin from './scripts/penguin';
import Monkey from './scripts/monkey';
import Hippo from './scripts/hippo';
import Lion from './scripts/lion';
import Koba from './scripts/koba';
import Pickle from './scripts/pickle';
import Cow from './scripts/cow';
import Shark from './scripts/shark';

document.addEventListener('DOMContentLoaded', () => {
  // To create rounded rectangles
  // Taken from https://stackoverflow.com/a/7838871
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  }

  // To create rounded polygons 
  // Taken from https://stackoverflow.com/a/44856925
  CanvasRenderingContext2D.prototype.roundPoly = function (points, radiusAll) {
    var i, x, y, len, p1, p2, p3, v1, v2, sinA, sinA90, radDirection, drawDirection, angle, halfAngle, cRadius, lenOut, radius;
    // convert 2 points into vector form, polar form, and normalised 
    var asVec = function (p, pp, v) {
      v.x = pp.x - p.x;
      v.y = pp.y - p.y;
      v.len = Math.sqrt(v.x * v.x + v.y * v.y);
      v.nx = v.x / v.len;
      v.ny = v.y / v.len;
      v.ang = Math.atan2(v.ny, v.nx);
    }
    radius = radiusAll;
    v1 = {};
    v2 = {};
    len = points.length;
    p1 = points[len - 1];
    // for each point
    for (i = 0; i < len; i++) {
      p2 = points[(i) % len];
      p3 = points[(i + 1) % len];
      //-----------------------------------------
      // Part 1
      asVec(p2, p1, v1);
      asVec(p2, p3, v2);
      sinA = v1.nx * v2.ny - v1.ny * v2.nx;
      sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny;
      angle = Math.asin(sinA);
      //-----------------------------------------
      radDirection = 1;
      drawDirection = false;
      if (sinA90 < 0) {
        if (angle < 0) {
          angle = Math.PI + angle;
        } else {
          angle = Math.PI - angle;
          radDirection = -1;
          drawDirection = true;
        }
      } else {
        if (angle > 0) {
          radDirection = -1;
          drawDirection = true;
        }
      }
      if (p2.radius !== undefined) {
        radius = p2.radius;
      } else {
        radius = radiusAll;
      }
      //-----------------------------------------
      // Part 2
      halfAngle = angle / 2;
      //-----------------------------------------

      //-----------------------------------------
      // Part 3
      lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle));
      //-----------------------------------------

      //-----------------------------------------
      // Special part A
      if (lenOut > Math.min(v1.len / 2, v2.len / 2)) {
        lenOut = Math.min(v1.len / 2, v2.len / 2);
        cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
      } else {
        cRadius = radius;
      }
      //-----------------------------------------
      // Part 4
      x = p2.x + v2.nx * lenOut;
      y = p2.y + v2.ny * lenOut;
      //-----------------------------------------
      // Part 5
      x += -v2.ny * cRadius * radDirection;
      y += v2.nx * cRadius * radDirection;
      //-----------------------------------------
      // Part 6
      this.arc(x, y, cRadius, v1.ang + Math.PI / 2 * radDirection, v2.ang - Math.PI / 2 * radDirection, drawDirection);
      //-----------------------------------------
      p1 = p2;
      p2 = p3;
    }
    this.closePath();
  }

  function addModal(mod, bt, close) {
    let modal = document.getElementById(mod);
    let btn = document.getElementById(bt);
    let span = document.getElementById(close);

    btn.onclick = () => {
      modal.style.display = "block";
    }

    span.onclick = () => {
      modal.style.display = "none";
    }
  }

  const kobaCanvas = document.getElementById('koba');
  const kobaCtx = kobaCanvas.getContext('2d');
  const koba = new Koba(kobaCanvas, kobaCtx);
  const kobaUrl = kobaCtx.canvas.toDataURL();
  document.getElementById('kobaImg').src = kobaUrl;
  koba.animate();
  addModal('kobaModal', 'kobaBtn', 'closeKoba');

  const penguinCanvas = document.getElementById('penguin');
  const penguinCtx = penguinCanvas.getContext('2d');
  const penguin = new Penguin(penguinCanvas, penguinCtx);
  const penguinUrl = penguinCtx.canvas.toDataURL();
  document.getElementById('penguinImg').src = penguinUrl;
  penguin.animate();
  addModal('penguinModal', 'penguinBtn', 'closePenguin');

  penguinCanvas.addEventListener("mouseover", () => {
    penguin.hover = true;
  });

  penguinCanvas.addEventListener("mouseout", () => {
    penguin.hover = false;
    penguin.animate();
  });

  const monkeyCanvas = document.getElementById('monkey');
  const monkeyCtx = monkeyCanvas.getContext('2d');
  const monkey = new Monkey(monkeyCanvas, monkeyCtx);
  const monkeyUrl = monkeyCtx.canvas.toDataURL();
  document.getElementById('monkeyImg').src = monkeyUrl;
  monkey.animate();
  addModal('monkeyModal', 'monkeyBtn', 'closeMonkey');

  const hippoCanvas = document.getElementById('hippo');
  const hippoCtx = hippoCanvas.getContext('2d');
  const hippo = new Hippo(hippoCanvas, hippoCtx);
  const hippoUrl = hippoCtx.canvas.toDataURL();
  document.getElementById('hippoImg').src = hippoUrl;
  hippo.animate();
  addModal('hippoModal', 'hippoBtn', 'closeHippo');

  const lionCanvas = document.getElementById('lion');
  const lionCtx = lionCanvas.getContext('2d');
  const lion = new Lion(lionCanvas, lionCtx);
  const lionUrl = lionCtx.canvas.toDataURL();
  document.getElementById('lionImg').src = lionUrl;
  lion.animate();
  addModal('lionModal', 'lionBtn', 'closeLion');

  const pickleCanvas = document.getElementById('pickle');
  const pickleCtx = pickleCanvas.getContext('2d');
  const pickle = new Pickle(pickleCanvas, pickleCtx);
  const pickleUrl = pickleCtx.canvas.toDataURL();
  document.getElementById('pickleImg').src = pickleUrl;
  pickle.animate();
  addModal('pickleModal', 'pickleBtn', 'closePickle');

  const cowCanvas = document.getElementById('cow');
  const cowCtx = cowCanvas.getContext('2d');
  const cow = new Cow(cowCanvas, cowCtx);
  const cowUrl = cowCtx.canvas.toDataURL();
  document.getElementById('cowImg').src = cowUrl;
  cow.animate();
  addModal('cowModal', 'cowBtn', 'closeCow');

  const sharkCanvas = document.getElementById('shark');
  const sharkCtx = sharkCanvas.getContext('2d');
  const shark = new Shark(sharkCanvas, sharkCtx);
  shark.animate();

  sharkCanvas.addEventListener("mouseover", () => {
    shark.pause = true;
  });

  sharkCanvas.addEventListener("mouseout", () => {
    shark.pause = false;
    shark.animate();
  });

  const kobaModal = document.getElementById('kobaModal');
  const penguinModal = document.getElementById('penguinModal');
  const monkeyModal = document.getElementById('monkeyModal');
  const hippoModal = document.getElementById('hippoModal');
  const lionModal = document.getElementById('lionModal');
  const pickleModal = document.getElementById('pickleModal');
  const cowModal = document.getElementById('cowModal');

  window.onclick = (e) => {
    switch (e.target) {
      case kobaModal: 
        kobaModal.style.display = "none";
      case penguinModal:
        penguinModal.style.display = "none";
      case monkeyModal:
        monkeyModal.style.display = "none";
      case hippoModal:
        hippoModal.style.display = "none";
      case lionModal:
        lionModal.style.display = "none";
      case pickleModal:
        pickleModal.style.display = "none";
      case cowModal:
        cowModal.style.display = "none";
    }
  }

  if (navigator.platform.indexOf('Win') != -1) {
    window.document.getElementById("title").setAttribute("class", "windows");
  } else if (navigator.platform.indexOf('Mac') != -1) {
    window.document.getElementById("title").setAttribute("class", "mac");
  }
});