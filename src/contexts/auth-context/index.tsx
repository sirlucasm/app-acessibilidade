import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { Alert } from 'react-native';
import { PropsWithChildren, useEffect, useState, useCallback } from 'react';
import { CreateUser, LoginUser } from 'src/@types/user.type';
import { auth, firestore } from 'src/configs/firebase';
import { doc, setDoc, } from "firebase/firestore";
import { AuthContext } from './useAuthContext';

interface AuthProviderProps extends PropsWithChildren {}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signUp = async ({ email, password, name }: CreateUser) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        await AsyncStorage.setItem('@urbe.user', JSON.stringify({ email, password }));
        await updateProfile(user, {
          displayName: name,
        });
        const docRef = doc(firestore, 'users', user.uid);
        await setDoc(docRef, { email, name });
        setCurrentUser(user);
      }
    } catch(error: any) {
      Alert.alert('Erro', error.message)
    }
  }

  const login = (params: LoginUser) => {}

  const logout = () => {}

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
        isLogged: !!currentUser,
        signUp,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
