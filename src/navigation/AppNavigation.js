import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppStack from './AppStack';
import {navigationRef} from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
