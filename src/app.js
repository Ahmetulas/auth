import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDAindp1naxLjen3_rpxgoDldT-fwf0OIA',
    authDomain: 'authentication-2334.firebaseapp.com',
    databaseURL: 'https://authentication-2334.firebaseio.com',
    projectId: 'authentication-2334',
    storageBucket: 'authentication-2334.appspot.com',
    messagingSenderId: '1066804791374'
  });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
            </View>
    );
  }
}

export default App;
