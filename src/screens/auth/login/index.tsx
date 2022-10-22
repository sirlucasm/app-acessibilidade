// import { Input } from '@components/Inputs';
import { Input } from '@components/Inputs';
import { AntDesign, Feather } from '@expo/vector-icons'
import { Image } from 'react-native'
import { Button } from 'native-base'
import { fontPixel, heightPixel, widthPixel } from 'src/utils/normalize'
import {
  CircleCard,
  CircleCardArea,
  Header,
  Main,
  BackButton,
  LogoArea,
  FormArea,
  Logo,
  CesmacLogoArea
} from '../signUp/style'
import { ForgetPasswordArea, ForgetPasswordText } from './styles';
import { Formik } from "formik";
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any, 'Login'>;
}

const Login = ({ navigation }: LoginProps) => {
  const { login } = useAuthContext();

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <Main>
      <Header>
        <CircleCardArea>
          <CircleCard
            positions={{ top: 0, right: -90 }}
          />
          <CircleCard
            positions={{ top: -90, right: 0 }}
          />
        </CircleCardArea>
        <BackButton variant='ghost' onPress={handleBack}>
          <AntDesign name="arrowleft" size={fontPixel(24)} />
        </BackButton>
      </Header>

      <FormArea>
        <LogoArea>
          <Logo>Urbe Acessível</Logo>
        </LogoArea>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => login(values)}
        >
          {({ handleChange, handleBlur, handleSubmit }) => (
            <>
              <Input
                placeholder='Email'
                iconName='mail'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                marginTop={10}
              />

              <Input
                placeholder='Senha'
                marginTop={4}
                marginBottom={8}
                iconName='lock'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                type='password'
              />
              <ForgetPasswordArea activeOpacity={0.7} onPress={() => navigation.navigate('ForgetPassword')}>
                <ForgetPasswordText>Esqueci minha senha</ForgetPasswordText>
              </ForgetPasswordArea>
              <Button
                style={{
                  backgroundColor: '#1283C6',
                  height: heightPixel(42),
                  width: widthPixel(186),
                  borderRadius: 12,
                  alignSelf: 'center'
                }}
                onPress={(e: any) => handleSubmit(e)}
              >
                Entrar
              </Button>
            </>
          )}
        </Formik>
      </FormArea>
      <CesmacLogoArea>
        <Image
          source={require("/assets/images/logo_cesmac_outline.png")}
          style={{ width: 160, height: 40, resizeMode: "contain" }}
        />
      </CesmacLogoArea>
    </Main>
  );
};

export default Login;
