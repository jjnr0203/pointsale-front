import {OrderDetailModel} from "./order-detail.model";

export interface OrderModel {
  paymentMethod: string;
  customer: string;
  shop: string;
  ordersDetails:OrderDetailModel[];
}
