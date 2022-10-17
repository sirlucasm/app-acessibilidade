import { Button, FlatList, HStack, Image, ScrollView, Text, View, VStack } from 'native-base';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { TopHeader } from '@components/TopHeader';
import { HeaderContainer } from '@styles/containers';
import { usePlace } from 'src/hooks/use-place';
import { AccessibleItemButton, DescriptionObsArea } from './styles';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Place } from 'src/@types/place.type';
import { accessibleColorString, generateAccessibleObj } from 'src/utils/place';
import { Octicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { ALERT, PRIMARY } from '@styles/colors';

interface ShowPlaceProps {
  navigation: NavigationProp<any, 'ShowPlace'>;
  route: RouteProp<any, 'ShowPlace'> & {
    params: {
      place: Place;
    }
  };
}

const ShowPlace = ({ route, }: ShowPlaceProps) => {
  const { place } = route.params;

  const accessibleObj = generateAccessibleObj(place.accessible);

  return (
    <HeaderContainer>
      <VStack alignItems='center' marginTop={5}>
        <Text
          bold
          fontSize='lg'
          marginBottom={2}
        >
          {place.title}
        </Text>
        <View style={{ paddingBottom: 10 }}>
          <Image
            source={{ uri: place.thumb_image }}
            alt="Place thumb image"
            size={200}
            w={["300", "200"]}
            style={{ borderRadius: 4 }}
          />
        </View>
        <ScrollView h={430}>
          <HStack alignItems='center' marginTop={2}>
            <Octicons
              name="dot-fill"
              size={21}
              color={accessibleObj.color}
              style={{ marginRight: 4 }}
            />
            <Text
              color={accessibleObj.color}
              fontSize={18}
            >
              {accessibleObj.text}
            </Text>
          </HStack>
          <HStack
            flexWrap='wrap'
            w={["300", "200"]}
            justifyContent='space-between'
          >
            {
              place.accessibilityList.map((item, index) => {
                const itemAccessibleColor = accessibleColorString(item.accessible);
                return (
                  <AccessibleItemButton key={index} activeOpacity={.7}>
                    <Octicons
                      name="dot-fill"
                      size={18}
                      color={itemAccessibleColor}
                      style={{ marginRight: 4 }}
                    />
                    <Text
                      color={itemAccessibleColor}
                      fontSize={15}
                    >
                      {item.title}
                    </Text>
                  </AccessibleItemButton>
                )
              })
            }
          </HStack>
          <VStack w={["300", "200"]} marginTop={4}>
            <Text
              fontSize={17}
              marginBottom={2}
              color='#323232'
            >
              Localização
            </Text>
            <View backgroundColor='gray.200' padding={1} borderRadius={4}>
              <MapView
                initialRegion={{
                  latitude: place.latitude,
                  longitude: place.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                style={{ width: '100%', height: 200 }}
              >
                <Marker
                  coordinate={{
                    latitude: place.latitude,
                    longitude: place.longitude
                  }}
                />
              </MapView>
            </View>
          </VStack>
          <VStack w={["300", "200"]} marginTop={4}>
            <Text
              fontSize={17}
              marginBottom={2}
              color='#323232'
            >
              Descrição
            </Text>
            <Text
              fontSize={14}
              marginBottom={2}
              color='#323232'
            >
              {place.description}
            </Text>
          </VStack>
          <VStack w={["300", "200"]} marginTop={1}>
            <DescriptionObsArea>
              <Text
                fontSize={14}
                marginBottom={2}
                color={ALERT}
              >
                {place.descriptionObs}
              </Text>
            </DescriptionObsArea>
          </VStack>
        </ScrollView>
      </VStack>
    </HeaderContainer>
  );
}

export default ShowPlace;
