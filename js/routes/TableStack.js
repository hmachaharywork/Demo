import React from 'react';
import { StackNavigator } from 'react-navigation';

/************ Components import *****************/
import { TableTab } from './tabNavigation';


export const TableStack = StackNavigator({
  TableHome: {
    screen: TableTab,
    navigationOptions: (props) => ({
      initialRouteName: 'TableHome',
      header: null,
    }),
  }
})
