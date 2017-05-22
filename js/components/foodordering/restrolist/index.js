import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, ActivityIndicator, InteractionManager } from 'react-native';
import { ShoppingCart } from "../../../common/";
import { fetchAllRestroList } from '../../../actions/listofrestro';
import { sortDistance } from '../../../utility/sort';
import RestroList from '../restrolistview/';
import Header from '../../Header/';
import styles from './styles';

var moment = require('moment');
class RestroListing extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
   InteractionManager.runAfterInteractions(() => {
      this.props.fetchAllRestroList();
    });
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

  render() {
    const { restaurants, isInit, isFetching } = this.props.restaurantList;
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        <Header
          onBack={()=>this.props.navigation.goBack()}
          style={styles.topbar}
          title={"List of restaurants"}
          showCart={true}
          navigator={this.props.navigation}
        />
      <RestroList navigation={navigation} restroData={restaurants} isInit={isInit} isFetching={isFetching} />
    </View>
    );
  }

}
function mapStateToProps (state) {
  return {
    restaurantList:state.listofrestro,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAllRestroList:()=>dispatch(fetchAllRestroList()),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(RestroListing);
