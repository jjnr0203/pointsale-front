export interface UserDeleteModel{
    id:string
}

export interface UserFormModel{
    name:string;
    email:string;
    password:string;
    role_id:string;
}

export interface LoginFormModel{
    email:string;
    password: string;
}