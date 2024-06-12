import { ProductModel } from "./product.model";

export interface ShopModel{
    name:string;
    ruc:string;
    address?: string;
    phone?: string;
    email?:string;
    products: ProductModel[]
}

export interface CreateShopModel extends Omit<ShopModel, 'id'>{}

export interface UserModel{
    name: string;
    email:string;
    password:string;
}