import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, TouchableOpacity, TextInput, Dimensions, } from 'react-native';
import { clearLoginRedux, checkAvailability, loginUser, registerUser , submitOtpAndPassword, forgotPasswordAsync } from '../../actions/login';
import EmailValidator from "../../utility/validate_email";
import { Spinner } from "../../common/";
import PhoneValidator from "../../utility/validate_phone";
import ForgotPasswordView from './ForgotPassword';
import DropdownAlert from 'react-native-dropdownalert';
import Header from '../Header';
import styles from './styles';

const width = Dimensions.get("window").width;
class LoginView extends Component {
  constructor(props){
    super(props)
    this.state={
      number:'',
      password:'',
      name:'',
      notRegistered: false,
      user: null,
      enterPasswordView:false,
      showSpinner:false,
      showEnterOtpView: false,
      error: false,
      errorMessage: ""
    }
  }
  componentWillReceiveProps(nextProps){
    const loginObject = nextProps.login;
    // console.log("the loginObject is", loginObject);
    const registerObject = nextProps.register;
    if (loginObject.requestingAvailabilty) {
      this.setState({
        showSpinner:true,
      })
    }else if (loginObject.notRegistered && !registerObject.trying && !registerObject.otp && registerObject.init) {
      this.setState({
        notRegistered: true,
        showSpinner:false
      })
    }
    else if (loginObject.requestingLogin) {
      this.setState({
         showSpinner:true,
       })
    }
    else if (loginObject.invalidCredentials) {
      this.setState({
         error: true,
         showSpinner: false,
         errorMessage: "Invalid credentials"
       })
      //  this.dropdown.alertWithType('error', 'Error', "Invalid credentials");
      //  console.log("invalid credentials");

    }
    else if (loginObject.number !== null && !loginObject.notRegistered) {
        this.setState({
          enterPasswordView: true,
          showSpinner:false,
        })
    }
    else if (registerObject.trying) {
      this.setState({
        showSpinner: true,
      })
    }else if (registerObject.otp && !registerObject.init && !loginObject.requestingOtpValidation && !loginObject.otpFailed) {
      this.setState({
        notRegistered: false,
        showEnterOtpView: true,
        showSpinner:false
      })
    }
    else if (!registerObject.otp && !registerObject.init && !registerObject.trying) {
      this.setState({
        showEnterOtpView: true,
        showSpinner:false,
        error: true,
        errorMessage: "Registration failed"
      });
      // this.dropdown.alertWithType('error', 'Error', "Registration failed");
    }
    else if (loginObject.requestingOtpValidation && !loginObject.otpFailed) {
      this.setState({
         showSpinner: true,
       })
    }else if (!loginObject.requestingOtpValidation && loginObject.otpFailed) {
      this.setState({
         error: true,
         showSpinner: false,
         errorMessage: "Invalid OTP"
       })
      // this.dropdown.alertWithType('error', 'Error', "Invalid OTP");
    }else if (nextProps.forgotPassword.success) {
      this.setState({
        showForgotPasswordView:true
      })
    }
    else if (nextProps.forgotPassword.error) {
      this.setState({
        showForgotPasswordView:false
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Header
          style={styles.topbar}
          title={"Enter Details"}
          onBack={()=>this.props.navigation.goBack(null)}
          />
         {this.renderLogin()}
         <DropdownAlert
           ref={(ref) => this.dropdown = ref}
           onClose={() => this.dropdown.onClose()}
         />
      </View>
    );
  }

  //
  // Check that the phone looks valid.
  //
  validatePhone(phone) {
    const validate = PhoneValidator.validate(phone);
    if (validate.error) {
      this.dropdown.alertWithType('error', 'Error', validate.errorMessage)
      return ;
    }
    this.submitNumber(phone);
  }


  //
  // Check that the email and name looks valid.
  //
  validateEmail(name,email) {
    const validate = EmailValidator.validate(email);
    if (name === "") {
      this.dropdown.alertWithType('error', 'Error', "Name cannot be blank")
      return ;
    }else if (validate.error) {
      this.dropdown.alertWithType('error', 'Error', validate.errorMessage)
      return ;
    }
    this.submitRegisterDetails(name, email);
  }

  //
  // Go to login View
  //

  submitNumber(phone){
    this.props.checkAvailability(phone);
  }

  submitPass(){
    if(this.state.password.length === 0) {
      this.dropdown.alertWithType('error', 'Error', "Password cannot be blank");
      return;
    }
    this.props.loginUser(this.state.password);
  }


  submitOtp(){
    if (this.state.otp === "" || this.state.otp === undefined) {
      this.dropdown.alertWithType('error', 'Error', "OTP cannot be blank");
      return ;
    }else if (this.state.password1 !== this.state.password2) {
      this.dropdown.alertWithType('error', 'Error', "Entered password did not match");
      return ;
    }else if (this.state.password1 === "" || this.state.password2 === undefined) {
      this.dropdown.alertWithType('error', 'Error', "Password cannot be blank");
      return ;
    }
    this.props.submitOtpAndPassword(this.state.otp, this.state.password1)
  }
  //
  // Submit details to register
  //

  submitRegisterDetails(name, email){
    this.props.registerUser(name, email);
  }

  //
  // Goto forgot password
  //

  gotoForgotPassword(){
    this.props.forgotPasswordAsync();
    this.setState({
      disableBtn:true,
      showForgotPasswordView:true
    })
  }

  passwordCheck(message) {
    this.dropdown.alertWithType('error', 'Error', message);
  }

  //
  // Render Profile
  //
  renderLogin(){
    if (this.state.showForgotPasswordView) {
      return <ForgotPasswordView alertWithType={this.dropdown.alertWithType}/>
    }
    if (this.state.notRegistered) {
      return(
        <View style={[styles.mainBlock,{alignItems: 'center', alignSelf: 'center' }]}>
          {/* <Text style={styles.suggestText}>This phone number is not registered with us.</Text> */}
          <View style={styles.loginBlock}>
            <TextInput
              style={[styles.loginInput, {paddingLeft: 20}]}
              textInputStyle={styles.textInputTextStyle}
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
              placeholder="Enter your name"
              placeholderTextColor ={"#7f8c8d"}
              value={this.state.name}
              onChangeText={(name) => this.setState({name:name, error:false})}
            />
          </View>
          <View style={styles.loginBlock}>
            <TextInput
              style={[styles.loginInput, {paddingLeft: 20}]}
              textInputStyle={styles.textInputTextStyle}
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
              placeholder="Enter your email"
              keyboardType={'email-address'}
              autoCapitalize={"none"}
              value={this.state.email}
              onChangeText={(email) => this.setState({email:email, error:false})}
              onSubmitEditing={() => this.validateEmail(this.state.name, this.state.email)}
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
              onPress={()=>this.validateEmail(this.state.name, this.state.email)}
              style={styles.signOutBlock}
            >
              <Text style={styles.signOutText}>SUBMIT</Text>
            </TouchableOpacity>
          }

        </View>
      )
    }
    if (this.state.showEnterOtpView) {
      return (
        <View style={[styles.mainBlock,{alignItems: 'center', alignSelf: 'center'}]}>
          <View style={styles.loginBlock}>
            <TextInput
              style={[styles.loginInput, {paddingLeft: 20}]}
              textInputStyle={styles.textInputTextStyle}
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
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
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
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
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
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
              style={styles.signOutBlock}
            >
              <Text style={styles.signOutText}>SUBMIT</Text>
            </TouchableOpacity>
          }
        </View>
      );
    }
    if (this.state.enterPasswordView) {
      return(
        <View style={[styles.mainBlock,{alignItems: 'center', alignSelf: 'center'}]}>
          <View style={styles.loginBlock}>
            <TextInput
              style={[styles.loginInput, {paddingLeft: 20}]}
              textInputStyle={[styles.textInputTextStyle]}
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
              placeholder="Enter password"
              secureTextEntry={true}
              placeholderTextColor ={"#7f8c8d"}
              value={this.state.password}
              onChangeText={(pass) => this.setState({password:pass, error:false})}
              onFocus={()=>this.setState({password:''})}
              onSubmitEditing={() => this.submitPass()}
            />
          </View>
          <TouchableOpacity
              disabled={this.state.disableBtn}
              onPress={()=>this.gotoForgotPassword()}
          >
            <Text style={styles.forgotPassword} >Forgot password?</Text>
          </TouchableOpacity>
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
              onPress={()=>this.submitPass()}
              style={styles.signOutBlock}
              >
                <Text style={styles.signOutText}>SUBMIT</Text>
            </TouchableOpacity>
          }

        </View>
      );
    }
    return(
      <View style={[styles.mainBlock,{alignItems: 'center', alignSelf: 'center'}]}>
        <View>
          <View style={styles.loginBlock}>
            <Text style={styles.phoneCountryCode}>+91</Text>
            <TextInput
              style={styles.loginInput}
              textInputStyle={styles.textInputTextStyle}
              tintColor={"#7f8c8d"}
              placeholderTextColor ={"#7f8c8d"}
              placeholder="Enter mobile number"
              keyboardType={"phone-pad"}
              value={this.state.number}
              onChangeText={(num) => this.setState({number:num, error:false})}
              onSubmitEditing={() => this.validatePhone(this.state.number)}
            />
          </View>
        </View>

        {
          this.state.showSpinner
          &&
          <View style={styles.guestButton} >
            <Spinner style={[styles.guestButtonText]} size={"small"}/>
          </View>
        }
        {
          !this.state.showSpinner
          &&
          <TouchableOpacity
            onPress={()=>this.validatePhone(this.state.number)}
            disabled={this.state.disableBtn}
            style={[styles.signOutBlock]}
          >
            <Text style={[styles.signOutText]}>SUBMIT</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

}
function mapStateToProps (state) {
  return {
    login: state.login,
    register: state.login.register,
    forgotPassword: state.login.forgotPassword,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearLoginRedux:()=>dispatch(clearLoginRedux()),
    checkAvailability:(phoneNumber)=>dispatch(checkAvailability(phoneNumber)),
    loginUser:(pass)=>dispatch(loginUser(pass)),
    forgotPasswordAsync:()=>dispatch(forgotPasswordAsync()),
    registerUser:(name,email)=>dispatch(registerUser(name,email)),
    submitOtpAndPassword:(otp,password)=>dispatch(submitOtpAndPassword(otp,password)),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginView);
