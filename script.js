let pos = 0, t = 0, p = 0, tf = 50;
let L, M, P, D, G, C;
let x, y, Xf, Yf, r;
let vx, vy;
let joc = "1";

function preload() {
    L = loadImage("huevos.png");
    M = loadImage("caramessi.png");
    P = loadImage("pilota.png");
    D = loadImage("Derrota.png");
    G = loadImage("Guanyador.jpg");
    C = loadImage("Començar.png");
  }
  
function setup() {
  noCursor();
  frameRate(60);
  createCanvas(1000, 600);
  
  r = 50;
  x = 500;
  y = 550;
  Xf = random(100, 900);
  Yf = random(50, 550);
  vx = (Xf - 500) / tf;
  vy = (Yf - 550) / tf;
  
  textSize(20);
}

function draw() {
  if (joc == "1") {
    image(C, 0, 0, 1000, 600);

    if (keyIsPressed && keyCode == UP_ARROW) {
      joc = "2";
    }
  }

  if (joc == "2") {
    image(L, 0, 0, 1000, 600);
    fill(255);
    rect(75, 525, 100, 50);
    fill(0);
    text("Puntuació " + p, 75, 550);
    Messi(mouseX, mouseY);
    fill(255);
    noStroke();
    circle(x, y, r);
    x = x + vx;
    y = y + vy;
    r -= 0.8;
    image(P, x - 45, y - 45, 100, 100);
    fill(0);

    if (t == tf) {
      if (
        (x > mouseX + 75 && x < mouseX + 225 && y > mouseY - 15 && y < mouseY + 135) ||
        (x > mouseX - 225 && x < mouseX - 75 && y > mouseY - 15 && y < mouseY + 135)
      ) {
        p++;
        r = 100;
        x = 500;
        y = 550;
        Xf = random(100, 900);
        Yf = random(50, 550);
        vx = (Xf - 500) / tf;
        vy = (Yf - 550) / tf;
        tf -= 4;
        t = 0;
      } else {
        image(D, 0, 0, 1000, 600);
      }
    }

    t++;
    console.log(t + " " + tf);
    text(t + " " + tf, 75, 570);

    if (p >= 10) {
      background(255);
      image(G, 0, 0, 1000, 600);
      t = 0;
    }

    if (t > tf) {
      background(0);
      image(D, 0, 0, 1000, 600);
      delay(1000);
    }
  }
}
function Messi(x, y) {
    stroke(255, 204, 153);
    strokeWeight(25);
    line(x - 30, y + 250, x - 30, y + 325);
    line(x + 30, y + 250, x + 30, y + 325);
    noStroke();
    fill(255, 204, 153);
    rect(x - 20, y + 35, 40, 25); 
    fill(255, 0, 0);
    rect(x - 55, y + 50, 110, 150); 
    fill(0, 75, 153);
    rect(x - 30, y + 50, 62, 75); 
    rect(x - 55, y + 200, 45, 70); 
    rect(x + 10, y + 200, 45, 70); 
    ellipse(x - 70, y + 60, 50, 50);
    ellipse(x + 70, y + 60, 50, 50);
    stroke(0);
    strokeWeight(10);
    point(x + 10, y - 15);
    point(x - 10, y - 15);
    line(x - 15, y + 10, x + 15, y + 10);
    stroke(255, 204, 153);
    strokeWeight(25);
    line(x + 70, y + 60, x + 110, y + 110); 
    line(x + 110, y + 110, x + 150, y + 60); 
    line(x - 70, y + 60, x - 110, y + 110); 
    line(x - 110, y + 110, x - 150, y + 60); 
    noStroke();
    fill(29, 25, 175);
    ellipse(x + 150, y + 60, 75, 75); 
    ellipse(x - 150, y + 60, 75, 75); 
    rect(x - 70, y + 325, 60, 40); 
    rect(x + 10, y + 325, 60, 40); 
    stroke(255, 255, 0);
    strokeWeight(10);
    line(x - 25, y + 90, x - 15, y + 65); 
    line(x - 15, y + 65, x - 15, y + 120); 
    noFill();
    ellipse(x + 15, y + 95, 25, 55); 
    image(M, x - 75, y - 75, 160, 160);
    }

