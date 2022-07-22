import { LogBox } from 'react-native';
import IndexApp from "./src";

LogBox.ignoreLogs([
  'AsyncStorage',
  'Setting a timer',
  'Found screens',
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  return <IndexApp />;
}
