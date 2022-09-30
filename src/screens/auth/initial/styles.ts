import styled from "styled-components/native";
import { PRIMARY, WHITE } from "@styles/colors";
import { Container as StyledContainer } from "@styles/containers";
import { fontPixel, pixelSizeVertical } from "src/utils/normalize";

export const Container: any = styled(StyledContainer)`
  align-items: center;
  background-color: ${WHITE};
`;

export const HeaderArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: ${pixelSizeVertical(120)}px;
`;

export const LogoArea = styled.View`
  margin-bottom: ${pixelSizeVertical(30)}px;
`;

export const Logo = styled.Text`
  font-family: "Happy Monkey";
  font-size: ${fontPixel(22)}px;
`;

export const BackgroundArea = styled.View`
  margin-top: ${pixelSizeVertical(30)}px;
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
