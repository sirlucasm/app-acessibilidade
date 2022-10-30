import { collection, query, where, orderBy, getDoc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "src/configs/firebase";
import useAuthContext from "src/contexts/auth-context/use-auth-context";

export const useUser = () => {
  const [user, setUser] = useState<any>();
  const [deficiency, setDeficiency] = useState<any>();
  const { currentUser } = useAuthContext();

  const uid = currentUser?.uid || '';

  const deficienciesCollection = collection(firestore, 'deficiencies');
  const deficienciesRef = query(deficienciesCollection, where('userId', '==', uid));
  const userCollection = collection(firestore, 'users');
  const userRef = query(userCollection, where('uid', '==', uid));

  useEffect(() => {
    const userUnsub = onSnapshot(userRef, (data) => {
      const userData: any[] = [];

      if (!data.empty) data.forEach(user => userData.push(user.data()));
      setUser(userData[0])
    });
    const deficienciesUnsub = onSnapshot(deficienciesRef, (data) => {
      const deficienyData: any[] = [];

      if (!data.empty) data.forEach(user => deficienyData.push(user.data()));
      setUser((prev: any) => ({ ...prev, deficiency: deficienyData[0] }));
      setDeficiency(deficienyData[0]);
    });

    return () => {
      deficienciesUnsub();
      userUnsub();
    }
  }, [])

  return { user, deficiency }
}
