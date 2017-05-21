import React from 'react';
import { View, Image , Text, TouchableOpacity } from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
const ShoppingCart = ({navigation, numberOfItemsInCart, onCartClick }) => {
  return (
    <TouchableOpacity
      disabled={ numberOfItemsInCart === 0 }
      onPress={onCartClick}
      style={styles.cartView}>
      {
        navigation.state.routeName === 'FoodHome'
        &&
        <Image
          style={{width:30, height: 30}}
          source={require('../assets/icons/dinner.png')}
          />
      }

      {
        navigation.state.routeName === 'Ecommerce'
        &&
        <Image
          style={{width:25, height: 25}}
          source={require('../assets/icons/shopping-bag-2.png')}
        />
      }
      {
        numberOfItemsInCart > 0
        &&
        <View style={[styles.badgeView]}>
          <Text style={styles.badgeSetting}>{numberOfItemsInCart}</Text>
        </View>
      }
    </TouchableOpacity>
  );
};

const styles = {
  cartView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: 'center',
    position: "relative",
    padding: 20,
  },
  iconStyle:{
    fontSize: 32,
    color:"#757575",
  },
  badgeView:{
    position: "absolute",
    width:12,
    height:12,
    borderRadius:6,
    backgroundColor: "#00C0AF",
    left:24,
  },
  badgeSetting:{
    color:"#e3e3e3",
    fontSize:8,
    marginTop:1,
    marginLeft:1,
    alignSelf: "center",
    textAlign: "center",
    // justifyContent: "center"
  }
};

export { ShoppingCart };
