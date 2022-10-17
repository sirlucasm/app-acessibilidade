import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/app/profile';
import Navigate from '../../screens/app/navigate';
import { AppTab } from './tab';
import ShowPlace from '@screens/app/navigate/showPlace';
import React from 'react';

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
      <Stack.Screen name="ShowPlace" component={ShowPlace as React.FC} />
    </Stack.Navigator>
  )
}
