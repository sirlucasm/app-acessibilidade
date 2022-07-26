import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { PRIMARY, WHITE } from "../../styles/colors";
import { Text, View} from "react-native";

const Image = styled.Image`
  width: 120px;
`;

const QuestionBtn = styled.TouchableOpacity`
  background-color: ${PRIMARY};
  border-radius: 50px;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  top: 4px;
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
  height: 70px;
  align-items: center;
`;

export const TopHeader = () => {
  return (
    <Div>
      <View><Text></Text></View>
      <Image
        source={require('assets/images/logo_cesmac.png')}
        resizeMode="contain"
      />
      <QuestionBtnArea>
        <QuestionBtn activeOpacity={.7}>
          <Ionicons name="help-circle-outline" size={24} color={WHITE} />
        </QuestionBtn>
      </QuestionBtnArea>
    </Div>
  )
}
