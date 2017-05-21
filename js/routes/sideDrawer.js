import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { logout } from '../actions/login';
import styles from './styles';


class SideDrawer extends Component {

  constructor(props){
    super(props);
    this.state={
      active:"",
      user: null,
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user.user) {
      this.setState({user:nextProps.user.user})
    }else {
      this.setState({user:null})
    }
  }

  handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if(supported) {
        Linking.openURL(url);
      }
    });
  }

  signOut(){
    this.props.logout();
  }


  render(){
    return(
      <View style={{flex: 1,}}>
        <View style={styles.imageContainer} >
          <Image source={require('../assets/header-bg.jpg')} style={styles.backgroundImage} />
          <Image source={require('../assets/stars.png')} style={styles.stars} />
          <Image source={require('../assets/logo-white-mob.png')} style={styles.logo} />
          <Image source={require('../assets/cityscape.png')} style={styles.city} />
        </View>
        <View style={styles.navgationItems} >
          <DrawerItems {...this.props} />
        </View>
        <View
          style={styles.signOutBlock}
        >
        {
          this.state.user !== null
          &&
          <TouchableOpacity
            style={styles.signOutBlock}
            onPress={()=>this.signOut()}
            >
            <Text style={styles.signOutText}>SIGN OUT</Text>
          </TouchableOpacity>
         }
        </View>
        <View style={styles.contactUs} >
          <View style={styles.divider} />
          <View style={styles.contactUsBlock} >
            <Text>Contact us</Text>
            <View style={styles.contactUsNumbers} >
              <TouchableOpacity
                onPress={()=>this.handleClick('tel:9127018661')}
              >
                  <Text>9127018661</Text>
              </TouchableOpacity>
              <View style={styles.numberdivider}>
              </View>
              <TouchableOpacity
                onPress={()=>this.handleClick('tel:9127018662')}
              >
                  <Text>9127018662</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={()=>this.handleClick('mailto:contact@cityora.com')}
            >
              <Text >contact@cityora.com</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottombar}>
          <View style={[styles.cityoralogo,{width:35, height: 35, borderRadius:18}]}>
            <Image
              style={{width:35, height: 35}}
              source={require('../assets/image/cityora-app-logo.jpg')}
              />
          </View>
          <View style={styles.poweredBy}>
            <Text style={styles.logoText}>Cityora &#xA9; 2016</Text>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
