import { Ionicons, Octicons } from '@expo/vector-icons';
import { Place } from 'src/@types/place.type';
import { HStack, Image, ScrollView, Text, View, VStack, Modal } from 'native-base';
import { accessibleColorString, generateAccessibleObj } from 'src/utils/place';
import { AccessibleItemButton, DescriptionObsArea } from './styles';
import { ALERT, WHITE } from '@styles/colors';
import { heightPixel } from 'src/utils/normalize';
import { useState } from 'react';

interface ShowPlaceInfoParams {
  place: Place;
}

export const ShowPlaceInfo = ({ place }: ShowPlaceInfoParams) => {
  const [isOpenAccessibleItemModal, setIsOpenAccessibleItemModal] = useState(false);
  const [accessibleItem, setAccessibleItem] = useState<any>();
  const accessibleObj = generateAccessibleObj(place.accessible);

  const handleAccessibleModalOpen = (item: any) => {
    setAccessibleItem(item);
    setIsOpenAccessibleItemModal(true);
  }
  const handleAccessibleModalClose = () => {
    setIsOpenAccessibleItemModal(false);
    setAccessibleItem(undefined);
  }

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
                  onPress={() => handleAccessibleModalOpen(item)}
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
        {!!place.descriptionObs &&
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
        }
        <Modal
          isOpen={isOpenAccessibleItemModal}
          onClose={handleAccessibleModalClose}
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>{accessibleItem?.title}</Modal.Header>
            <Modal.Body alignItems='center'>
              <HStack
                alignItems='center'
                backgroundColor={accessibleColorString(accessibleItem?.accessible)}
                padding='1.5'
                borderRadius={4}
                mb='3'
              >
                <Ionicons name='alert-circle-outline' size={16} color={WHITE} />
                <Text
                  fontSize={14}
                  textAlign='center'
                  color={WHITE}
                >{accessibleItem?.description}</Text>
              </HStack>
              <Image
                source={{ uri: accessibleItem?.image }}
                alt="Place thumb image"
                loadingIndicatorSource={{ uri: 'https://www.lumen-care.com/wp-content/uploads/loading.gif' }}
                size={260}
                w={["220", "150"]}
                style={{ borderRadius: 4 }}
              />
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </>
  );
}
