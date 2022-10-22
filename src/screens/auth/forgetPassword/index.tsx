import { Input } from "@components/Inputs";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { Formik } from "formik";
import { Button, Text, VStack } from "native-base";
import { Image } from 'react-native'
import useAuthContext from "src/contexts/auth-context/use-auth-context";
import { fontPixel, heightPixel, widthPixel } from "src/utils/normalize";
import { BackButton, CesmacLogoArea, CircleCard, CircleCardArea, FormArea, Header, Logo, LogoArea, Main } from "../signUp/style";
import { Toast } from 'toastify-react-native';

interface ForgetPasswordProps {
  navigation: NavigationProp<any, 'ForgetPassword'>;
}

const ForgetPassword = ({ navigation }: ForgetPasswordProps) => {
  const { forgetPasswordEmail } = useAuthContext();

  const handleForgetPassword = (values: { email: string; }) => {
    if (!values.email) {
      Toast.error('Preencha o campo obrigatório');
      return
    }

    forgetPasswordEmail(values);
    Toast.success('Email enviado.');
    setTimeout(() => {
      navigation.goBack();
    }, 1500)
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
        <VStack marginTop={6}>
          <Text
            fontSize={fontPixel(19)}
            color='#323232'
          >
            Esqueceu a senha?
          </Text>
          <Text
            fontSize={fontPixel(13.5)}
            color='#424242'
            marginTop={2}
          >
            Informe seu e-mail cadastrado no APP para enviarmos as instruções de redefinição de senha.
          </Text>
        </VStack>
        <Formik
          initialValues={{
            email: ""
          }}
          onSubmit={(values) => handleForgetPassword(values)}
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
              <Button
                style={{
                  backgroundColor: '#1283C6',
                  height: heightPixel(42),
                  width: widthPixel(186),
                  borderRadius: 12,
                  alignSelf: 'center'
                }}
                marginTop={4}
                onPress={(e: any) => handleSubmit(e)}
              >
                Enviar
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
  );
}

export default ForgetPassword;
