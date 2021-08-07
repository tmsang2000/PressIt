/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from 'app/index.js';
import { BaseSetting } from '@config';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(BaseSetting.name, () => App);
