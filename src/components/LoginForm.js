import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Spinner, Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
state = { email: '', password: '', error: '', loading: false };


onLoginFail() {
  this.setState({ error: 'Authentication failed.', loading: false });
}
onLoginSuccess() {
  this.setState(
    {
      loading: false,
      email: '',
      password: '',
      error: ''
    });
}
buttonOnPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
      });
}

renderButton() {
  if (this.state.loading) {
    return <Spinner size='small' />;
  }
  return (
    <Button onPress={this.buttonOnPress.bind(this)}>
      Log in
    </Button>
  );
}


  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder='max@gmail.com'
          autoCapitalize="none"
          returnKeyType="next"
          label='E-Mail'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCorrect={false}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label='Passwort'
            autoCorrect={false}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
  }

  const styles = {
    errorTextStyle: {
      fontSize: 20,
      paddingTop: 5,
      paddingBottom: 5,
      alignSelf: 'center',
      color: 'red'
    }
  };


export default LoginForm;
