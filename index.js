const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGTH = canvas.height = 600;

const playerImage = new Image()
playerImage.src = './images/shadow_dog.png';
let x = 0

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    ctx.fillRect(50,50,100,100);
    requestAnimationFrame(animate);
};
animate()
