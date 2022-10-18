import { Ionicons, Feather } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { GRAY_DARK, PRIMARY, WHITE } from '../../styles/colors';

const Content = styled.View`
  flex-direction: row;
  background-color: ${WHITE};
`;

const TabBarButton = styled.TouchableOpacity<any>`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-width: 0.8px;
  border-color: #efefef;
  ${props => props.index == 0 && 'border-left-width: 0;'}
  ${props => props.index == 2 && 'border-right-width: 0;'}
  border-bottom-width: 0;
  position: relative;
`;

const BottomTabContent = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <Content>
      {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const RouteNames: any = {
            ProfileTab: <Feather
              name="user"
              size={24}
              color={isFocused ? PRIMARY : "#323232"}
            />,
            NavigateTab: <Feather
              name="navigation-2"
              size={24}
              color={isFocused ? PRIMARY : "#323232"}
            />,
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(label, { merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabBarButton
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              index={index}
              activeOpacity={0.8}
            >
              {
                RouteNames[label]
              }
            </TabBarButton>
          );
        })
      }
    </Content>
  )
}

export default BottomTabContent;
