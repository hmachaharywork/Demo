import { StyleSheet, Platform, Dimensions } from 'react-native';

//const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop:extraTopMargin,
    backgroundColor:'#F8F8F8',
  },
  geoContainer:{

  },
  description:{

  },
  topButton:{
    width:150,
    margin:10,
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    padding:10,
    fontSize:16,
  },
  orBlock:{
    marginTop:20,
    marginBottom:20
  },
  orBlockText:{
    textAlign:'center',
    padding:10,
    fontSize:24,
    color:'rgba(255,255,255,0.5)',
  },
  inputView:{
    margin:10,
    marginBottom:10,
  },
  textInputContainer:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopWidth: 0,
    borderBottomWidth:0
  },
  textInput:{
    height:50,
    textAlign:'center',
    color:'white',
    width:width*0.8,
  },
  autocompleteTextInput:{
    height:50,
    borderRadius: 0,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: .8
  },
  listView:{

  },
  poweredContainer:{

  }
});
