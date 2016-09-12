var canvas = document.getElementById("myCanvas");
document.getElementById("myCanvas").width = 1000;
document.getElementById("myCanvas").height = 600;

var context = canvas.getContext('2d');

class Particle {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.speed = 0.5;
        context.fillStyle = 'black';
    }

    draw() {
        context.clearRect(0, 0, 10000, 10000);
        context.beginPath();
        context.rect(this.x, this.y, 10, 10);
        context.fill();
    }

    move() {
        this.x += 0.5;
        this.y += this.speed;
        this.speed += 0.01;

    }


}


function draw() {
    requestAnimationFrame(draw);
    p.move();
    p.draw();
    console.log("hoi");
}

var p = new Particle();

draw();
