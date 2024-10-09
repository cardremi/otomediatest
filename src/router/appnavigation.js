import React from 'react';
import Home from '../pages/home';
import UpdateDetail from '../pages/update';
import CreateContact from '../pages/create';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={UpdateDetail} name="UpdateDetail" />
      <Stack.Screen component={CreateContact} name="CreateContact" />
    </Stack.Navigator>
  );
};
export default AppNavigation;
