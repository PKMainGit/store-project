import { products } from '../../product-list/products';
import { closeMenu } from'../header/header-main'

const heroList = document.getElementById('hero-list-js');
const sidebar = document.getElementById('sidebar-js');
const dropdownMobMenu = document.getElementById('product-list-mob-js');
const dropdownMenu = document.getElementById('product-list-js');
let categorie;
let title = document.getElementById('hero-title-js');

title.textContent = 'Produkty';

function makeTemplateHero(product) {
  return `
		<div class="item-box">
			<h3 class="product-title">${product.name}</h3>
			<img class="product-img" src="${product.image}" alt="">
			<form class="product-form">
				<div class="select-box">
					<select class="product-quantity" name="" id="">
						<option class="quantity-option" value="1">1</option>
						<option class="quantity-option" value="2">2</option>
						<option class="quantity-option" value="3">3</option>
					</select>
					<div class="select-arrow">
						<img class="select-arrow-img" src="../../img/sidebar/arr-prod.png" alt="">
					</div>
				</div>
				<p class="product-price">${product.price}</p>
				<button class="product-btn" type="submit">
					<img class="product-btn-img" src="../../img/hero/cart.png" alt="">
				</button>
			</form>
		</div>
	`;
}

function displayProducts(productsToDisplay) {
  heroList.innerHTML = '';
  productsToDisplay.forEach(product => {
    const productElement = document.createElement('li');
    productElement.classList.add('hero-item');
    productElement.setAttribute('data-id', `${product.id}`);
    productElement.innerHTML = makeTemplateHero(product);
    heroList.appendChild(productElement);
  });
}

displayProducts(products);

sidebar.addEventListener('click', event => {
  categorie = event.target.getAttribute('data-categorie');
  if (categorie) {
    const filteredProducts = products.filter(product => product.categorie === categorie);
    displayProducts(filteredProducts);
    title.textContent = categorie;
  }
});

dropdownMenu.addEventListener('click', event => {
  categorie = event.target.getAttribute('data-categorie');
  if (categorie) {
    const filteredProducts = products.filter(product => product.categorie === categorie);
    displayProducts(filteredProducts);
    title.textContent = categorie;
	}
	setTimeout(() => {
		closeMenu();
	}, 250)
});

dropdownMobMenu.addEventListener('click', event => {
	categorie = event.target.getAttribute('data-categorie');
  if (categorie) {
    const filteredProducts = products.filter(product => product.categorie === categorie);
    displayProducts(filteredProducts);
    title.textContent = categorie;
	}
	setTimeout(() => {
    closeMenu();
  }, 250);
});
