import { ProductoType } from '../types/ProductoType';


export async function GetProductsAll(){
    const res = await fetch('https://fakestoreapi.com/products')
    const productos: ProductoType[] = await res.json();
    return productos;
}

export async function GetProductById(id: string){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const producto: ProductoType = await res.json();
    return producto;
}