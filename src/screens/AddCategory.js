import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import categoryLogo from '../assets/images/category-logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { postCategory } from '../Redux/Actions/category';

const AddCategory = (props) => {
  const [input, setInput] = useState({name:""})
  const dispatch = useDispatch()

  const handlePost = (event) => {
    dispatch (postCategory (input, props.item.token))
    .then(response => {
      if (response.value.data.status === 200) {
        props.navigation.navigate('Category')
      } else {
        alert(response.value.data.data)
      }
    })
    .catch(error => alert(error))
  }

  return (
    <>
      <View style={{justifyContent:'center', alignItems:'center', height: 89, backgroundColor:'#0DAC50'}}>
        <Text style={{ fontSize: 25, fontWeight:'bold', color:'white'}}>New Category</Text>
      </View>

      <View style={{ alignItems:'center'}}>
        <Image source={categoryLogo} style={{width: 110, height: 110}} />
      </View>

      <View style={{flex:1, marginHorizontal:35}}>
        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Name Category </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText={(Category) => setInput({...input, name: Category })}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Name Category'}/>
        </View>
      </View>

      <View style={{backgroundColor:'#0DAC50', justifyContent:'center', alignItems:'center', height: 60}}>
        <TouchableOpacity onPress={handlePost} >
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    item: state.auth.resultsItem,
  };
};

export default connect(mapStateToProps) (AddCategory)
