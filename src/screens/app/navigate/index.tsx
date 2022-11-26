import { FlatList, HStack, Image, Text, View, VStack } from 'native-base';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { TopHeader } from '@components/TopHeader';
import { HeaderContainer } from '@styles/containers';
import { usePlace } from 'src/hooks/use-place';
import LocationIcon from '@assets/images/icons/location-icon.svg'
import { PlaceInfoButton } from './styles';
import { generateAccessibleObj } from 'src/utils/place';
import { Octicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { Place } from 'src/@types/place.type';
import { Input } from '@components/Inputs';
import { heightPixel } from 'src/utils/normalize';

const Navigate = ({ navigation }: any) => {
  const { places, searchOnChange } = usePlace()
  const { logout } = useAuthContext()

  const handleShowPlace = useCallback((place: Place) => {
    navigation.navigate('ShowPlace', { place });
  }, []);

  return (
    <HeaderContainer>
      <TopHeader />
      <VStack alignItems='center'>
        <LocationIcon
          style={{ marginTop: 15, marginBottom: 20 }}
        />
        <Input
          placeholder='Buscar locais'
          w={["320", "300"]}
          iconName='search'
          mb={2}
          onChangeText={(title) => searchOnChange(title)}
        />
        <FlatList
          data={places}
          w={["320", "300"]}
          height={heightPixel(390)}
          renderItem={({ item, index }) => {
            const accessibleObj = generateAccessibleObj(item.accessible);
            return (
              <PlaceInfoButton
                key={index}
                activeOpacity={.84}
                onPress={() => handleShowPlace(item)}
                style={{
                  borderBottomColor: accessibleObj.color,
                  borderBottomWidth: 4
                }}
              >
                <HStack
                  alignItems='center'
                  justifyContent='flex-start'
                  position='relative'
                >
                  <Image
                    source={{ uri: item.thumbImage }}
                    alt="Place thumb image"
                    size={'sm'}
                    style={{ borderRadius: 4 }}
                  />
                  <VStack marginLeft={3}>
                    <View marginBottom={1}>
                      <Text>{item.title}</Text>
                      <Text
                        color='#323232'
                        fontSize={11.3}
                        maxWidth='5/6'
                      >
                        {item.locality}
                      </Text>
                    </View>
                    <View mt='1' >
                      <Text
                        fontSize={11}
                        color='#707070'
                      >
                        {item.accessibilityList.map(accessible => accessible.title).join(', ').substring(0, 25)}...
                      </Text>

                    </View>
                  </VStack>
                  <Octicons
                    name="dot-fill"
                    size={21}
                    color={accessibleObj.color}
                    style={{
                      marginRight: 4,
                      position: 'absolute',
                      right: 0
                    }}
                  />
                </HStack>
              </PlaceInfoButton>
            )
        }}
        >

        </FlatList>
      </VStack>
    </HeaderContainer>
  )
}

export default Navigate;
