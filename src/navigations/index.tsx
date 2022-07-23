import { NavigationContainer } from "@react-navigation/native";
import { AppTab } from "./app/tab";
import { AuthStack } from "./auth";

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppTab />
    </NavigationContainer>
  )
}

export default Navigation;
