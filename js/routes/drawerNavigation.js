import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*****************Component imports *****************/
import { FoodStack } from './FoodStack';
import { EcomStack } from './EcomStack';
import { TableStack } from './TableStack';
import SideDrawer from './sideDrawer';

const routes = {
  FoodOrdering: {
    screen: FoodStack,
    navigationOptions: {
      drawerLabel: 'FOOD ORDERING',
      drawerIcon: ({tintColor}) => (
        <Icon name="food" size={24} color={tintColor}  />
      ),
    }
  },
  Ecommerce: {
    screen: EcomStack,
    navigationOptions: {
      drawerLabel: 'ECOMMERCE',
      drawerIcon: ({tintColor}) => (
        <Icon name="shopping" size={24} color={tintColor}  />
      )
    }
  },
  Table: {
    screen: TableStack,
    navigationOptions: {
      drawerLabel: 'TABLE RESERVATION',
      drawerIcon: ({tintColor}) => (
        <Icon name="table-large" size={24} color={tintColor}  />
      )
    }
  }
};

const options = {
  initialRouteName: 'FoodOrdering',
  drawerWidth: 300,
  contentComponent: SideDrawer,
  contentOptions: {
    activeTintColor: '#0ACED4',
    inactiveTintColor: '#757575',
    activeBackgroundColor: '#ffffff',
    labelStyle: {
      marginLeft: 0,
      fontSize: 16,
      fontWeight: 'normal',
    },
    style: {
      marginLeft: 10,
    },
    // onItemPress: ({navigation}) => {
    //   navigation.navigate('FoodHome');
    // },
  }
};



export default DrawerNavigator(routes, options);
