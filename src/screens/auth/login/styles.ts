import styled from "styled-components/native";
import { WHITE, BLUE, YELLOW, RED } from "@styles/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${WHITE};
  padding-top: 200px;
`;

export const Btn = styled.Text`
  padding-top: 40px;
`;

export const Fields = styled.View`
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Header = styled.View`
  // background-color: ${BLUE};
  margin-bottom: 15px;
`;

export const LogoArea = styled.Text`
  margin-bottom: 15px;
  // background-color: ${RED};
`;

export const CesmacLogoArea = styled.View`
  position: absolute;
  bottom: 30px;
`;

export const Forget = styled.Text`
  padding-top: 24px;
  // flex-diretion: left;
  // background-color: ${BLUE};
`;
