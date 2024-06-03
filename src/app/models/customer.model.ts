export interface CustomerModel {
  id:string;
  identification: string;
  name: string;
  phone?: string; 
  address?: string; 
  email?: string; 
}
export interface CreateCustomerModel extends Omit<CustomerModel, 'id'> {}


export interface ShipperModel {
  name: string;
  email: string; 
  password: string; 
}
