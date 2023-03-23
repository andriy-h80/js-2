import { instance } from '../services/api';

export function getAllProducts() {
    return instance.get('products');
};

export function getProductById(id) {
    return instance.get(`products/${id}`);
};

export function productAdd(title) {
    return instance.post('products/add', {title});
};