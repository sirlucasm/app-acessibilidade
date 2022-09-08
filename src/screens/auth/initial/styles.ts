import styled from "styled-components/native";
import { PRIMARY, WHITE } from '@styles/colors';

export const Container = styled.View`
  padding-top: 24px;
  flex: 1;
  align-items: center;
  background-color: ${WHITE};
`;

export const HeaderArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
`;

export const LogoArea = styled.View`
  margin-bottom: 30px;
`;

export const Logo = styled.Text`
  font-family: 'Happy Monkey';
  font-size: 22px;
`;

export const BackgroundArea = styled.View`
  margin-top: 30px;
`;

export const YellowBackgroundArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${PRIMARY};
  border-top-left-radius: 280px;
  border-top-right-radius: 280px;
  width: 160%;
`;
