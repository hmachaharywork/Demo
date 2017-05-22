import React from 'react';
import { StackNavigator } from 'react-navigation';

/************ Components import *****************/
import { FoodTab } from './tabNavigation';
import RestaurantHome from '../components/foodordering/restrohome/';
import Search from '../components/foodordering/search';
import FoodCart from '../components/cart/index';
import BestInTown from '../components/foodordering/bestintown/bestintownList';
import CuisineList from '../components/foodordering/cuisines/cuisinesList';
import RestroListing from '../components/foodordering/restrolist/';


const SearchStack = StackNavigator({
  SearchRestro: {
    screen: Search,
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
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
})


const BestInTownStack = StackNavigator({
  Best: {
    screen: BestInTown,
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
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
})


const CuisineStack = StackNavigator({
  CuisineList: {
    screen: CuisineList,
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
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
})

const AllRestroStack = StackNavigator({
  RestroListing: {
    screen: RestroListing,
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
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
})


export const FoodStack = StackNavigator({
  FoodHome: {
    screen: FoodTab,
    navigationOptions: (props) => ({
      initialRouteName: 'FoodHome',
      header: null,
    }),
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      header: null,
    }
  },
  FoodCart: {
    screen: FoodCart,
    navigationOptions: () => ({
      header: null,
    }),
  },
  BestInTown: {
    screen: BestInTownStack,
    navigationOptions:{
      header: null,
    }
  },
  RestroHome: {
    screen: RestaurantHome,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  AllRestro: {
    screen: AllRestroStack,
    navigationOptions:{
      header: null,
    },
  },
  Cuisine: {
    screen: CuisineStack,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
})
