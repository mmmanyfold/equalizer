import React from 'react';
import { StackNavigator } from 'react-navigation';
import OnboardScreen from '../screens/OnboardScreen';
import A1 from '../screens/onboarding/A1';
import A2 from '../screens/onboarding/A2';
import A3 from '../screens/onboarding/A3';
import A4 from '../screens/onboarding/A4';
import A5 from '../screens/onboarding/A5';
import A6 from '../screens/onboarding/A6';
import A7 from '../screens/onboarding/A7';
import A8 from '../screens/onboarding/A8';
import A9 from '../screens/onboarding/A9';
import MainNavigation from './MainNavigation';

const OnboardStackNavigator = StackNavigator(
  {
    Main: {
      screen: OnboardScreen,
    },
    A1: {
      screen: A1,
    },
    A2: {
      screen: A2,
    },
    A3: {
      screen: A3,
    },
    A4: {
      screen: A4,
    },
    A5: {
      screen: A5,
    },
    A6: {
      screen: A6,
    },
    A7: {
      screen: A7,
    },
    A8: {
      screen: A8,
    },
    A9: {
      screen: A9,
    },
    'Main App Demo': {
      screen: MainNavigation,
    },
  },
  {
    initialRouteName: 'A8',
    navigationOptions: () => ({
      header: null,
    }),
  }
);

export default class OnboardNavigation extends React.Component {
  render() {
    return <OnboardStackNavigator />;
  }
}
