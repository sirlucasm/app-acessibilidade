import { Place } from "src/@types/place.type";
import { View } from "native-base";
import MapView, { Marker } from 'react-native-maps';

interface ShowPlaceMapParams {
  place: Place;
}

export const ShowPlaceMap = ({ place }: ShowPlaceMapParams) => {
  return (
    <View backgroundColor='gray.200' padding={1} borderRadius={4}>
      <MapView
        initialRegion={{
          latitude: place.latitude,
          longitude: place.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ width: '100%', height: '90%' }}
      >
        <Marker
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude
          }}
        />
      </MapView>
    </View>
  );
}
