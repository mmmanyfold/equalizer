import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ActionScreen from '../screens/ActionScreen';
import FocusAreasScreen from '../screens/FocusAreasScreen';

const MainStackNavigator = StackNavigator(
  {
    Main: {
      screen: HomeScreen,
    },
    Action: {
      screen: ActionScreen,
    },
    FocusAreas: {
      screen: FocusAreasScreen,
    },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: () => ({
      header: null,
    }),
  }
);

export default class OnboardNavigation extends React.Component {
  render() {
    return <MainStackNavigator />;
  }
}
