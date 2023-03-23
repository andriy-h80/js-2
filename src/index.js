import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts, getProductById } from "./requests/products";
import {
  createProductListMarkup,
  createProductMarkup,
} from "./services/markupService";

// const allProductsList = document.querySelector('#allProducts');

// getAllProducts().then(({ data: { products } }) => {
//     allProductsList.innerHTML = createProductListMarkup(products);
// })

// const productForm = document.querySelector("#singleProductForm");
// const productBox = document.querySelector("#singleProduct");

// productForm.addEventListener("submit", onProductFormSubmit);

// function onProductFormSubmit(event) {
//   event.preventDefault();

//   const idValue = event.target.elements.id.value;
  
//     getProductById(idValue).then(({ data }) => {
        
//     productBox.innerHTML = createProductMarkup(data);
//   });
// }
