import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*****************Component imports *****************/
import { FoodTabs, EcomTabs, TableTabs } from './tavNavigation';
import SideDrawer from './sideDrawer';

const routes = {
  FoodOrdering: {
    screen: FoodTabs,
    navigationOptions: {
      drawerLabel: 'Food Ordering',
      drawerIcon: ({tintColor}) => (
        <Icon name="food" size={24} color={tintColor} />
      ),
    }
  },
  Ecommerce: {
    screen: EcomTabs,
    navigationOptions: {
      drawerLabel: 'Ecommerce',
      drawerIcon: ({tintColor}) => (
        <Icon name="shopping" size={24} color={tintColor} />
      )
    }
  },
  Table: {
    screen: TableTabs,
    navigationOptions: {
      drawerLabel: 'Table Reservation',
      drawerIcon: ({tintColor}) => (
        <Icon name="table-large" size={24} color={tintColor} />
      )
    }
  }
};

const options = {
  initialRouteName: 'FoodOrdering',
  drawerWidth: 300,
  contentComponent: SideDrawer,
  contentOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
    activeBackgroundColor: '#ffffff'
  }
};



export default DrawerNavigator(routes, options);
