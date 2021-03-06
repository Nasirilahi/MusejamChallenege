/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import Main from './src/components';
import {
    AppRegistry,
    StatusBar,
} from 'react-native';

//StatusBar.setHidden(true);

const MusejamChallenge = () => (
    <Provider store={store}>
      <Main />
    </Provider>
);

AppRegistry.registerComponent('MusejamChallenge', () => MusejamChallenge);
