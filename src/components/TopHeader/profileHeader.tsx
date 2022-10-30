import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { PRIMARY, TERTIARY, WHITE } from "../../styles/colors";
import useAuthContext from "src/contexts/auth-context/use-auth-context";
import { View } from "native-base";

const Image = styled.Image`
  width: 120px;
`;

const QuestionBtn = styled.TouchableOpacity`
  background-color: ${WHITE};
  border-radius: 50px;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
`;

const LogoutBtn = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
`;

const Div = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${PRIMARY};
  align-items: center;
`;

const ButtonArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  top: 20px;
`;

export const ProfileHeader = ({ editProfile = false }) => {
  const { logout } = useAuthContext()
  return (
    <Div>
      <ButtonArea>
        {
          editProfile ?
          <View></View>
          :
          <LogoutBtn
            activeOpacity={.7}
            onPress={logout}
          >
            <Ionicons name="exit-outline" size={24} color={WHITE} />
          </LogoutBtn>
        }
        <QuestionBtn activeOpacity={.7}>
          <Ionicons name="help-circle-outline" size={24} color={PRIMARY} />
        </QuestionBtn>
      </ButtonArea>
    </Div>
  )
}
