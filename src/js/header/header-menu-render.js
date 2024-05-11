import { products } from '../../product-list/products';

const dropdownMobMenu = document.getElementById('product-list-mob-js');
const dropdownMenu = document.getElementById('product-list-js');
const uniqueCategories = [];

function makeTemplateSidebar(product) {
	const categorie = document.createElement('li');
  categorie.classList.add('list-mob-item');
	categorie.setAttribute('data-id', `${product.id}`);
	const categorieLink = document.createElement('a');
	categorieLink.classList.add('list-mob-item-link');
	categorieLink.setAttribute('data-categorie', `${product.categorie}`);
	categorie.appendChild(categorieLink);
  categorieLink.textContent = product.categorie;
  return categorie;
}

products.forEach(product => {
  if (!uniqueCategories.includes(product.categorie)) {
    uniqueCategories.push(product.categorie);
    const productCategorie = makeTemplateSidebar(product);
    dropdownMobMenu.appendChild(productCategorie.cloneNode(true));
    dropdownMenu.appendChild(productCategorie);
  }
});