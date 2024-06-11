import { ShipperModel } from "./customer.model";
import { ShopModel } from "./shop.model";

export interface SupplierModel{
    name:string;
    phone:string;
    email:string;
    shipper: ShipperModel[];
    shop: ShopModel[];
}
