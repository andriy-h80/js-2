
export function createProductListMarkup(products) {
    return products.map(({ images, title, price }) => 
    `<li><img src="${images[2]}" alt="${title}" ><p>${title}</p><p>Price: ${price}</p></li>`).join('');
};


export function createProductMarkup(product) {
    return `<img src="${product.images[2]}" alt="${product.title}"><p>${product.title}</p><p>Price: ${product.price}</p>`;
}
