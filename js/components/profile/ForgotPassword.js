import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { resetPassword } from '../../actions/login';
import { Spinner } from "../../common/";
import styles from './styles';

const { width } = Dimensions.get("window");
class EditDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      showSpinner:false,
      error:false,
      errorMessage:"",
      disableBtn:false,
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.resetPasswordObj.trying) {
      this.setState({
        showSpinner:true
      })
    }
    else if (nextProps.resetPasswordObj.error) {
      this.setState({
        showSpinner:false,
        error:true,
        disableBtn:false,
        errorMessage:"OTP is not valid",
      })
    }
  }
  submitOtp(){
    if (this.state.otp === "" || this.state.otp === undefined) {
      this.props.alertWithType('error', 'Error', "OTP cannot be blank");
      return ;
    }else if (this.state.password1 !== this.state.password2) {
      this.props.alertWithType('error', 'Error', "Entered password did not match");
      return ;
    }else if (this.state.password1 === "" || this.state.password2 === undefined) {
      this.props.alertWithType('error', 'Error', "Password cannot be blank");
      return ;
    }
    this.setState({
      disableBtn:true
    })
    this.props.resetPassword(this.state.otp, this.state.password1)
  }
  render() {
    return (
      <View style={[styles.mainBlock,{alignItems: 'center', alignSelf: 'center'}]}>
        <View style={styles.loginBlock}>
          <TextInput
            style={[styles.loginInput, {paddingLeft: 20}]}
            textInputStyle={styles.textInputTextStyle}
            tintColor={"rgba(0,120,60,0.5)"}
            placeholderTextColor ={"grey"}
            placeholder="Enter OTP"
            keyboardType={"number-pad"}
            value={this.state.otp}
            onChangeText={(otp) => this.setState({otp:otp, error:false})}
            onFocus={()=>this.setState({otp:''})}
          />
        </View>
        <View style={styles.loginBlock}>
          <TextInput
            style={[styles.loginInput, {paddingLeft: 20}]}
            textInputStyle={styles.textInputTextStyle}
            tintColor={"rgba(0,120,60,0.5)"}
            placeholderTextColor ={"grey"}
            placeholder="Enter password"
            secureTextEntry={true}
            value={this.state.password1}
            onChangeText={(pass) => this.setState({password1:pass, error:false})}
            onFocus={()=>this.setState({password1:''})}
          />
        </View>
        <View style={styles.loginBlock}>
          <TextInput
            style={[styles.loginInput, {paddingLeft: 20}]}
            textInputStyle={styles.textInputTextStyle}
            tintColor={"rgba(0,120,60,0.5)"}
            placeholderTextColor ={"grey"}
            placeholder="Confirm password"
            secureTextEntry={true}
            value={this.state.password2}
            onChangeText={(pass) => this.setState({password2:pass, error:false})}
            onFocus={()=>this.setState({password2:''})}
          />
        </View>
        {
          this.state.showSpinner
          &&
          <View style={styles.guestButton}>
            <Spinner style={[styles.guestButtonText]} size={"small"}/>
          </View>
        }


          {
            !this.state.showSpinner
            &&
            <TouchableOpacity
              onPress={()=>this.submitOtp()}
              disabled={this.state.disableBtn}
              style={styles.signOutBlock}
            >
              <Text style={styles.signOutText}>SUBMIT</Text>
            </TouchableOpacity>
          }

      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    resetPasswordObj: state.login.resetPassword
  }
}

function mapDispatchToProps (dispatch) {
  return {
    resetPassword:(otp,password)=>dispatch(resetPassword(otp,password)),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(EditDetails);
