import { TERTIARY } from "@styles/colors";
import { VStack } from "native-base";
import styled from "styled-components/native";

export const DeficienciesInfo = styled.View`
  flex: 2;
  background-color: ${TERTIARY};
  align-items: center;
`

export const DeficienciesContent = styled(VStack)`
  background-color: #EBEFF1;
  border-color: #50AAD7;
  border-width: 1px;
  border-style: dashed;
  border-radius: 8px;

  align-items: center;
  padding: 20px;
`
