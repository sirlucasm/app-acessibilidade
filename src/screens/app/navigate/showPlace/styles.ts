import { ALERT } from "@styles/colors";
import styled from "styled-components/native";

export const AccessibleItemButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  padding: 0 4px;
`;

export const DescriptionObsArea = styled.View`
  background-color: #F2B9AE;
  border-color: ${ALERT};
  border-width: 1px;
  border-style: dashed;
  border-radius: 8px;

  padding: 8px 12px;
`;
