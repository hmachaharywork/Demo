import React from 'react';
import { TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

/***************** Component imports ****************/
import { FoodStack, EcomStack, TableStack, OrdersStack, ProfileStack, NotificationStack } from './stackNavigation';


export const FoodTabs = TabNavigator({
  FoodTab: {
    screen: FoodStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Orders: {
    screen: OrdersStack,
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
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => <Icon name="notifications" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />
    },
  },
}, {
  // tabBarComponent: ({ jumpToIndex, ...props }) => (
  //     <TabBarBottom
  //       {...props}
  //       jumpToIndex={index => {
  //         const { dispatch, state } = props.navigation
  //
  //         if (state.index === index) {
  //           const stackRouteName = ['FoodHome', 'BestInTown', 'Cuisine', 'AllRestro', 'RestroHome'][index]
  //
  //           dispatch(NavigationActions.reset({
  //             index: 0,
  //             actions: [NavigationActions.navigate({ routeName: stackRouteName })],
  //           }))
  //         } else {
  //           jumpToIndex(index)
  //         }
  //       }}
  //     />
  //   ),
  initialRouteName: 'FoodTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#0ACED4',
    inactiveTintColor: '#757575',
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

export const TableTabs = TabNavigator({
  TableTab: {
    screen: TableStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="ios-home-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Orders: {
    screen: OrdersStack,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({tintColor}) => <Icon name="ios-cart-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => <Icon name="ios-contact-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Notificaton: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => <Icon name="ios-notifications-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />
    },
  },
}, {
  initialRouteName: 'TableTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
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

export const EcomTabs = TabNavigator({
  EcomTab: {
    screen: EcomStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="ios-home-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Orders: {
    screen: OrdersStack,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({tintColor}) => <Icon name="ios-cart-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => <Icon name="ios-contact-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />,
    },
  },
  Notificaton: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => <Icon name="ios-notifications-outline" size={24} color={tintColor}
        style={{ margin: 0, padding: 0}}
      />
    },
  },
}, {
  initialRouteName: 'EcomTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
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
