import React from 'react';
import { Component } from 'react';
import LoginScreen from './Modules/LoginScreen';
import MainMenu from './Modules/MainMenu'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'

const Stack = createStackNavigator();
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAY3qSTg4BR_xJnIqoJVKODaZhRnf401E8",
  authDomain: 'chowkidar-234db.firebaseapp.com',
  databaseURL: "https://chowkidar-234db-default-rtdb.firebaseio.com",
  projectId: 'chowkidar-234db',
  storageBucket: 'chowkidar-234db.appspot.com',
  messagingSenderId: '1002057142172',
  appId: '1:1002057142172:android:18a9adba92e5218d674259',
  // measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
    // <MainMenu></MainMenu>
  );
}
}
// export default App;