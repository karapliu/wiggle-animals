import './styles/index.scss';
import Penguin from './scripts/penguin';
import Monkey from './scripts/monkey';
import Hippo from './scripts/hippo';
import Lion from './scripts/lion';
import Koba from './scripts/koba';
import Pickle from './scripts/pickle';
import Cow from './scripts/cow';

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

  let penguin = document.getElementById('penguin');
  let penguinCtx = penguin.getContext('2d');

  new Penguin(penguin, penguinCtx);

  let monkey = document.getElementById('monkey');
  let monkeyCtx = monkey.getContext('2d');

  new Monkey(monkey, monkeyCtx);

  let hippo = document.getElementById('hippo');
  let hippoCtx = hippo.getContext('2d');

  new Hippo(hippo, hippoCtx);

  let lion = document.getElementById('lion');
  let lionCtx = lion.getContext('2d');

  new Lion(lion, lionCtx);

  let koba = document.getElementById('koba');
  let kobaCtx = koba.getContext('2d');

  new Koba(koba, kobaCtx);

  let pickle = document.getElementById('pickle');
  let pickleCtx = pickle.getContext('2d');

  new Pickle(pickle, pickleCtx);

  let cow = document.getElementById('cow');
  let cowCtx = cow.getContext('2d');

  new Cow(cow, cowCtx);

  if (navigator.platform.indexOf('Win') != -1) {
    window.document.getElementById("title").setAttribute("class", "windows");
  } else if (navigator.platform.indexOf('Mac') != -1) {
    window.document.getElementById("title").setAttribute("class", "mac");
  }
});