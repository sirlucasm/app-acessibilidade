import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { CreateUser, LoginUser } from 'src/@types/user.type';

type AuthContextParams = {
  currentUser: User | null;
  isLogged: boolean;
  signUp(params: CreateUser): void
  login(params: LoginUser): void
  logout(): void
};

export const AuthContext = createContext({} as AuthContextParams);

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
