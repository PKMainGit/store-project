import { products } from '../../product-list/products';

const categoriesList = document.getElementById('categories-list-js');
const uniqueCategories = [];

function makeTemplateSidebar(product) {
  const categorie = document.createElement('li');
  categorie.classList.add('categories');
  categorie.setAttribute('data-categorie', `${product.categorie}`);
  categorie.textContent = product.categorie;
  return categorie;
}

products.forEach(product => {
  if (!uniqueCategories.includes(product.categorie)) {
    uniqueCategories.push(product.categorie);
    const productCategorie = makeTemplateSidebar(product);
    categoriesList.appendChild(productCategorie);
  }
});
