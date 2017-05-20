import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/***************** Component imports ************************/
import FoodHome from '../components/foodordering/home';
import EcomHome from '../components/ecommerce';
import TableHome from '../components/tablereservation'
import Orders from '../components/orders';
import Profile from '../components/profile';
import Notification from '../components/notification';


const DrawerIcon = ({navigation}) => {
  return(
    <Icon name="ios-menu-outline"
      size={24}
      color="#000"
      style={{padding: 20}}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  );
}

export const FoodStack = StackNavigator({
  FoodHome: {
    screen: FoodHome,
    navigationOptions: (props) => ({
      title: 'Food Ordering',
      initialRouteName: 'FoodHome',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen'
    }),
  }
});

export const EcomStack = StackNavigator({
  EcomHome: {
    screen: EcomHome,
    navigationOptions: (props) => ({
      title: 'CityOra Shop',
      initialRouteName: 'EcomHome',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen'
    }),
  }
});

export const TableStack = StackNavigator({
  TableHome: {
    screen: TableHome,
    navigationOptions: (props) => ({
      title: 'Table Reservation',
      initialRouteName: 'TableHome',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen'
    }),
  }
});

export const OrdersStack = StackNavigator({
  Orders: {
    screen: Orders,
    navigationOptions: (props) => ({
      title: 'Orders',
      initialRouteName: 'Orders',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen'
    }),
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: (props) => ({
      title: 'Profile',
      initialRouteName: 'Profile',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen'
    }),
  }
});

export const NotificationStack = StackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: (props) => ({
      title: 'Notifications',
      initialRouteName: 'Notification',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen'
    }),
  }
});
