import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { createProductListMarkup } from './services/markupService';

const allProductsList = document.querySelector('#allProducts');

getAllProducts().then(({ data: { products } }) => {
    allProductsList.innerHTML = createProductListMarkup(products);
})