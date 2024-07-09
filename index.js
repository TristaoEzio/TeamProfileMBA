import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/pages/_app'; // Certifique-se de que este caminho está correto
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
