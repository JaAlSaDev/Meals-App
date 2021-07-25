import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.tff'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.tff')
  })
}

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)


  if (!isFontLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setIsFontLoaded(true) }}
    />)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
