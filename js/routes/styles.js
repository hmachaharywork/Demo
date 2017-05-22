import { StyleSheet, Platform, Dimensions } from 'react-native';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: extraTopMargin,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flex: .3,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  stars: {
    position: 'absolute',
    height: height/3,
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    height: 60,
    width: 60,
  },
  city: {
    height: 60,
    width: 300,
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
  },
  navgationItems: {
    flex: .38
  },
  signOutBlock:{
    flex:0.05,
    alignSelf:"center",
  },
  signOutText:{
    textAlign:"center",
    fontFamily: 'Helvetica',
  },
  divider:{
    // flex:0.1,
    alignSelf: 'center',
    width:250,
    height: .5,
    backgroundColor: 'silver',
  },
  contactUs:{
    flex:0.18,
  },
  contactUsBlock:{
    padding:10,
    alignItems:"center",
  },
  contactUsNumbers:{
    flexDirection: "row",
    margin:5,
  },
  numberdivider:{
    marginLeft:10,
    marginRight:10,
    width:1,
    height:20,
    backgroundColor:"silver",
  },
  bottombar:{
    flex:0.13,
    alignItems: 'center',
    flexDirection: 'column',
  },
  cityoralogo:{
    margin:5,
    justifyContent: 'flex-end',
    backgroundColor:"#000",
    alignItems: 'center'
  },
  poweredBy:{
    justifyContent: 'center',
    alignItems: 'center',
   // marginBottom: 20
  },
  logoText:{
    fontSize:12,
    color: '#757575',
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
   // paddingBottom: 20
     marginBottom:18
  },

});
