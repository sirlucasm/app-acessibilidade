import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { BLACK, WHITE } from "../../styles/colors";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Image = styled.Image`
  width: 120px;
`;

const QuestionBtn = styled.TouchableOpacity`
  background-color: ${BLACK};
  border-radius: 50px;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;

const QuestionBtnArea = styled.View`
  flex-direction: row;
  justify-self: flex-end;
`;

const Div = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
  height: 60px;
  align-items: center;
`;

export const TopHeader = () => {
  return (
    <Div>
      <View><Text></Text></View>
      <Image
        source={require('../../assets/images/logo_cesmac.png')}
        resizeMode="contain"
      />
      <QuestionBtnArea>
        <QuestionBtn>
          <Ionicons name="help-circle-outline" size={26} color={WHITE} />
        </QuestionBtn>
      </QuestionBtnArea>
      <StatusBar backgroundColor={WHITE} style='dark' />
    </Div>
  )
}
