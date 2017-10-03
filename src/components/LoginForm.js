import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder='max@gmail.com'
          label='E-Mail'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label='Passwort'
          />

        </CardSection>

        <CardSection>
          <Button text='Log in' />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
