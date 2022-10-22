import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ForgetPassword from '@screens/auth/forgetPassword';
import { Initial } from '@screens/auth/initial';
import Login from '@screens/auth/login';
import SignUp from '@screens/auth/signUp';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Initial'
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  )
}
