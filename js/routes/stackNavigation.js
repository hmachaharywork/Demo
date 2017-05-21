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

//const extraTopMargin = Platform.OS === "ios" ? 20 : 0;

const DrawerIcon = ({navigation}) => {
  return(
    <Icon name="menu"
      size={24}
      color="#757575"
      style={{padding: 20, paddingLeft: 10, paddingRight: 10}}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  );
}

const headerStyleOptions = {
  backgroundColor: '#fff',
  shadowColor: 'transparent',
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
      headerStyle: headerStyleOptions,
      headerTintColor: '#757575',
      headerLeft: (<DrawerIcon {...props} />),
      headerMode: 'screen',
      headerBackTitle: null,
    }),
  },
  Location: {
    screen: SelectLocation,
    navigationOptions: ({navigation}) => ({
      title: 'Select Location',
      headerStyle: headerStyleOptions,
      headerMode: 'screen',
      headerTintColor: '#757575',
      headerBackTitle: null,
    }),
  },
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
      headerStyle: headerStyleOptions,
      headerMode: 'screen',
      headerTintColor: '#757575',
      headerBackTitle: null,
    }),
  },
  BestInTown: {
    screen: BestInTown,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: headerStyleOptions,
      headerTintColor: '#757575',
      headerMode: 'screen',
      headerBackTitle: null,
    }),
  },
  Cuisine: {
    screen: CuisineList,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.cuisine}`,
      headerStyle: headerStyleOptions,
      headerTintColor: '#757575',
      headerMode: 'screen',
      headerBackTitle: null,
    }),
  },
  AllRestro: {
    screen: RestroListing,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: headerStyleOptions,
      headerMode: 'screen',
      headerTintColor: '#757575',
      headerBackTitle: null,
    }),
  },
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
      headerStyle: headerStyleOptions,
      headerTintColor: '#757575',
      headerMode: 'screen',
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
