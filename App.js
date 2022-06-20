import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';

import './assets/translations/i18n';
import { useTranslation } from 'react-i18next';



function App(){
  const {t, i18n} = useTranslation();

  
  
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
