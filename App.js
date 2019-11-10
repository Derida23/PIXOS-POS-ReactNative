import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/navigation/MainNavigator'

import { Root } from "native-base";
import { Provider } from 'react-redux';
import store from "./src/Redux/Store";

const App = () => {

  useEffect(() => {
      SplashScreen.hide();
  })
    return (
      <>
      <StatusBar backgroundColor='#0DAC50' />
        <Root>
          <Provider store={store}>
            <MainNavigator />
          </Provider>
        </Root>
      </>
    );
};

const styles = StyleSheet.create({

});

export default App;
