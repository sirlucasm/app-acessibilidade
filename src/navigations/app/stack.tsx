import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/app/profile';
import Navigate from '../../screens/app/navigate';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export const NavigateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Navigate" component={Navigate} />
    </Stack.Navigator>
  )
}
