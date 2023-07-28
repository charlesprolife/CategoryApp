/**
 * App
 * Main page
 * @Charles
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import COLOR from './src/config/color';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLOR.White}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.White,
  },
});
