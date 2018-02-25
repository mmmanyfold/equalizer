import React from 'react';
import { Button } from 'react-native';

export class NextButton extends React.Component {
  render() {
    return <Button
              onPress={() => this.props.navigation.navigate(this.props.to)}
              title="Next"
              color="#6FCF97"/>
  }
}

export class BackButton extends React.Component {
  render() {
    return <Button
              onPress={() => this.props.navigation.goBack()}
              title="Back"
              color="#BDBDBD"/>
  }
}
