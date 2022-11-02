import { Octicons } from '@expo/vector-icons';
import { Place } from 'src/@types/place.type';
import { Button, HStack, Image, ScrollView, Text, View, VStack } from 'native-base';
import { accessibleColorString, generateAccessibleObj } from 'src/utils/place';
import { AccessibleItemButton, DescriptionObsArea } from './styles';
import { ALERT } from '@styles/colors';
import { Alert } from 'react-native';
import { heightPixel } from 'src/utils/normalize';

interface ShowPlaceInfoParams {
  place: Place;
}

const handleAccessibleAlert = (item: any) => {
  Alert.alert(item.title, item.description, [
    { text: "Entendi" }
  ]);
}

export const ShowPlaceInfo = ({ place }: ShowPlaceInfoParams) => {
  const accessibleObj = generateAccessibleObj(place.accessible);

  return (
    <>
      <ScrollView h={heightPixel(560)}>
        <View style={{ paddingBottom: 10 }}>
          <Image
            source={{ uri: place.thumbImage }}
            alt="Place thumb image"
            size={200}
            w={["300", "200"]}
            style={{ borderRadius: 4 }}
          />
        </View>
        <HStack alignItems='center' marginTop={2} marginBottom={4}>
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
                <AccessibleItemButton
                  key={index}
                  activeOpacity={.7}
                  onPress={() => handleAccessibleAlert(item)}
                >
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
    </>
  );
}
