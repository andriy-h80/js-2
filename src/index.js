import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts, getProductById, productAdd } from "./requests/products";
import {
  createProductListMarkup,
  createProductMarkup,
  createNewProductMarkup
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



// const formNewProduct = document.querySelector('#new-product');
// const newProductSection = document.querySelector('#newProductSection')

// formNewProduct.addEventListener('submit', onNewProductSubmit);

// function onNewProductSubmit(event) {
//     event.preventDefault();

//     const title = event.target.elements.title.value.trim();

//     productAdd(title).then(({ data }) => {
//         newProductSection.innerHTML = createNewProductMarkup(data);
//     })
// };

