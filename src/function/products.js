import { products } from "../mocks/products.json"

export  function  getProduct (id){
    return  products.find((product) => product.id === id);
}

export function getAll(){
    return products
}