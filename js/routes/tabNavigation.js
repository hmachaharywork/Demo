import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

/***************** Component imports ****************/
import FoodHome from '../components/foodordering/home/index';
import EcomHome from '../components/ecommerce/index';
import TableHome from '../components/tablereservation/index'
import Orders from '../components/orders/index';
import Notification from '../components/notification/index';
import { ProfileStack } from './ProfileStack';


export const FoodTab = TabNavigator({
  FoodTab: {
    screen: FoodHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({tintColor}) => <Icon name="shopping-cart" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => <Icon name="person" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Notificaton: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => <Icon name="notifications" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />
    },
  },
}, {
  initialRouteName: 'FoodTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#0ACED4',
    inactiveTintColor: '#393939',
    upperCaseLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#fff',
      margin: 0,
      padding: 0,
    },
    labelStyle: {
      fontSize: 12,
      margin: 0,
      padding: 0,
    },
    indicatorStyle: {
      opacity: 0,
    },
  }
});

export const TableTab = TabNavigator({
  TableTab: {
    screen: TableHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({tintColor}) => <Icon name="shopping-cart" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => <Icon name="person" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Notificaton: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => <Icon name="notifications" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />
    },
  },
}, {
  initialRouteName: 'TableTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#0ACED4',
    inactiveTintColor: '#393939',
    upperCaseLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#ffffff',
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
    },
    indicatorStyle: {
      opacity: 0,
    }
  }
});

export const EcomTab = TabNavigator({
  EcomTab: {
    screen: EcomHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({tintColor}) => <Icon name="shopping-cart" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => <Icon name="person" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Notificaton: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => <Icon name="notifications" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />
    },
  },
}, {
  initialRouteName: 'EcomTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#0ACED4',
    inactiveTintColor: '#393939',
    upperCaseLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#ffffff',
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
      padding: 0,
    },
    indicatorStyle: {
      opacity: 0,
    }
  }
});
