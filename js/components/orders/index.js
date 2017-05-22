import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Card, CardSection, Button } from '../../common';
import NowOrderedList from './NowOrderedList';
import PastOrderedList from './PastOrderedList';
import FavouriteOrderedList from './FavouriteOrderedList';
import { setActiveTab, setActiveOrderTab, nowOrderedListFetch, pastOrderedListFetch, favouriteOrderedListFetch } from '../../actions';

const NOW_ORDERED_LIST = 'nowOrderedList';
const PAST_ORDERED_LIST = 'pastOrderedList';
const FAVOURITE_ORDERED_LIST = 'favouriteOrderedList';

class Orders extends Component {

  componentDidMount() {
    this.props.nowOrderedListFetch();
  }

  changetab(event){
    switch (event.i) {
      case 0:
        this.props.nowOrderedListFetch();
        break;
      case 1:
        this.props.pastOrderedListFetch();
        break;
      case 2:
        this.props.favouriteOrderedListFetch();
        break;
      default:
        break;
    }
    this.props.setActiveOrderTab(event.i);
  }

  renderTopbarIcon(){
    return (
      <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('DrawerOpen')}
        style={styles.leftTopbar}
      >
        <Icon style={styles.menuIcon} name="menu" size={24} />
      </TouchableOpacity>
    );
  }

  renderOrdersMain(){
    if (this.props.user === undefined) {
      return(
        <View style={{flex: 1, alignItems:'center', justifyContent:'space-around'}}>
        <View style={styles.profile}>
          <View style={[styles.topGuest, {paddingTop:100}]}>
            <Image
              style={{width:200, height: 200}}
              source={require('../../assets/not-logged-in.png')}
              />
            <Text style={styles.guestOopsText}>Oops! You are not logged in</Text>
          </View>
          <View style={styles.middleGuest}>
            <Text style={styles.guestAdviceText}>TO ORDER YOU MUST LOG IN</Text>
          </View>
        </View>
        </View>
      )
    }
    return(
      <ScrollableTabView
          style={{marginTop: 0, }}
          initialPage={0}
          locked={false}
          tabBarTextStyle={{color:'#757575', fontFamily: 'Gill Sans'}}
          tabBarUnderlineStyle={{backgroundColor:'#00E676', height:1.5}}
          renderTabBar={() => <ScrollableTabBar />}
          onChangeTab={(event)=>this.changetab(event)}
        >
          <NowOrderedList tabLabel="NOW" navigation={this.props.navigation} />
          <PastOrderedList tabLabel="PAST" navigation={this.props.navigation} />
          <FavouriteOrderedList tabLabel="FAVOURITE" navigation={this.props.navigation}/>
      </ScrollableTabView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          {
            this.renderTopbarIcon()
          }
          <View style={styles.title}>
            <Text style={styles.titleText}>Orders</Text>
          </View>
          <View style={styles.clearFix}>

          </View>
        </View>
        {
          this.renderOrdersMain()
        }
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    user:state.user.user,
  }
}


function mapDispatchToProps (dispatch) {
  return {
      setActiveTab:(tab)=>dispatch(setActiveTab(tab)),
      setActiveOrderTab:(id)=>dispatch(setActiveOrderTab(id)),
      nowOrderedListFetch: () => dispatch(nowOrderedListFetch()),
      pastOrderedListFetch: () => dispatch(pastOrderedListFetch()),
      favouriteOrderedListFetch: () => dispatch(favouriteOrderedListFetch()),
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Orders);
