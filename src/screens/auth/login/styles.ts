import styled, { DefaultTheme } from "styled-components/native";
import { WHITE } from "@styles/colors";
import { TouchableOpacity } from "react-native";
import { StyledComponent } from "styled-components";

type ForgetPasswordComponent = StyledComponent<
  typeof TouchableOpacity,
  DefaultTheme,
  {},
  never
>;

export const ForgetPasswordArea: ForgetPasswordComponent = styled.TouchableOpacity`
  margin-bottom: 8px;
`;

export const ForgetPasswordText = styled.Text`
  color: #1283c6;
`;
