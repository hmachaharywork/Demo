import { StyleSheet, Platform, Dimensions } from 'react-native';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    marginTop: extraTopMargin,
    flex: 1,
    backgroundColor:'#FDFDFD',
    //marginBottom: 5,
   // paddingBottom: 5,
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
    color: '#757575',
  },
  midTopbar:{
    padding: 20,
    //flex:0.7,
    alignItems:'center',
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  locationText:{
    flex:0.8,
    color:'grey',
    fontSize:14,
    padding: 5,
    fontFamily : 'Helvetica',
    textAlign:'center'
  },
  chevronIcon:{
    flex:0.2,
    textAlign: 'center',
    color: '#757575',
    fontSize: 18,
    paddingTop:3,
  },
  rightTopbar:{
    flex: 0.15,
    alignSelf:'center',
    justifyContent: "center",
    flexDirection:"row",
  },
  scrollbar:{
    flex:0.9,
    backgroundColor: '#FCFCFC',
    //marginBottom: 5,
  },
  searchBox:{
    flex: 0.7,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#FCFCFC',
    overflow: 'hidden',
  },
  navInput:{
    alignSelf: 'center',
    justifyContent: 'center',
  },
  searchInput:{
    flexDirection: 'row',
    alignSelf: "center",
  },
  searchIcon: {
    textAlign: 'left',
    paddingRight: 5,
    // paddingTop: 8,
    color:'#757575',
    fontSize:20,
  },
  searchBoxText:{
    textAlign: 'left',
    // padding:8,
    color:'#757575',
    fontSize:16,
  },
  offersCarousel:{
    height:220,
    width: width,
    //marginTop:10,
  },
  dotStyle:{
    backgroundColor: 'rgba(0,0,0,.1)',
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 40,
    marginBottom: 3,
  },
  dotActiveStyle:{
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 40,
    marginBottom: 3
  },
  wrapper: {

  },
  slides: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  offerImage:{
    height:220,
    width: width,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bestinTownSection:{
    // flexDirection:'column',
  },
  cardsHeader:{
    //backgroundColor: '#FDFDFD',
  },
  cardsHeaderText:{
    fontFamily: 'Gill Sans',
    paddingLeft: 16,
    fontSize:16,
    padding:10,
    marginTop: 10,
    //color:"#85807F",
    color: '#393939',
    fontWeight: '500',
  },
  cards:{
    height:130,
    justifyContent:'center',
  },
  cardBlock:{
    height:140,
    width:width/1.53,
    backgroundColor: '#fff',
    padding: 3,
    paddingLeft: 4,
    paddingRight: 4,
    margin: 5,
    justifyContent:'center',
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: .8,
  },
  cards2:{
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
    // fontStyle :'italic',
    //fontFamily : 'Roboto-ThinItalic'
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
  smallCards:{
    margin:5,
    width:width/3.8,
    height:70,
    justifyContent:'center',
  },
});
