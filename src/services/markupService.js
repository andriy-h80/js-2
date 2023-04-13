export function createProductListMarkup(products) {
  return products
    .map(
      ({ images, title, price }) =>
        `<li><img src="${images[2]}" alt="${title}" ><p>${title}</p><p>Price: ${price}</p></li>`
    )
    .join("");
}

export function createProductMarkup(product) {
  return `<img src="${product.images[2]}" alt="${product.title}"><p>${product.title}</p><p>Price: ${product.price}</p>`;
}

export function createNewProductMarkup(product) {
  return `<h2>Ви додали новий продукт: ${product.title}</h2>`;
}

export function createAllUsersMarkup(users) {
  return users
    .map(
      ({ firstName, age, gender }) => `<li>
  <p>${firstName}</p>
  <p>${gender}</p>
  <p>${age}</p>
</li>`
    )
    .join("");
}

export function createPostsMarkup(posts) {
  return posts
    .map(
      ({ title, id, tags }) => `<li>
  <p>${title}</p>
  <p>${id}</p>
  <p>${tags}</p>
</li>`
    )
    .join("");
}

export function createSingleUserMarkup({
  firstName,
  lastName,
  email,
  password,
}) {
  return `<li>
  <p>${firstName}</p>
  <p>${lastName}</p>
  <p>${email}</p>
  <p>${password}</p>
</li>`;
}
