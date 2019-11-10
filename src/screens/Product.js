import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { ListItem, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
import TouchableScale from 'react-native-touchable-scale';

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { getProduct } from '../Redux/Actions/product';

const Product = (props) => {

  const [page, setPage] = useState(0);
  const [infoPage, setInfoPage] = useState({maxPage: 0, totalAllProduct: 0});
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const dispatch = useDispatch();

  const fetchDataProduct = async () => {
    try {
      const response = await dispatch(getProduct(rowsPerPage, page + 1, props.item.token))
      setInfoPage(response.value.data.data.infoPage);
    } catch (error) {
      console.log (error);
    }
  }

  useEffect(() => {
      fetchDataProduct ();
  },[page, rowsPerPage])

  return (
    <>

    <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 89, backgroundColor:'#0DAC50'}}>
      <Text style={{marginHorizontal:17, fontSize: 25, fontWeight:'bold', color:'white'}}>PRODUCT LIST</Text>
      <Icon onPress = {() =>{ props.navigation.navigate('AddProduct') }} name={'circle-with-plus'} size={26} color={'white'} style={{marginHorizontal:17}}/>
    </View>

    <ScrollView style={{marginHorizontal:17, flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
    {props.setProduct.map((data, index) => (
          <View key={index}>
            <ListItem key={index} onPress = {() => props.navigation.navigate('EditProduct',{selectedRow : data})}
              Component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              title={data.name}
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              subtitle= { <View>
                          <Text style={{color:"green"}}>Price : Rp.{data.price}</Text>
                          <Text>Category : {data.category_name}</Text>
                          </View> }
              leftAvatar={{ source: { uri: data.image } }}
              badge={{ value: data.quantity, textStyle: { color: 'white', fontSize:17, marginHorizontal: 10} }}
            />
            <Divider style={{ backgroundColor: 'green' }} />
          </View>
        )
      )}
    </ScrollView>
    </>
  )
}

const mapStateToProps = state => {
    return {
        item: state.auth.resultsItem,
        setProduct: state.product.viewProduct,
    };
};


export default connect(mapStateToProps) (Product)
