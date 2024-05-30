export interface CustomerModel {
  identification: string;
  name: string;
  phone?: string; 
  address?: string; 
  email?: string; 
}

export interface ShipperModel {
  name: string;
  email: string; 
  password: string; 
}
