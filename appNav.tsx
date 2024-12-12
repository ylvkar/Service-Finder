import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './app/index';
import ProfileScreen from './app/profile';

import { RootStackParamList } from './components/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>(); 

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}