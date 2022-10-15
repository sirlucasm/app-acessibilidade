import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
`;
