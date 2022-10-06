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
        await setDoc(docRef, { email, name, uid: user.uid, admin: false });
        setCurrentUser(user);
      }
    } catch(error: any) {
      console.error(`[AuthContext::signUp] Não foi possível criar a conta - Erro:\n${JSON.stringify(error)}`)
      Alert.alert('Erro', error.message)
    }
  }

  const login = async ({ email, password }: LoginUser) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        await AsyncStorage.setItem('@urbe.user', JSON.stringify({ email, password }));
        setCurrentUser(user);
      }
    } catch(error: any) {
      console.error(`[AuthContext::login] Não foi possível realizar login - Erro:\n${JSON.stringify(error)}`)
      Alert.alert('Erro', error.message)
    }
  }

  const logout = async () => {
    try {
      await auth.signOut();
      await AsyncStorage.removeItem('@urbe.user');
      setCurrentUser(null);
    } catch(error: any) {
      throw new Error(`[AuthContext::logout] Não foi possível realizar logout - Erro:\n${JSON.stringify(error)}`)
    }
  }

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
