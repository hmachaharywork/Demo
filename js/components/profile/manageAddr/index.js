import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { fetchUserSavedAddresses, deleteAddress } from '../../../actions/user';
import styles from './styles';

class Addresses extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const userobj = this.props.user
    if (userobj.user !== undefined ) {
      this.props.fetchUserSavedAddresses();
    }
  }

  showPrompt(id){
    console.log("inside showPrompt", id);
    Alert.alert(
        "Are you sure?",
        "Press Cancel to exit",
        [
          { text: "Cancel", style:"cancel" },
          { text: "Sure", onPress: () => this.props.deleteAddress(id) },
        ])
  }

  renderTopbarIcon(){
    return (
      <TouchableOpacity
        onPress={()=>this.props.navigation.goBack(null)}
        style={styles.leftTopbar}
      >
        <MaterialIcon style={styles.menuIcon} name="arrow-back" size={24} />
      </TouchableOpacity>
    );
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderAddressBlock(address) {
    return address.map((addr, index) => {
      return(
        <View key={index} style={styles.inputBlock}>
          <SimpleLineIcons style={styles.Icon} name="location-pin" />
          <View style={styles.addressBlock}>
            <Text style={styles.heading}>{this.capitalizeFirstLetter(addr.address_type)}</Text>
            <Text style={styles.address}>{this.capitalizeFirstLetter(addr.address_line_1)}</Text>
            <Text style={styles.address}>{this.capitalizeFirstLetter(addr.address_line_2)}</Text>
            <Text style={styles.address}>{this.capitalizeFirstLetter(addr.city)}, {this.capitalizeFirstLetter(addr.state)}, {addr.zip}</Text>
          </View>
          <View style={styles.actionIcon}>
            <TouchableOpacity
              style={styles.iconClick}
              onPress={() => this.props.navigation.navigate('EditAddr')}
            >
              <SimpleLineIcons style={styles.editIcon} name="pencil"/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconClick}
              onPress={() => this.showPrompt(addr.id)}
            >
              <SimpleLineIcons style={styles.deleteIcon} name="trash" />
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  }

  renderSavedAddress(address) {
    if(address === undefined || address.length === 0) {
      return (
        <View style={styles.noAddress}>
          <SimpleLineIcons name="info" size={20}/>
          <Text style={styles.noAddressText}>No Saved Address Found</Text>
        </View>
      )
    }
    return(
      <View>
        <View style={styles.headingBlock}>
          <Text style={styles.headingText}>Saved Addresses</Text>
        </View>
        {this.renderAddressBlock(address)}
      </View>
    )
  }

  //
  // Render Profile
  //
  renderProfile(){
    const address = this.props.user.saved_address;
    console.log(this.props.user);
    return(
     <View style={styles.profileView}>
        <View style={styles.editCard}>
          {
            this.renderSavedAddress(address)
          }
        </View>
      </View>
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topbar}>
          {
            this.renderTopbarIcon()
          }
          <View style={styles.title}>
            <Text style={styles.titleText}>Addresses</Text>
          </View>
          <View style={styles.clearFix}>

          </View>
        </View>
        <ScrollView style={styles.mainBlock}>
          {this.renderProfile()}
        </ScrollView>
      </View>
    );
  }

}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


function mapDispatchToProps (dispatch) {
  return {
    deleteAddress: (id) => dispatch(deleteAddress(id)),
    fetchUserSavedAddresses: () => dispatch(fetchUserSavedAddresses())
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Addresses);
