import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigateStack, ProfileStack } from './stack';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen name="NavigateStack" component={NavigateStack} />
    </Tab.Navigator>
  );
}
