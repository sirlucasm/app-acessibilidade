import { PRIMARY } from "@styles/colors";
import { Button } from "native-base";
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "src/utils/normalize";
import styled from "styled-components/native";

type CircleCardType = {
  positions: {
    top: number;
    right: number;
  }
}

export const Main = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
`;

export const FormArea = styled.View`
  flex: 2;
  margin-bottom: ${pixelSizeVertical(30)}px;
  width: ${widthPixel(300)}px;
  align-self: center;
`;

export const LogoArea = styled.View`
  align-items: center;
`;

export const Logo = styled.Text`
  font-family: 'Happy Monkey';
  font-size: ${fontPixel(22)}px;
`;

export const BackButton = styled(Button)`
  width: 50px;
  height: 50px;
  top: ${pixelSizeVertical(50)}px;
  left: ${pixelSizeHorizontal(25)}px;
`;

export const CircleCardArea = styled.View`
  align-self: flex-end;
  position: relative;
`;

export const CircleCard = styled.View<CircleCardType>`
  background-color: rgba(18, 131, 198, .7);
  width: 200px;
  height: 200px;
  border-radius: 150px;
  position: absolute;
  top: ${({ positions }) => positions.top}px;
  right: ${({ positions }) => positions.right}px;
`;

export const CesmacLogoArea = styled.View`
  position: absolute;
  bottom: 30px;
  align-self: center;
`
