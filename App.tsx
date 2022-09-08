import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import IndexApp from "./src";
import AppLoading from '@components/AppLoading';
import { NativeBaseProvider } from "native-base";

LogBox.ignoreLogs([
  'AsyncStorage',
  'Setting a timer',
  'Found screens',
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    'Happy Monkey': require('./assets/fonts/HappyMonkey-Regular.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NativeBaseProvider>
      <IndexApp />
    </NativeBaseProvider>
  );
}
