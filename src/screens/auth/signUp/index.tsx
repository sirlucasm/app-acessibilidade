import { Input } from '@components/Inputs';
import { AntDesign, Feather } from '@expo/vector-icons'
import { NavigationProp } from '@react-navigation/native';
import { GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM } from '@styles/colors';
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

interface SignUpProps {
  navigation: NavigationProp<any, 'Initial'>;
}

const SignUp = ({ navigation }: SignUpProps) => {
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
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <Input
                placeholder='Email'
                iconName='mail'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                marginTop={10}
              />
              <Input
                placeholder='Nome'
                marginTop={4}
                iconName='user'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
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
