import { Box, Button, FlatList, HStack, Image, Text, View, VStack } from 'native-base';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { TopHeader } from '@components/TopHeader';
import { HeaderContainer } from '@styles/containers';
import { usePlace } from 'src/hooks/use-place';
import LocationIcon from '@assets/images/icons/location-icon.svg'
import { PlaceInfoButton } from './styles';
import { generateAccessibleObj } from 'src/utils/place';
import { Octicons } from '@expo/vector-icons';

const Navigate = () => {
  const { places } = usePlace()
  const { logout } = useAuthContext()

  return (
    <HeaderContainer>
      <TopHeader />
      <VStack alignItems='center'>
        <LocationIcon
          style={{ marginTop: 15, marginBottom: 30 }}
        />
        <FlatList
          data={places}
          w={["280", "300"]}
          renderItem={({ item, index }) => {
            const accessibleObj = generateAccessibleObj(item.accessible)
            return (
              <PlaceInfoButton activeOpacity={.84}>
                <HStack justifyContent='flex-start'>
                  <Image
                    source={{ uri: item.thumb_image }}
                    alt="Place thumb image"
                    size={'sm'}
                    style={{ borderRadius: 4 }}
                  />
                  <VStack marginLeft={3}>
                    <View marginBottom={1}>
                      <Text>{item.title}</Text>
                      <Text
                        color='#323232'
                        fontSize={12}
                      >
                        {item.locality}
                      </Text>
                    </View>
                    <HStack alignItems='center'>
                      <Octicons
                        name="dot-fill"
                        size={16}
                        color={accessibleObj.color}
                        style={{ marginRight: 4 }}
                      />
                      <Text
                        color={accessibleObj.color}
                        fontSize={13}
                      >
                        {accessibleObj.text}
                      </Text>
                    </HStack>
                  </VStack>
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
