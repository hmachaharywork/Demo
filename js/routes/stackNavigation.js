import React from 'react';
import { Text, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
import Search from '../components/foodordering/search';
import SelectLocation from '../components/foodordering/selectlocation';
import FoodCart from '../components/cart/index';


const DrawerIcon = ({navigation}) => {
  return(
    <Icon name="menu"
      size={24}
      color="#757575"
      style={{ paddingLeft: 10, paddingRight: 10}}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  );
}

const headerStyleOptions = {
  backgroundColor: '#fff',
  shadowColor: 'transparent',
  marginTop: 20,
  paddingBottom: 20,
  shadowRadius: 0,
  shadowOffset: {
      height: 0,
  }
}


export const FoodStack = StackNavigator({
  FoodHome: {
    screen: FoodHome,
    navigationOptions: (props) => ({
      initialRouteName: 'FoodHome',
      header: null,
    }),
  },
  Location: {
    screen: SelectLocation,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  BestInTown: {
    screen: BestInTown,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Cuisine: {
    screen: CuisineList,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  AllRestro: {
    screen: RestroListing,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  FoodCart: {
    screen: FoodCart,
    navigationOptions: () => ({
      header: null,
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
      header: null,
    }),
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: (props) => ({
      header: null,
    }),
  }
});

export const NotificationStack = StackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: (props) => ({
      header: null,
    }),
  }
});
