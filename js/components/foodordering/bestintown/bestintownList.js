import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, InteractionManager } from 'react-native';
import RestroList from '../restrolistview/';
import { requestBestInTownList, clearBestInTown } from '../../../actions/bestintown';
import { ShoppingCart } from "../../../common/";
import Header from '../../Header/';
import styles from './styles';

class bestintownList extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const bestId = this.props.navigation.state.params.bestId;
    InteractionManager.runAfterInteractions(() => {
      this.props.requestBestInTownList(bestId);
    });
  }

  componentWillUnmount(){
    this.props.clearBestInTown();
  }

  render() {
    const { bestRestro, isInit, isFetching } = this.props.bestintown;
    const { navigation } = this.props;
    const { title } = navigation.state.params;
    return(
      <View style={styles.container}>
        <Header
          onBack={()=>navigation.goBack()}
          style={styles.topbar}
          title={title}
          showCart={true}
          navigator={navigation}
          />
        <RestroList navigation={navigation} restroData={bestRestro} isInit={isInit} isFetching={isFetching} />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    bestintown:state.bestintown,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestBestInTownList:(id)=>dispatch(requestBestInTownList(id)),
    clearBestInTown:()=>dispatch(clearBestInTown()),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(bestintownList);
