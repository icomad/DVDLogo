const config = {
  bg: null,
  nextBg: null,
  amt: 0,
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  width: window.innerWidth,
  height: window.innerHeight,
  dx: 4,
  dy: 4,
}

let dvdImg;
let imgWidth;
let imgHeight;

function preload() {
  dvdImg = loadImage('./dvdlogo.svg');
}

function setup() {
  createCanvas(config.width, config.height);
  imgWidth = dvdImg.width / 1.3;
  imgHeight = dvdImg.height / 1.3;
  config.x = random(imgWidth, config.width - imgWidth);
  config.y = random(0, config.height - imgHeight);
  config.bg = pickColor();
  config.nextBg = pickColor();
  colorMode(HSB, 150);
  background(config.bg);
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);

  return color(r, g, b);
}

function draw() {
  background(lerpColor(config.bg, config.nextBg, config.amt));
  config.amt += 0.01;
  image(dvdImg, config.x, config.y, imgWidth, imgHeight);

  if (config.amt >= 2) {
    config.amt = 0.0;
    config.bg = config.nextBg;
    config.nextBg = pickColor();
  }

  config.x += config.dx;
  config.y += config.dy;

  if (config.x >= config.width - imgWidth || config.x <= 0) {
    config.dx = -config.dx;
  }
  if (config.y >= config.height - imgHeight || config.y <= 0) {
    config.dy = -config.dy;
  }
}