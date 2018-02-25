import React from 'react';
import { StackNavigator } from 'react-navigation';
import OnboardScreen from '../screens/OnboardScreen';
import A1 from '../screens/onboarding/A1';

const OnboardStackNavigator = StackNavigator(
  {
    Main: {
      screen: OnboardScreen,
    },
    A1: {
      screen: A1,
    },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class OnboardNavigation extends React.Component {
  render() {
    return <OnboardStackNavigator />;
  }
}
