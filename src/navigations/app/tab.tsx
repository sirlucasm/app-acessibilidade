import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigate from '../../screens/app/navigate';
import Profile from '../../screens/app/profile';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="ProfileTab" component={Profile} />
      <Tab.Screen name="NavigateTab" component={Navigate} />
    </Tab.Navigator>
  );
}
