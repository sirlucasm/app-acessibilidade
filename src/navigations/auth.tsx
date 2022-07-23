import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signUp';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
