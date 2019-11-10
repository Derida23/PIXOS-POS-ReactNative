import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Picker,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import productLogo from '../assets/images/product-logo.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { postProduct } from '../Redux/Actions/product';

const AddProduct = (props) => {

  const [user, setUser] = useState('')

  const [input, setInput] = useState({id:"", name:"", description:"", image:"", category_id:"", price:"", quantity:""})
  const dispatch = useDispatch()

   const handlePost = (event) => {
     dispatch (postProduct (input, props.item.token))
     .then(response => {
       if (response.value.data.status === 200) {
         props.navigation.navigate('Product')
       } else {
         alert(response.value.data.data)
       }
     })
     .catch(error => alert(error))
   }

  return (
    <>
      <View style={{justifyContent:'center', alignItems:'center', height: 89, backgroundColor:'#0DAC50'}}>
        <Text style={{ fontSize: 25, fontWeight:'bold', color:'white'}}>New Product</Text>
      </View>

      <View style={{ alignItems:'center'}}>
        <Image source={productLogo} style={{width: 110, height: 110}} />
      </View>

      <View style={{flex:1, marginHorizontal:35}}>
        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Name Product </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(name) => setInput({...input, name:name})}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Name Product'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Description </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(description) => setInput({...input, description:description})}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Description Product'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Quantity </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(quantity) => setInput({...input, quantity:quantity})}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Quantity Product'}
          keyboardType={'numeric'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Image Product </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(image) => setInput({...input, image:image})}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Image Product'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Price </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(price) => setInput({...input, price:price})}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Price Product'}
          keyboardType={'numeric'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Category </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>

        <Picker
          selectedValue = {input.category_id}
          onValueChange = {(itemValue, itemIndex) => setInput({...input, category_id:itemValue})}
        >
          {props.setCategory.map((item, index) => {
            return(
              <Picker.Item key={index} label={item.name} value={item.id} />
            )})
          }
          </Picker>
        </View>
      </View>

      <View style={{backgroundColor:'#0DAC50', justifyContent:'center', alignItems:'center', height: 60}}>
        <TouchableOpacity onPress={handlePost}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

const mapStateToProps = state => {
  return {
    item: state.auth.resultsItem,
    setCategory: state.category.viewCategory,
  };
};

export default connect(mapStateToProps) (AddProduct)
