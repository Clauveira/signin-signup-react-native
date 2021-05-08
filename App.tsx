
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Signin } from './src/pages/sign-in/Signin';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContent}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Signin />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeContent: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
