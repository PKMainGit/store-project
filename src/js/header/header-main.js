const menu = document.getElementById('menu-js');
const menuIcon = document.getElementById('menu-icon-js');
const closeMenuIcon = document.getElementById('close-menu-icon');
const productsMobMenu = document.getElementById('products-mob-js');
const dropdownMobMenu = document.getElementById('product-list-mob-js');
const productsMenu = document.getElementById('products-js');
const dropdownMenu = document.getElementById('product-list-js');


menuIcon.addEventListener('click', showMenu);
closeMenuIcon.addEventListener('click', closeMenu);

function showMenu() {
  menu.classList.add('show-menu');
}

function closeMenu() {
  menu.classList.remove('show-menu');
}

productsMobMenu.addEventListener('click', function () {
	dropdownMobMenu.classList.toggle('show');
	console.log('click');
  const dropdownMobMenuClass = dropdownMobMenu.getAttribute('class');
  if (dropdownMobMenuClass.includes('show')) {
    dropdownMobMenu.style.position = 'static';
  } else {
    setTimeout(() => {
      dropdownMobMenu.style.position = 'absolute';
    }, 600);
  }
});

document.addEventListener('click', function (event) {
  if (!productsMobMenu.contains(event.target)) {
    dropdownMobMenu.classList.remove('show');
    setTimeout(() => {
      dropdownMobMenu.style.position = 'absolute';
    }, 600);
  }
});

productsMenu.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show');
	console.log('click');
  const dropdownMenuClass = dropdownMenu.getAttribute('class');
  if (dropdownMenuClass.includes('show')) {
    dropdownMenu.style.position = 'static';
  } else {
    setTimeout(() => {
      dropdownMenu.style.position = 'absolute';
    }, 600);
  }
});

document.addEventListener('click', function (event) {
  if (!productsMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show');
    setTimeout(() => {
      dropdownMenu.style.position = 'absolute';
    }, 600);
  }
});

let width, height;
let step = 0;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const bg = [255, 255, 255];

// mouse coordinates
function Mouse() {
  this.x = window.innerWidth / 2;
  this.y = window.innerHeight / 2;
}
const mouse = new Mouse();
document.onmousemove = function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

document.getElementsByTagName('body')[0].appendChild(canvas);
canvas.style = 'position:fixed; top:0; left:0; pointer-events: none;';
window.addEventListener('resize', setup);
setup();

function setup() {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;
}

window.requestAnimationFrame(animate);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  step++;
  window.requestAnimationFrame(function () {
    animate();
  });
}

function Flwr() {
  this.follow = null;
  this.child = null;
  this.x = mouse.x;
  this.y = mouse.y;
  this.dx = 0;
  this.dy = 0;
  this.a = 0.35;
  this.b = 0.54;
  this.n = 0;
}

let flwr,
  flwrPrev,
  train = [],
  i,
  n = 50;
for (i = 0; i < n; i++) {
  flwr = new Flwr();
  flwr.n = i;
  if (flwrPrev) {
    flwr.b = flwrPrev.b + 0.1 / n;
    flwr.follow = flwrPrev;
    flwrPrev.child = flwr;
  } else {
    flwr.follow = mouse;
  }
  flwrPrev = flwr;
  train.push(flwr);
}

function draw() {
  for (i in train) {
    // update position
    flwr = train[i];
    const dx = flwr.follow.x - flwr.x;
    const dy = flwr.follow.y - flwr.y;

    flwr.dx = flwr.dx * flwr.a + dx * (1 - flwr.a);
    flwr.dy = flwr.dy * flwr.a + dy * (1 - flwr.a);

    flwr.x = flwr.dx * flwr.b + flwr.x;
    flwr.y = flwr.dy * flwr.b + flwr.y;

    if (flwr.follow !== mouse) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 38, 0, ${0.7 - flwr.n / n})`;
      ctx.lineCap = 'round';
      ctx.lineWidth = ((n - flwr.n) / n) * 8 + 20 - flwr.n;
      ctx.shadowColor = 'rgba(255, 106, 0, 0.5)'; // Цвет тени
      ctx.shadowBlur = 10; // Размытие тени
      ctx.shadowOffsetX = 0; // Смещение по оси X
      ctx.shadowOffsetY = 0; // Смещение по оси Y
      ctx.moveTo(flwr.x, flwr.y);
      ctx.lineTo(flwr.follow.x, flwr.follow.y);
      ctx.stroke();
    }
  }
}

function drawCircle(context, x, y, r) {
  context.arc(x, y, r, 0, 2 * Math.PI);
}

function fillCanvas(context, color, alpha) {
  context.rect(0, 0, this.width, this.height);
  context.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
  context.fill();
}
