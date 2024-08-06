// navigation/MainNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
