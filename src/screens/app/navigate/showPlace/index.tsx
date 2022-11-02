import { Button, Center, HStack, Image, ScrollView, Text, View, VStack } from 'native-base';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { TopHeader } from '@components/TopHeader';
import { HeaderContainer } from '@styles/containers';
import { usePlace } from 'src/hooks/use-place';
import { AccessibleItemButton, DescriptionObsArea } from './styles';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Place } from 'src/@types/place.type';
import { accessibleColorString, generateAccessibleObj } from 'src/utils/place';
import { AntDesign, Octicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { ALERT, GRAY_DARK, GRAY_LIGHT, PRIMARY } from '@styles/colors';
import { Alert, TouchableOpacity } from 'react-native';
import { fontPixel } from 'src/utils/normalize';
import { useState } from 'react';
import { ShowPlaceInfo } from './info';
import { ShowPlaceMap } from './map';

interface ShowPlaceProps {
  navigation: NavigationProp<any, 'ShowPlace'>;
  route: RouteProp<any, 'ShowPlace'> & {
    params: {
      place: Place;
    }
  };
}

const ShowPlace = ({ route, navigation }: ShowPlaceProps) => {
  const { place } = route.params;
  const [menuItem, setMenuItem] = useState<'info' | 'map'>('info');

  const accessibleObj = generateAccessibleObj(place.accessible);

  const handleMenuChange = (menu: 'info' | 'map') => setMenuItem(menu);

  return (
    <HeaderContainer>
      <VStack alignItems='center' marginTop={5}>
        <HStack
          alignItems='center'
          w='full'
          justifyContent='space-around'
          marginBottom={2}
        >
          <Button variant='ghost' onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={fontPixel(24)} />
          </Button>
          <Text
            bold
            fontSize='lg'
          >
            {place.title}
          </Text>
          <View></View>
        </HStack>

        <HStack
          alignItems='center'
          justifyContent='space-evenly'
          marginBottom={2}
          backgroundColor={GRAY_LIGHT}
          padding={2}
          borderRadius={8}
          w={["200", "200"]}
        >
          <TouchableOpacity
            activeOpacity={.7}
            onPress={() => handleMenuChange('info')}
          >
            <HStack alignItems='center'>
              <Octicons name='dot-fill' color={menuItem === 'info' ? PRIMARY : 'transparent'} />
              <Text marginLeft={2} color={menuItem === 'info' ? PRIMARY : GRAY_DARK}>Informações</Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.7}
            onPress={() => handleMenuChange('map')}
          >
            <HStack alignItems='center'>
              <Octicons name='dot-fill' color={menuItem === 'map' ? PRIMARY : 'transparent'} />
              <Text marginLeft={2} color={menuItem === 'map' ? PRIMARY : GRAY_DARK}>Mapa</Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
      </VStack>

      {
        menuItem === 'info' ?
          <Center>
            <ShowPlaceInfo
              place={place}
            />
          </Center>
          :
          <ShowPlaceMap
            place={place}
          />
      }
    </HeaderContainer>
  );
}

export default ShowPlace;
