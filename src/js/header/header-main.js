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
