import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/app/profile';
import Navigate from '../../screens/app/navigate';
import { AppTab } from './tab';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='TabStack'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="TabStack" component={AppTab} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Navigate" component={Navigate} />
    </Stack.Navigator>
  )
}
