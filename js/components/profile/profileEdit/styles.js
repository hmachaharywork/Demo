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

  profileView:{
    //backgroundColor:"red",
  },

  editCard:{
    flex: .7,
    borderRadius: 2,
    backgroundColor: '#fff',
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: .8,
  },
  headingBlock:{
    flex: .2,
    borderBottomColor: '#757575',
    borderBottomWidth: .5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  inputBlock: {
    paddingTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: '#757575',
    borderBottomWidth: .5,
    flex: .15,

  },
  editInput:{
    height: 30,
    fontSize: 16,
    padding: 5,
    color: '#393939',
  },

  signOutBlock:{
    flexDirection: 'row',
    flex: 1,
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

});
