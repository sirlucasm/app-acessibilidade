import { useCallback, useEffect, useState } from "react";
import { Place } from "src/@types/place.type";
import { firestore } from "src/configs/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export const usePlace = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);

  const placesCollection = collection(firestore, 'places');
  const placesRef = query(placesCollection);

  const searchOnChange = useCallback(async (search: string) => {
    let placeData: any[] = [];

    if (search.length === 0) {
      setPlaces(loadedPlaces);
      return;
    }

    placeData = places.filter((place) => (
      (place.title.toLowerCase().includes(search.toLowerCase()) ||
      (place.locality.toLowerCase().includes(search.toLowerCase())) ||
      (place.accessibilityList.map(al => al.title).join(',').toLowerCase().includes(search.toLowerCase()))
    )));

    setPlaces(placeData);
  }, []);

  useEffect(() => {
    const placeUnsub = onSnapshot(placesRef, (data) => {
      const placeData: any[] = [];

      if (!data.empty) data.forEach(place => placeData.push(place.data()));
      setPlaces(placeData);
      setLoadedPlaces(placeData);
    });
    return () => {
      placeUnsub();
    }
  }, [])

  return { places, searchOnChange };
}
