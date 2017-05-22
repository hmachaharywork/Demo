import React from 'react';
import { StackNavigator } from 'react-navigation';

/************ Components import *****************/
import { EcomTab } from './tabNavigation';


export const EcomStack = StackNavigator({
  EcomHome: {
    screen: EcomTab,
    navigationOptions: (props) => ({
      initialRouteName: 'EcomHome',
      header: null,
    }),
  }
})
