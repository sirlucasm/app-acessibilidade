// import { Input } from '@components/Inputs';
import { Input, Button, Text, View } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import {
  Container,
  Btn,
  Fields,
  LogoArea,
  Header,
  CesmacLogoArea,
  Forget,
} from "./styles";
import { Image } from "react-native";
import { Formik } from "formik";

const Login = () => {
  return (
    <Container>
      <Header>
        <LogoArea>
          <Text>URBE ACESSÍVEL</Text>
        </LogoArea>
      </Header>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => Login(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <>
            <Fields>
              <Input
                placeholder="Email"
                iconName="mail"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                type="text"
                width={250}
              />
            </Fields>

            <Fields>
              <Input
                placeholder="Senha"
                iconName="lock"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                type="password"
                width={250}
              />
            </Fields>
            <Forget>
              <Text>Esqueci minha senha</Text>
            </Forget>
            <Btn>
              <Button
                style={{
                  backgroundColor: "#1283C6",
                  borderRadius: 12,
                  alignSelf: "center",
                }}
                onPress={(e: any) => handleSubmit(e)}
              >
                Entrar
              </Button>
            </Btn>
          </>
        )}
      </Formik>
      <CesmacLogoArea>
        <Image
          source={require("/assets/images/logo_cesmac_outline.png")}
          style={{ width: 160, height: 40, resizeMode: "contain" }}
        />
      </CesmacLogoArea>
    </Container>
  );
};

export default Login;
