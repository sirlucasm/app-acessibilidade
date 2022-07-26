import { NavigationContainer } from "@react-navigation/native";
import useAuthContext from "src/contexts/auth-context/use-auth-context";
import { AppStack } from "./app/stack";
import { AuthStack } from "./auth";

const Navigation = () => {
  const { isLogged } = useAuthContext()
  return (
    <NavigationContainer>
      {
        isLogged ?
          <AppStack />
          :
          <AuthStack />
      }
    </NavigationContainer>
  )
}

export default Navigation;
