export interface User {
  uid: string;
  name: string;
  email: string;
  password: string;
  deficiency: {
    data: any[],
    reducedMobility: boolean,
    userId: string;
  },
  admin: boolean;
}

export interface CreateUser extends User { }

export interface LoginUser {
  email: string;
  password: string;
}
