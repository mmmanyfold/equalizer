import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import MainNavigation from '../navigation/MainNavigation';
import OnboardNavigation from '../navigation/OnboardNavigation';
import StatsScreen from '../screens/StatsScreen'

export default TabNavigator(
  {
    "Main App Demo": {
      screen: MainNavigation,
    },
    "Onboarding Demo": {
      screen: OnboardNavigation,
    },
    "Stats Demo": {
      screen: StatsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Main App Demo':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Onboarding Demo':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Stats Demo':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
