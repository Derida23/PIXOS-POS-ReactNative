import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Picker,
  StyleSheet,
  Modal,
  TouchableOpacity
} from 'react-native';

import productLogo from '../assets/images/product-logo.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { putProduct, deleteProduct } from '../Redux/Actions/product';

const EditProduct = (props) => {

  const [input, setInput] = useState({id:"", name:"", description:"", image:"", category_id:"", price:"", quantity:""});
  const dispatch = useDispatch();
  const {navigation} = props;

  const [modalVisible, setModalVisible] = useState(false)
  const clickModalVisible = (visible) => {
    setModalVisible(visible)
  }

  const handleEdit = (event) => {
    dispatch(putProduct(input, props.item.token))
    .then(response => {
      if (response.value.status === 200) {
        props.navigation.navigate('Product');
      } else {
        alert(response.value.data.data)
      }
    })
    .catch(error => alert(error));
  }

console.log(input);

  const handleDelete = (id) => {
    dispatch(deleteProduct (id, props.item.token))
    .then(response => {
      if (response.value.status === 200) {
        props.navigation.navigate('Product');
      } else {
        props.navigation.navigate('Product');
      }
    })
    .catch(error => alert(error));
  };

  useEffect(() => {
    setInput(navigation.state.params.selectedRow)
  },[])

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={{ backgroundColor:'transparent', flex:1, justifyContent:'flex-end' }}>
          <View style={{backgroundColor:'#FAB231', height:'30%'}}>

            <View style={{alignItems:'center', paddingTop:30}}>
              <Text style={{fontSize:25, color: 'white', fontWeight:'bold', paddingTop:20}}>Delete Product?</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Icon name={'ios-warning'} size={18} color={'white'} style={{paddingTop:10}}/>
              <Text style={{fontSize:18, color: '#EB3B5A', fontWeight:'bold', paddingTop:10}}> WARNING :</Text>
              <Text style={{fontSize:18, color: 'white', paddingTop:10}}> This action CANNOT be undone</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'center'}}>

              <View style={{paddingRight: 20}}>
                <TouchableOpacity style={{width:100, height: 35, borderRadius: 8, borderWidth: 1, borderColor: '#fff', marginTop: 30, alignItems:'center', justifyContent:'center'}}
                  onPress={() => {
                    clickModalVisible(!modalVisible);
                  }}>
                  <Text style={{color:'white', fontWeight:'bold'}}>Close</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{width:100, height: 35, borderRadius: 8, backgroundColor: '#2bb358', marginTop: 30, alignItems:'center', justifyContent:'center'}}
                onPress={() => handleDelete(input)}>
                <Text style={{color:'white', fontWeight:'bold'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 89, backgroundColor:'#0DAC50'}}>
        <Text style={{marginHorizontal:17, fontSize: 25, fontWeight:'bold', color:'white'}}>Edit Product</Text>
        <TouchableOpacity onPress={() => {setModalVisible(true)}}>
          <Icon name={'ios-trash'} size={26} color={'white'} style={{marginHorizontal:17}}/>
        </TouchableOpacity>
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
          onChangeText = {(name) => setInput({...input, name: name})}
          defaultValue={input.name}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Name Product'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Description </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(description) => setInput({...input, description: description})}
          defaultValue={input.description}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Description Product'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Quantity </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(quantity) => setInput({...input, quantity: quantity})}
          value={input.quantity.toString() }
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
          onChangeText = {(image) => setInput({...input, image: image})}
          defaultValue={input.image}
          style={{ height: 40, paddingLeft: 8, borderColor: '#787878', borderWidth: 0.5, borderRadius: 7 }}
          placeholder={'Your Image Product'}/>
        </View>

        <View style={{alignItems:'center', paddingBottom:5, flexDirection: 'row', paddingTop:15}}>
          <Text style={{fontSize:19, paddingLeft: 3, fontWeight:'bold', color:'#787878'}}>Price </Text>
          <Icon name={'ios-analytics'} size={15} color={'#0DAC50'}/>
        </View>
        <View>
        <TextInput
          onChangeText = {(price) => setInput({...input, price: price})}
          value={input.price.toString()}
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

        {/*<TextInput style = {styles.text}>{user}</TextInput> */}

        </View>
      </View>

      <View style={{backgroundColor:'#0DAC50', justifyContent:'center', alignItems:'center', height: 60}}>
        <TouchableOpacity onPress={handleEdit}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>EDIT PRODUCT</Text>
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

export default connect(mapStateToProps) (EditProduct)
