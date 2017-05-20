import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, ActivityIndicator, InteractionManager } from 'react-native';
import { fetchRestaurant, clearCuisine } from '../../../actions/cuisine';
import { sortDistance } from '../../../utility/sort';
import { Spinner } from '../../../common';
import RestroList from '../restrolistview/';

var moment = require('moment');
class CuisineList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const cuisineId = this.props.navigation.state.params.cuisineId;
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchRestaurant(cuisineId);
    });
  }
  componentWillReceiveProps(nextProps){
  }

  componentWillUnmount(){
    this.props.clearCuisine();
  }

  componentWi
  render() {
    const { restaurants, isInit, isFetching } = this.props.restaurantList;
    return(
      <RestroList restroData={restaurants} isInit={isInit} isFetching={isFetching} />
    );
  }

  //
  // Got to restro Home
  //
  gotoRestroHome(id,menu,img,status){
    this.props.navigator.push({
      id:'restro-home',
      restroId:id,
      menuId:menu,
      img:img,
      status:status
    })
  }
}

function mapStateToProps (state) {
  return {
    restaurantList:state.cuisine,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRestaurant:(id)=>dispatch(fetchRestaurant(id)),
    clearCuisine:()=>dispatch(clearCuisine()),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(CuisineList);
