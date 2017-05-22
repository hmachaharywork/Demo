import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({

  restaurantDistance:{
    marginLeft:15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  left:{
    flex:0.3,
    height:90,
    borderRadius: 5,
  },
  right: {
  flex:0.7,
  paddingLeft:15,
  },

  divider:{
  height:1,
  alignSelf: 'stretch',
  backgroundColor: 'rgba(0,0,0,0.1)',
  marginTop: 12,
  marginBottom: 12,
  },

rightTop: {
  flex: 0.7,
  flexDirection: 'column',
},
restroName:{
 paddingTop:9,
  fontSize:18,
},

resultObjectView:{
  flexDirection: "row",
  margin:5,
  backgroundColor: "#fff",
  borderRadius: 5,
  padding:10,
  shadowColor: '#757575',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowRadius: 2,
  shadowOpacity: .8
},
listviewContainer:{
  padding:5,
  flex: 0.9
}
});
