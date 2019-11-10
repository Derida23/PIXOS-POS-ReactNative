import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/EvilIcons'

const Cart = (props) => {
  return (
    <>
      <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 89, backgroundColor:'#0DAC50'}}>
        <Text style={{marginHorizontal:17, fontSize: 25, fontWeight:'bold', color:'white'}}>CART LIST</Text>
        <Icon style={{marginHorizontal:17}} name={'sc-instagram'} size={30} color={'white'} onPress = {() =>{ props.navigation.navigate('Main') }}/>
      </View>

      <ScrollView>
    {/* READY CHECK MENU */}
        <View style={{paddingBottom:10, marginHorizontal:17, borderWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
          <View style={{flexDirection:'row', height:60, marginTop:10,}}>
            <View style={{width:90,  justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: 'https://images.pojoksatu.id/2019/07/Nasi-Padang-390x250.jpg'}} />
            </View>

            <View style={{flex:1, justifyContent:'space-between', padding:15}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Padang Rice</Text>
              <Text style={{fontSize:18}} >Food</Text>
            </View>
            <View style={{width:120, justifyContent:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>Rp.100.000</Text>
            </View>
          </View>
    {/* READY BUTTON PLUS */}
          <View style={{marginHorizontal:19, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name={'minus'} size={30} color={'#0DAC50'}/>
              <Text style={{paddingLeft:5, fontSize:22}}>1</Text>
              <Icon style={{paddingLeft:5}} name={'plus'} size={30} color={'#0DAC50'}/>
            </View>

            <View>
              <Icon style={{paddingRight:10}} name={'trash'} size={30} color={'#0DAC50'}/>
            </View>
          </View>
        </View>

    {/* READY CHECK MENU */}
        <View style={{paddingBottom:10, marginHorizontal:17, borderWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
          <View style={{flexDirection:'row', height:60, marginTop:10,}}>
            <View style={{width:90,  justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: 'https://images.pojoksatu.id/2019/07/Nasi-Padang-390x250.jpg'}} />
            </View>

            <View style={{flex:1, justifyContent:'space-between', padding:15}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Padang Rice</Text>
              <Text style={{fontSize:18}} >Food</Text>
            </View>
            <View style={{width:120, justifyContent:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>Rp.100.000</Text>
            </View>
          </View>
    {/* READY BUTTON PLUS */}
          <View style={{marginHorizontal:19, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name={'minus'} size={30} color={'#0DAC50'}/>
              <Text style={{paddingLeft:5, fontSize:22}}>1</Text>
              <Icon style={{paddingLeft:5}} name={'plus'} size={30} color={'#0DAC50'}/>
            </View>

            <View>
              <Icon style={{paddingRight:10}} name={'trash'} size={30} color={'#0DAC50'}/>
            </View>
          </View>
        </View>

    {/* READY CHECK MENU */}
        <View style={{paddingBottom:10, marginHorizontal:17, borderWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
          <View style={{flexDirection:'row', height:60, marginTop:10,}}>
            <View style={{width:90,  justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: 'https://images.pojoksatu.id/2019/07/Nasi-Padang-390x250.jpg'}} />
            </View>

            <View style={{flex:1, justifyContent:'space-between', padding:15}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Padang Rice</Text>
              <Text style={{fontSize:18}} >Food</Text>
            </View>
            <View style={{width:120, justifyContent:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>Rp.100.000</Text>
            </View>
          </View>
    {/* READY BUTTON PLUS */}
          <View style={{marginHorizontal:19, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name={'minus'} size={30} color={'#0DAC50'}/>
              <Text style={{paddingLeft:5, fontSize:22}}>1</Text>
              <Icon style={{paddingLeft:5}} name={'plus'} size={30} color={'#0DAC50'}/>
            </View>

            <View>
              <Icon style={{paddingRight:10}} name={'trash'} size={30} color={'#0DAC50'}/>
            </View>
          </View>
        </View>

    {/* READY CHECK MENU */}
        <View style={{paddingBottom:10, marginHorizontal:17, borderWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
          <View style={{flexDirection:'row', height:60, marginTop:10,}}>
            <View style={{width:90,  justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: 'https://images.pojoksatu.id/2019/07/Nasi-Padang-390x250.jpg'}} />
            </View>

            <View style={{flex:1, justifyContent:'space-between', padding:15}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Padang Rice</Text>
              <Text style={{fontSize:18}} >Food</Text>
            </View>
            <View style={{width:120, justifyContent:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>Rp.100.000</Text>
            </View>
          </View>
    {/* READY BUTTON PLUS */}
          <View style={{marginHorizontal:19, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name={'minus'} size={30} color={'#0DAC50'}/>
              <Text style={{paddingLeft:5, fontSize:22}}>1</Text>
              <Icon style={{paddingLeft:5}} name={'plus'} size={30} color={'#0DAC50'}/>
            </View>

            <View>
              <Icon style={{paddingRight:10}} name={'trash'} size={30} color={'#0DAC50'}/>
            </View>
          </View>
        </View>

    {/* READY CHECK MENU */}
        <View style={{paddingBottom:10, marginHorizontal:17, borderWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
          <View style={{flexDirection:'row', height:60, marginTop:10,}}>
            <View style={{width:90,  justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: 'https://images.pojoksatu.id/2019/07/Nasi-Padang-390x250.jpg'}} />
            </View>

            <View style={{flex:1, justifyContent:'space-between', padding:15}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Padang Rice</Text>
              <Text style={{fontSize:18}} >Food</Text>
            </View>
            <View style={{width:120, justifyContent:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>Rp.100.000</Text>
            </View>
          </View>
    {/* READY BUTTON PLUS */}
          <View style={{marginHorizontal:19, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name={'minus'} size={30} color={'#0DAC50'}/>
              <Text style={{paddingLeft:5, fontSize:22}}>1</Text>
              <Icon style={{paddingLeft:5}} name={'plus'} size={30} color={'#0DAC50'}/>
            </View>

            <View>
              <Icon style={{paddingRight:10}} name={'trash'} size={30} color={'#0DAC50'}/>
            </View>
          </View>
        </View>

    {/* READY CHECK MENU */}
        <View style={{paddingBottom:10, marginHorizontal:17, borderWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
          <View style={{flexDirection:'row', height:60, marginTop:10,}}>
            <View style={{width:90,  justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: 'https://images.pojoksatu.id/2019/07/Nasi-Padang-390x250.jpg'}} />
            </View>

            <View style={{flex:1, justifyContent:'space-between', padding:15}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Padang Rice</Text>
              <Text style={{fontSize:18}} >Food</Text>
            </View>
            <View style={{width:120, justifyContent:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>Rp.100.000</Text>
            </View>
          </View>
    {/* READY BUTTON PLUS */}
          <View style={{marginHorizontal:19, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name={'minus'} size={30} color={'#0DAC50'}/>
              <Text style={{paddingLeft:5, fontSize:22}}>1</Text>
              <Icon style={{paddingLeft:5}} name={'plus'} size={30} color={'#0DAC50'}/>
            </View>

            <View>
              <Icon style={{paddingRight:10}} name={'trash'} size={30} color={'#0DAC50'}/>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{backgroundColor:'#0DAC50'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingTop:10, marginHorizontal: 17, height:30}}>
            <Text style={{fontSize: 16, color:'white', fontWeight:'bold'}}>Total (Tax Include)</Text>
            <Text style={{fontSize: 26, color:'white', fontWeight:'bold'}}>240.000</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress = {() =>{ props.navigation.navigate('History') }}
          style={{
            width: 375,
            height: 45,
            borderRadius: 6,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 30,
          }}>
            <Text style={{fontSize: 16, fontWeight:'bold'}}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Cart;
