import "./styles/normalize.css";
import "./styles/index.css";
import {
  getAllProducts,
  getProductById,
  productAdd,
} from "./requests/products";
import {
  createProductListMarkup,
  createProductMarkup,
  createNewProductMarkup,
  createAllUsersMarkup,
  createPostsMarkup,
  createSingleUserMarkup,
} from "./services/markupService";
import {
  getAllUsers,
  getUserByName,
  getUserByID,
  getPostsByUserId,
  addNewUser,
} from "./requests/users";

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
// const allUsersEl = document.querySelector("#allUsers");
// getAllUsers().then(({ users }) => {
//   const markup = createAllUsersMarkup(users);
//   allUsersEl.innerHTML = markup;
// });

const userByNameFormEl = document.querySelector("#userByNameForm");
const usersByNameEl = document.querySelector("#usersByName");
userByNameFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const firstName = event.target.elements.name.value;
  getUserByName(firstName).then(({ users }) => {
    const markup = createAllUsersMarkup(users);
    usersByNameEl.innerHTML = markup;
  });
}

const getCartsFormEl = document.querySelector("#userCartsForm");
getCartsFormEl.addEventListener("submit", onFormSearch);

function onFormSearch(event) {
  event.preventDefault();
  const userId = event.target.elements.userId.value;
  getUserByID(userId).then(({ users }) => {
    const markup = createAllUsersMarkup(users);
    getCartsFormEl.innerHTML = markup;
  });
}

const userPostsFormEl = document.querySelector("#userPostsForm");
userPostsFormEl.addEventListener("submit", onFormPostsSearch);

function onFormPostsSearch(event) {
  event.preventDefault();
  const userId = event.target.elements.userId.value;
  getPostsByUserId(userId).then(({ posts }) => {
    const markup = createPostsMarkup(posts);
    userPostsFormEl.innerHTML = markup;
  });
}

const newUserFormEl = document.querySelector("#newUserForm");
const newUserSectionEl = document.querySelector("#newUserSection");
newUserFormEl.addEventListener("submit", onNewUserFormSubmit);

function onNewUserFormSubmit(event) {
  event.preventDefault();
  const firstName = event.target.elements.firstName.value;
  const lastName = event.target.elements.lastName.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  addNewUser({ firstName, lastName, email, password }).then((newUser) => {
    console.log(newUser);
    const markup = createSingleUserMarkup(newUser);
    newUserSectionEl.innerHTML = markup;
  });
}
