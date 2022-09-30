import { pixelSizeVertical } from "src/utils/normalize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${pixelSizeVertical(60)}px;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  padding-top: ${pixelSizeVertical(23)}px;
`;
