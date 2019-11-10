import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { ListItem, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
import TouchableScale from 'react-native-touchable-scale'

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { getCategory } from '../Redux/Actions/category';

const Category = (props) => {

  const [dataCategory, setDataCategory] = useState ([]);
  const dispatch = useDispatch();

  const fetchDataCategory = async () => {
    try {
      const response = await dispatch(getCategory(props.item.token))
      setDataCategory(response.value.data.data.data);
    } catch (error) {
      console.log (error);
    }
  }

  useEffect(() => {
      fetchDataCategory ();
  },[])

  return (
    <>
    <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 89, backgroundColor:'#0DAC50'}}>
      <Text style={{marginHorizontal:17, fontSize: 25, fontWeight:'bold', color:'white'}}>CATEGORY LIST</Text>
      <Icon onPress = {() =>{ props.navigation.navigate('AddCategory') }} name={'circle-with-plus'} size={26} color={'white'} style={{marginHorizontal:17}}/>
    </View>
    <ScrollView style={{marginHorizontal:17, flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
      {props.setCategory.map((data, index) => (
        <View key={index}>
          <ListItem key={index} onPress = {() => props.navigation.navigate('EditCategory',{selectedRow : data})}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            title={data.name}
            chevron
          />
          <Divider style={{ backgroundColor: 'green' }} />
          </View>
      ))}
    </ScrollView>
    </>
  )
}

const mapStateToProps = state => {
    return {
        item: state.auth.resultsItem,
        setCategory: state.category.viewCategory,
        userDetail: state.auth.resultsLogin
    };
};

export default connect(mapStateToProps) (Category)
