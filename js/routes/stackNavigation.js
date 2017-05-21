import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/***************** Component imports ************************/
import FoodHome from '../components/foodordering/home';
import EcomHome from '../components/ecommerce';
import TableHome from '../components/tablereservation'
import Orders from '../components/orders';
import Profile from '../components/profile';
import Notification from '../components/notification';
import BestInTown from '../components/foodordering/bestintown/bestintownList';
import CuisineList from '../components/foodordering/cuisines/cuisinesList';
import RestroListing from '../components/foodordering/restrolist/';
import RestaurantHome from '../components/foodordering/restrohome/';
import { ShoppingCart } from '../common/';

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
      //headerRight: (<ShoppingCart />),
      headerMode: 'screen',
      headerBackTitle: null,
    }),
  },
  BestInTown: {
    screen: BestInTown,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerMode: 'screen',
      headerBackTitle: null,
    }),
  },
  Cuisine: {
    screen: CuisineList,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.cuisine}`,
      headerBackTitle: '',
      headerBackTitle: null,
    }),
  },
  AllRestro: {
    screen: RestroListing,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerBackTitle: '',
      headerBackTitle: null,
    }),
  },
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
      headerBackTitle: '',
      headerBackTitle: null,
    }),
  },
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
