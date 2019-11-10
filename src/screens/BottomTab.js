import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Main from './Main'

const BottomTab = () => {
    return (
      <>
          <Main />
          <View style={{height: 54, flexDirection:'row'}}>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
              <Image style={{width: 26, height: 26}} source={require('../assets/icon/cart-actived.png')} />
              <Text style={{fontSize: 11, color: '#545454', marginTop:4, color:"#43AB4A"}}>Order</Text>
            </View>

            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
              <Image style={{width: 26, height: 26}} source={require('../assets/icon/product.png')} />
              <Text style={{fontSize: 11, color: '#545454', marginTop:4}}>Product</Text>
            </View>

            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
              <Image style={{width: 26, height: 26}} source={require('../assets/icon/category.png')} />
              <Text style={{fontSize: 11, color: '#545454', marginTop:4}}>Category</Text>
            </View>

            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
              <Image style={{width: 26, height: 26}} source={require('../assets/icon/history.png')} />
              <Text style={{fontSize: 11, color: '#545454', marginTop:4}}>History</Text>
            </View>
          </View>
      </>
    );
};

const styles = StyleSheet.create({

});

export default BottomTab;
