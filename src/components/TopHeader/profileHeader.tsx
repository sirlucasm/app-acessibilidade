import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { BLACK, BLUE, TERTIARY, WHITE } from "../../styles/colors";

const Image = styled.Image`
  width: 120px;
`;

const QuestionBtn = styled.TouchableOpacity`
  background-color: ${BLACK};
  border-radius: 50px;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  top: 4px;
`;

const Div = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${BLUE};
  align-items: center;
`;

const ButtonArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  top: 20px;
`;

export const ProfileHeader = () => {
  return (
    <Div>
      <ButtonArea>
        <QuestionBtn activeOpacity={.7}>
          <Ionicons name="help-circle-outline" size={24} color={WHITE} />
        </QuestionBtn>
      </ButtonArea>
    </Div>
  )
}
