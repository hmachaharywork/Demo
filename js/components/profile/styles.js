import { StyleSheet, Platform, Dimensions } from 'react-native';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: extraTopMargin,
    backgroundColor:'#FCFCFC',
  },
  topbar:{
    flex:0.1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.3,
  },
  leftTopbar:{
    flex:0.15,
    alignSelf:'center',
  },
  menuIcon:{
    textAlign: 'center',
    color: '#393939',
  },
  title:{
    flex: 0.7,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleText:{
    color:'grey',
    fontSize:18,
    padding: 5,
    alignSelf: 'center',
    // textAlign: "center",
    fontFamily : 'Helvetica'
  },
  clearFix: {
    flex: .15,
  },
  mainBlock:{
    flex:0.9,
    padding:10,
    backgroundColor: 'transparent',
    flexDirection:'column',
  },
  //
  // Style for Guest(not logged in)
  //
  profile:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#FCFCFC',
  },
  topGuest:{
    // padding:10,
    paddingTop:height/6,
    alignItems:'center',
  },
  guestPic:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:'#757575',
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth:1,
  },
  guestOopsText:{
    paddingTop:25,
    color: '#7f8c8d',
    fontSize:22,
    fontFamily: "Roboto-LightItalic",

  },
  middleGuest:{
    marginTop:25,
  },
  guestAdviceText:{
    fontSize:14,
    color: '#7f8c8d',
    fontFamily: "Roboto-Light"
  },
  bottomGuest:{
    flexDirection:'row',
    paddingTop:25,
    justifyContent:'space-between'
  },

  signOutBlock:{
    marginTop: 50,
    alignSelf:"center",
    marginBottom: 30,
    borderRadius: 2,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#0ACED4',
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: .5,
  },
  signOutText:{
    color:"#fff",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Helvetica"
  },
 guestButton:{
    width:130,
    height:45,
    marginTop: 50,
   // backgroundColor:'#fff',
    alignSelf:'center',
    justifyContent: 'center',
  },
  userPicStyle:{
    width: 80,
    height: 80,
    // borderRadius: 40,
  },
  guestButtonText:{
    textAlign:'center',
    padding:10,
    fontSize:16,
    //fontFamily: "Roboto-Light"
  },
  guestButtonSeperator:{
    height:50,
    width:2,
    margin:10,
    backgroundColor: '#7f8c8d',

  },
  //
  // Style for Host(logged in)
  //
  profileView:{
    //backgroundColor:"red",
  },
  topHost:{
    flexDirection: 'row',
    flex: 1,
    borderRadius: 2,
    backgroundColor: '#fff',
    // flexDirection:'row',
    padding:10,
    // paddingTop:10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: .8,
  },
  userInfo: {
    height: 80,
    padding: 10,
    paddingTop: 15,
    flex: .55,
    marginLeft: 15,
    justifyContent: 'center',
  },
  editProfile:{
    height: 45,
    flex: .15,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  editIcon: {
    color: '#393939',
    fontSize: 20,
    alignSelf: 'center',
  },
  welcomeText:{
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#393939',
  },
  userPhone:{
    paddingTop: 10,
    fontSize:16,
    color: '#393939',
    fontFamily: 'Helvetica',
    // alignSelf:'center',
  },
  manageAddress:{
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: .8,
    justifyContent: 'center',
    alignSelf: 'center',

  },
  manageText:{
    flex: .6,
    fontSize: 18,
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    color: '#393939',
  },
  manageIcon: {
    flex: .15,
    fontSize: 26,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#393939',
  },
  bottomHost:{
    padding:25,
  },
  userDetails:{
    backgroundColor: '#fff',
    margin: 10,
  },
  profileControlsTab:{
    flexDirection:'row',
    justifyContent: "space-between",
    backgroundColor: '#fff',
  },
  squareTabs:{
    width:40,
    height:40,
    backgroundColor:'silver',
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth:1,
  },
  profileControlsText:{
    alignSelf:'center',
    // justifyContent: 'flex-end',
    color:"silver",
    fontSize:18,
    // paddingLeft:25,
  },
  profileControlsTabDivider:{
    alignSelf:'flex-start',
    margin:15,
    marginLeft:0,
    width:width-140,
    height: 1,
    backgroundColor: 'rgba(0,120,60,0.3)',
  },
  //
  // Styles for login view
  //

  phoneInput:{
    width:width-120,
  },
  submitBtn: {
    marginTop:30,
    width:120,
    backgroundColor:'#757575',
    alignItems:'center',
    justifyContent: 'center',
  },
  submitBtnText:{
    padding:5,
    color:'#fff',
    fontSize:16,
  },
  suggestText: {
    color: '#7f8c8d',
    alignSelf: 'center',
  },
  errorText: {
    color:'#e74c3c',
    fontSize:14,
  },
  forgotPassword: {
    marginTop:25,
    fontStyle: 'italic',
    fontSize:16,
    color: "#7f8c8d",
    fontFamily : 'Roboto-LightItalic'
  },
  textInput: {
    height: 48,
    width: width * 0.75,
    margin: 8,
    borderRadius:5,
    backgroundColor: '#fff',
    color:'#757575',
    fontSize: 18,
    paddingLeft: 19,
    fontFamily : 'Roboto-Light'
  },
  savedaddress:{
    marginTop:15,
    backgroundColor: "#fff",
    padding:10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftSavedAddress:{
    flex:0.7,
  },
  addressHeader:{
    // marginLeft:10,
    fontSize:16,
    color:'#7f8c8d',
    fontFamily: 'Roboto-Regular',
  },
  addressBody:{
    marginTop:10,
    // marginLeft:10,
  },
  addressText:{
    color:'#7f8c8d',
  },
  editAddressButton:{
    paddingTop:1,
    alignSelf: "flex-start",
    alignItems: "center"
  },
  editAddressButtonText:{
    color: "#7f8c8d"
  },
  updateProfileDetailsButton:{
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: "center",
    margin:10,
  },
  buttonExtra:{
    // color: '#fff',
    // //alignSelf:"center",
    // // marginBottom: 30,
    // borderRadius: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
    // // paddingTop: 12,
    // // paddingBottom: 12,
    // backgroundColor: '#0ACED4',
  },
  userPicView:{
    flexDirection:"row",
    backgroundColor: '#0ACED4',
    flex: .25,
    alignSelf: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  userInitial: {
    color: '#fff',
    fontSize: 35,
    alignSelf: 'center',
  },

  phoneCountryCode:{
    //flex: .2,
     color: '#7f8c8d',
    fontSize:18,
    width: width * 0.15,
    paddingLeft: 10,

  },
  loginBlock:{
    marginTop:10,
    backgroundColor: '#fff',
    flexDirection: "row",
    width: width * 0.95,
    alignItems: 'center',
    borderRadius: 2,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: .8
  },

  loginInput:{
    height: 50,
    width: width * 0.77,
    color: '#757575',
  },
  textInputTextStyle:{
    color:'#757575',
  }
});
