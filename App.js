import React, { Component } from 'react';;
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraItem from './src/components/Dashboard/CameraItem';
import { enableScreens } from 'react-native-screens';

enableScreens(true);
const Stack = createNativeStackNavigator();

// import firebase from 'firebase';
// import firebase_Config from './src/firebase_Config';


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='CameraItem' component={CameraItem} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}