import { OrderDetailModel } from "./order-detail.model";

export interface OrderModel {
  paymentMethodId: string;
  customerId: string;
  orderDetails: OrderDetailModel[];
}
