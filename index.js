/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'mobx-react'
import App from './app/component/App';
import { name as appName } from './app.json';
import stores from './app/store'

const MobX = () => (<Provider {...stores}>
    <App/>
</Provider>)

AppRegistry.registerComponent(appName, () => MobX);
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); */
