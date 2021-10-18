import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/root'
enableScreens();



const store = createStore(rootReducer);



const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)


  if (!isFontLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setIsFontLoaded(true) }}
      onError={(error) => console.log(error)}
    />)
  }

  return (

    <Provider store={store}>
      <MealsNavigator />
    </Provider>

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
