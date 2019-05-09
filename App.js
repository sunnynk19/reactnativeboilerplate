import React, {Component} from 'react';

import Dashboard from './src/scenes/Dashboard/Dashboard'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);