import React from 'react';
import { StackNavigator } from 'react-navigation';
import OnboardScreen from '../screens/OnboardScreen';
import A1 from '../screens/onboarding/A1';
import A6 from '../screens/onboarding/A6';

const OnboardStackNavigator = StackNavigator(
  {
    Main: {
      screen: OnboardScreen,
    },
    A1: {
      screen: A1,
    },
    A6: {
      screen: A6,
    },
  },
  {
    initialRouteName: 'A6', // TODO: change this back to main
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
