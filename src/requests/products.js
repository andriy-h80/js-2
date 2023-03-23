import { instance } from '../services/api';

export function getAllProducts() {
    return instance.get('products');
};
