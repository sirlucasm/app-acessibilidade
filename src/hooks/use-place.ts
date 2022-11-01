import { useCallback, useEffect, useState } from "react";
import { Place } from "src/@types/place.type";
import { firestore } from "src/configs/firebase";
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";

export const usePlace = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  const placesCollection = collection(firestore, 'places');
  const placesRef = query(placesCollection);

  const searchOnChange = useCallback(async (title: string) => {
    const placeData: any[] = [];
    const q = query(placesCollection, orderBy('title'), where('title', '>=', title), where('title', '<=', title+'\uf8ff'));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) querySnapshot.forEach(place => placeData.push(place.data()));

    setPlaces(placeData);
  }, []);

  useEffect(() => {
    const placeUnsub = onSnapshot(placesRef, (data) => {
      const placeData: any[] = [];

      if (!data.empty) data.forEach(place => placeData.push(place.data()));
      setPlaces(placeData)
    });
    return () => {
      placeUnsub();
    }
  }, [])

  return { places, searchOnChange };
}
