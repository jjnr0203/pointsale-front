export interface UserDeleteModel{
    id:string
}

export interface UserFormModel{
    name:string;
    email:string;
    password:string;
    role_id:string;
}

export interface EmployeeFormModel{
    user:string;
    shop: string;
}

export interface ShipperFormModel{
    user:string;
    supplier: string;
}

export interface LoginFormModel{
    email:string;
    password: string;
}