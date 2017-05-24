import React from 'react';
import { StackNavigator } from 'react-navigation';

import Profile from '../components/profile/index';
import LoginView from '../components/profile/LoginView';
import ForgotPassword from '../components/profile/ForgotPassword';
import SelectLocation from '../components/foodordering/selectlocation/';
import EditProfile from '../components/profile/profileEdit/';
import Addresses from '../components/profile/manageAddr/';

export const ProfileStack = StackNavigator({
  ProfileStack: {
    screen: Profile,
    navigationOptions: {
      header: null,
    }
  },
  Location: {
    screen: SelectLocation,
    navigationOptions: {
      header: null,
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      header: null,
    }
  },
  Addresses: {
    screen: Addresses,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: LoginView,
    navigationOptions: {
      header: null,
    }
  },
});
