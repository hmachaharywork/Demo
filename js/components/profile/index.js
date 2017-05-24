import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { logout } from '../../actions/login';
import LoginView from './LoginView';
import styles from './styles';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      showLoginView:false,
      showUpdateButton:false,
    }
  }

  //
  // Relating to components update and rendering
  //
  componentWillMount(){
    const userobj = this.props.user
    if (userobj.user !== undefined ) {
      this.setState({
        username:userobj.user.username,
        email: userobj.user.email,
        phone:userobj.user.phn
      })
    }
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps.us)
    if (nextProps.user.user) {
      this.setState({
        showLoginView:false,
        username:nextProps.user.user.username,
        email: nextProps.user.user.email,
        phone: nextProps.user.user.phn,
      })
    }
  }

  //
  // Go to login View
  //

  hideLoginView(){
    this.setState({
      showLoginView:false
    })
  }


  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderTopbarIcon(){
    return (
      <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('DrawerOpen')}
        style={styles.leftTopbar}
      >
        <MaterialIcon style={styles.menuIcon} name="menu" size={24} />
      </TouchableOpacity>
    );
  }

  //
  // Render Profile
  //
  renderProfile(){
    const user = this.props.user.user;
    const address = this.props.user.saved_address;
    if ( !user || user === undefined) {
      //
      // Guest Profile View
      //
      return(
        <View style={styles.profile}>
          <View style={[styles.topGuest, {paddingTop:50}]}>
            <Image
              style={{width:200, height: 200}}
              source={require('../../assets/not-logged-in.png')}
              />
            <Text style={styles.guestOopsText}>Oops! You are not logged in</Text>
          </View>
          <View style={styles.middleGuest}>
            <Text style={styles.guestAdviceText}>TO ORDER YOU MUST HAVE AN ACCOUNT</Text>
          </View>
          <View style={styles.bottomGuest}>
            <TouchableOpacity
              onPress={()=>this.setState({showLoginView:true})}
              style={[styles.guestButton,{marginRight:22,}]}>
              <Text style={[styles.guestButtonText,{color: '#0ACED4', fontFamily: 'Helvetica', }]}>LOGIN</Text>
            </TouchableOpacity>
             <TouchableOpacity
              onPress={()=>this.setState({showLoginView:true})}
              style={[styles.guestButton,{marginLeft:22,}]}>
              <Text style={[styles.guestButtonText,{fontFamily: 'Helvetica', color: "#0ACED4"}]}>SIGN UP</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
    }
    //
    // Host Profile View
    //
    return(
     <View style={styles.profileView}>
        <View style={styles.topHost}>
          <View style={styles.userPicView}>
            <Text style={styles.userInitial}>{this.state.username.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={styles.userInfo}>
              <Text style={styles.welcomeText}>Welcome {this.capitalizeFirstLetter(this.state.username.split(' ')[0])}</Text>
              <Text style={styles.userPhone}>+{this.state.phone}</Text>
          </View>
          <TouchableOpacity
            style={styles.editProfile}
            onPress={() => this.props.navigation.navigate('EditProfile')}
          >
            <MaterialIcon style={styles.editIcon} name="edit" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.manageAddress}
          onPress={() => this.props.navigation.navigate('Addresses')}
        >
          <MaterialIcon style={styles.manageIcon} name="home" />
          <Text style={styles.manageText}>Manage Addresses</Text>
          <MaterialIcon style={styles.manageIcon}name="chevron-right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.manageAddress}
          onPress={() => this.props.navigation.navigate('Location')}
        >
          <MaterialIcon style={styles.manageIcon} name="location-on" />
          <Text style={styles.manageText}>Change Location</Text>
          <MaterialIcon style={styles.manageIcon}name="chevron-right" />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.signOutBlock}
            onPress={()=>this.props.logout()}
            >
            <Text style={styles.signOutText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    if (this.state.showLoginView) {
      return <LoginView hideLoginView={()=>this.setState({showLoginView:false})}/>
    }
    return(
      <View style={styles.container}>
        <View style={styles.topbar}>
          {
            this.renderTopbarIcon()
          }
          <View style={styles.title}>
            <Text style={styles.titleText}>Profile</Text>
          </View>
          <View style={styles.clearFix}>

          </View>
        </View>
        <ScrollView style={styles.mainBlock}>
          {this.renderProfile()}
        </ScrollView>
      </View>
    );
  }

}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Profile);
