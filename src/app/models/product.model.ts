export interface ProductModel{
    id : string;
    name : string;
    unit? : number;
    price? : number;
    cost? : number;
}

export interface CreateProductModel extends Omit<ProductModel, 'id'>{}

export interface CatalogueModel{
    name:string;
    code:number;
    description:string;
    type:string;
}