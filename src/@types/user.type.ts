export interface User {
  name: string;
  email: string;
  password: string;
}

export interface CreateUser extends User { }

export interface LoginUser {
  email: string;
  password: string;
}
