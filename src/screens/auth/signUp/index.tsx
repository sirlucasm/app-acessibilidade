import { Input } from '@components/Inputs';
import { AntDesign, Feather } from '@expo/vector-icons'
import { NavigationProp } from '@react-navigation/native';
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
} from './style'
import { Formik } from 'formik';
import { Toast } from 'toastify-react-native';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { CreateUser } from 'src/@types/user.type';

interface SignUpProps {
  navigation: NavigationProp<any, 'SignUp'>;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const { signUp } = useAuthContext();

  const handleSignUp = (values: any) => {
    if (!values.email) {
      Toast.error('Preencha o campo de email');
      return
    }
    if (!values.name) {
      Toast.error('Preencha o campo de nome');
      return
    }
    if (!values.password) {
      Toast.error('Preencha o campo de senha');
      return
    }

    signUp(values);
  }

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
            email: '',
            name: '',
            password: '',
          }}
          onSubmit={values => handleSignUp(values)}
        >
          {({ handleChange, handleBlur, handleSubmit }) => (
            <>
              <Input
                placeholder='Email *'
                iconName='mail'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                marginTop={10}
              />
              <Input
                placeholder='Nome *'
                marginTop={4}
                iconName='user'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />

              <Input
                placeholder='Senha *'
                marginTop={4}
                marginBottom={8}
                iconName='lock'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                type='password'
              />

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
                Cadastrar
              </Button>
            </>
          )}
        </Formik>
      </FormArea>
      <CesmacLogoArea>
        <Image
          source={require('/assets/images/logo_cesmac_outline.png')}
          style={{ width: widthPixel(160), height: heightPixel(40), resizeMode: 'contain' }}
        />
      </CesmacLogoArea>
    </Main>
  )
}

export default SignUp
