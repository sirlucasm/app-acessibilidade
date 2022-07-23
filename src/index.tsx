import styled from 'styled-components/native';

const Div = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const TextField = styled.Text`
  font-size: 16px;
`;


export default function IndexApp() {
  return (
    <Div>
      <TextField>Open up App.tsx to start working on your app!</TextField>
    </Div>
  );
}
