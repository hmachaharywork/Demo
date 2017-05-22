import { StyleSheet, Platform, Dimensions } from 'react-native';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    marginTop:extraTopMargin,
    flex: 1,
    backgroundColor:'transparent',
  },
  topbar:{
    flex:0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  mainBlock:{
    flex:0.9,
    // padding:10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  cardView:{
    margin:10,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  cards:{
    margin:0.5,
    width:width/2-12,
    height:130,
    justifyContent:'center',
  },
  headerDishes:{
    textAlign:'center',
    backgroundColor:'transparent',
    color: 'white',
    fontSize: 16,
  },
  italicText:{
    fontStyle :'italic',
    //fontFamily : 'Iowan Old Style'
  },
  restaurantName:{
    flex:0.5,
    paddingTop: 50,
    textAlign: 'center',
    backgroundColor:'transparent',
    color: 'white',
    fontSize: 16,
  },
  restaurantBrief:{
    flex:0.5,
    flexDirection: 'row',
    justifyContent : 'space-between'
  },
  restaurantDistance:{
    marginLeft:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantRating:{
    width:32,
    height:28,
    borderRadius: 8,
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:8,
    backgroundColor: '#4BD44E',
  },

  rightBottom: {
    flex:0,
    flexDirection: "row",
  },
  status: {
    flex: 0.8,
    justifyContent: "flex-end",
  },
  statusText:{

  },
  rating: {
    flex:0.2,
    alignItems: "flex-end",
  },

  ratingText: {
    fontSize:14,
    alignSelf: 'center',
  },

});
