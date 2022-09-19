import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { createContext, PropsWithChildren, useEffect, useState, useCallback } from 'react';
import { auth } from 'src/configs/firebase';

type AuthContextParams = {
  currentUser: User | null;
  isLogged: boolean;
};

interface AuthProviderProps extends PropsWithChildren {}

const AuthContext = createContext({} as AuthContextParams);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const fetchCurrentUser = useCallback(async () => {
    const user = auth.currentUser;
    const storedInfo = await AsyncStorage.getItem('@urbe.user');
    if (storedInfo) {
      const storedUser = JSON.parse(storedInfo);
      await signInWithEmailAndPassword(auth, storedUser.email, storedUser.password);
    }
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLogged: !!currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
