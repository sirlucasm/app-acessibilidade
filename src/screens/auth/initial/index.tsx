import GuyAndDogAtPark from '@assets/images/guy-n-dog_park_image.svg';
import { Box, Button } from 'native-base';
import { BackgroundArea, Container, HeaderArea, Logo, LogoArea, YellowBackgroundArea } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { heightPixel, widthPixel } from 'src/utils/normalize';

interface InitialProps {
  navigation: NavigationProp<any, 'Initial'>;
}

export const Initial = ({ navigation }: InitialProps) => {
  return (
    <Container>
      <HeaderArea>
        <LogoArea>
          <Logo>Urbe Acessível</Logo>
        </LogoArea>
        <BackgroundArea>
          <GuyAndDogAtPark
            width={348}
            height={273}
          />
        </BackgroundArea>
      </HeaderArea>

      <YellowBackgroundArea>
        <Box>
          <Button
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: '#1283C6',
              height: heightPixel(42),
              width: widthPixel(186),
              borderRadius: 12
            }}
            leftIcon={<AntDesign name="login" size={24} color="#fcfcfc" />}
            _text={{
              color: '#fcfcfc',
              fontSize: 15
            }}
          >
            Entrar
          </Button>
        </Box>
        <Box>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            style={{
              backgroundColor: '#fcfcfc',
              height: heightPixel(42),
              width: widthPixel(186),
              borderRadius: 12
            }}
            leftIcon={<AntDesign name="adduser" size={24} color="#323232" />}
            _text={{
              color: '#323232',
              fontSize: 15
            }}
            mt={5}
          >
            Criar conta
          </Button>
        </Box>
      </YellowBackgroundArea>
    </Container>
  );
}
