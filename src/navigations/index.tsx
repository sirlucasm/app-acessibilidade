import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./app/stack";
import { AuthStack } from "./auth";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  )
}

export default Navigation;
