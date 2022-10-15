import AppLoading from '@components/AppLoading';
import { useFonts } from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import { AuthProvider } from 'src/contexts/auth-context';

import Navigations from './src/navigations';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted',
  'Setting a timer',
  'Found screens',
  'Non-serializable values were found in the navigation state',
  'Image URL',
  'Unexpected HTTP code'
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    'Happy Monkey': require('./assets/fonts/HappyMonkey-Regular.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Navigations />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
