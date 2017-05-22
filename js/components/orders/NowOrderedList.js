import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from '../../common';
import NowOrderedItem from './sub_components/NowOrderedItem';
import styles from './styles';

class NowOrderedList extends Component {

  render() {
    const { isLoading, status } = this.props;

    if(isLoading) {
     return (<Spinner size="large" />);
    }

    if(status==0) {
      return (
          <View style={[styles.topGuest, {justifyContent:"center"}]}>
            <Image
              style={{width:200, height: 200}}
              source={require('../../assets/no-orders.png')}
              />

              <Text style={[styles.guestAdviceText,{marginTop:10, fontSize:18}]}>NO ORDERS PLACED</Text>
          </View>
      )
    }

 		return (
      <ScrollView>
     {
       this.renderNowOrderedList()
     }
      </ScrollView>
 		);
 	}

  renderNowOrderedList() {
    return this.props.nowOrderedList.map( (nowOrderedItem, index) =>
        <NowOrderedItem key={index} nowOrderedItem={nowOrderedItem} typeOfOrder={nowOrderedItem.type}/>
    );
  }
}

const mapStateToProps = (state) => {
  const {isLoading, nowOrderedData } =  state.orders.nowOrderedObj;

  return {
    isLoading,
    status: nowOrderedData.status,
    nowOrderedList: nowOrderedData.data,
    activeOrderTab: state.orders.activeOrderTab
  }
};

export default connect(mapStateToProps, null )(NowOrderedList);
