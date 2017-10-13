import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
state={ loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDAindp1naxLjen3_rpxgoDldT-fwf0OIA',
    authDomain: 'authentication-2334.firebaseapp.com',
    databaseURL: 'https://authentication-2334.firebaseio.com',
    projectId: 'authentication-2334',
    storageBucket: 'authentication-2334.appspot.com',
    messagingSenderId: '1066804791374'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
        this.setState({ loggedIn: false });
    }
  });
<<<<<<< HEAD
  }

  renderContent() {
    if (this.state.loggedIn) {
        return (
       <Card>
         <CardSection>
            <Button onPress={() => firebase.auth().signOut()}> Log out </Button>
         </CardSection>
      </Card>
        );
      } else if (this.state.loggedIn === false) {
        return <LoginForm />;
      } else if (this.state.loggedIn !== true) {
        return <Spinner size='large' />;
      } return <Spinner size='small' />;
=======
>>>>>>> eb1c26c22a3984a79ebefe7883d678ecf512084f
  }

  renderContent() {
    if (this.state.loggedIn) {
        return (
       <Card>
         <CardSection>
            <Button onPress={() => firebase.auth().signOut()}> Log out </Button>
         </CardSection>
      </Card>
        );
      }
      else if(this.state.loggedIn === false){
        return <LoginForm />;
      }
      else if (this.state.loggedIn!=true){
        return <Spinner size='large' />;
      }
      else return <Spinner size='small' />;

      }


  render() {
    return (
      <View>
        <Header headerText='Authentication' />
      {this.renderContent()}
        </View>
    );
  }
}


export default App;
