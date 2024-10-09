import {SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/router/appnavigation';
import store from './src/config/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <AppNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
