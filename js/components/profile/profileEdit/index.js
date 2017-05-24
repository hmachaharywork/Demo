import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DropdownAlert from 'react-native-dropdownalert';
import { updateUserDetails } from '../../../actions/user';
import EmailValidator from "../../../utility/validate_email";
import styles from './styles';

class ProfileEdit extends Component {
  constructor(props){
    super(props);
    this.state={
      showUpdateButton: false,
      username:"",
      email: ""
    }
  }

  //
  // Relating to components update and rendering
  //
  componentWillMount(){
    const userobj = this.props.user
    this.setState({
      username:userobj.user.username,
      email: userobj.user.email,
    })
  }


  updateUserDetails(){
      const validate = EmailValidator.validate(this.state.email);
      if(this.state.username === ""){
        this.dropdown.alertWithType('error', 'Error', 'Username cannot be blank')
        return;
      }else if (validate.error) {
        this.dropdown.alertWithType('error', 'Error', validate.errorMessage)
        return ;
      }
      let success = this.props.updateUserDetails(this.state.username, this.state.email);
      console.log(success);
      this.props.navigation.goBack(null);
  }

  renderTopbarIcon(){
    return (
      <TouchableOpacity
        onPress={()=>this.props.navigation.goBack(null)}
        style={styles.leftTopbar}
      >
        <MaterialIcon style={styles.menuIcon} name="arrow-back" size={24} />
      </TouchableOpacity>
    );
  }

  //
  // Render Profile
  //
  renderProfile(){
    return(
     <View style={styles.profileView}>
        <View style={styles.editCard}>
          <View style={styles.headingBlock}>
            <Text>Please enter your details</Text>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              style={styles.editInput}
              onChangeText={(text)=>this.setState({username:text})}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              style={styles.editInput}
              onChangeText={(text)=>this.setState({email:text})}
              value={this.state.email}
            />
          </View>
          <TouchableOpacity
              style={styles.signOutBlock}
              onPress={()=>this.updateUserDetails()}
              >
              <Text style={styles.signOutText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topbar}>
          {
            this.renderTopbarIcon()
          }
          <View style={styles.title}>
            <Text style={styles.titleText}>Profile Edit</Text>
          </View>
          <View style={styles.clearFix}>

          </View>
        </View>
        <ScrollView style={styles.mainBlock}>
          {this.renderProfile()}
        </ScrollView>
        <DropdownAlert
          ref={(ref) => this.dropdown = ref}
          onClose={() => this.dropdown.onClose()}
        />
      </View>
    );
  }

}

function mapStateToProps (state) {
  return {
    user: state.user,
    userUpdateObj: state.user.userUpdateObj,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateUserDetails:(username,email)=>dispatch(updateUserDetails(username,email)),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
