import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native';

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { getProduct } from '../Redux/Actions/product';

const Main = (props) => {

  const [page, setPage] = useState(0);
  const [infoPage, setInfoPage] = useState({maxPage: 0, totalAllProduct: 0});
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const dispatch = useDispatch();

  const fetchDataProduct = async () => {
    try {
      const response = await dispatch(getProduct(rowsPerPage, page + 1, props.item.token))
      setInfoPage (response.value.data.data.infoPage);
    } catch (error) {
      console.log (error);
    }
  }

  useEffect(() => {
      fetchDataProduct ();
  },[page, rowsPerPage])

  return(
    <>
    <View style={styles.viewBody}>

      <View style={styles.viewSearchCart}>
    {/* SEARCH NAVIGATIONS */}
        <View style={styles.viewSearch}>
          <TextInput placeholder='what do you want to search'
            style={styles.inputText}
          />
          <Image style={styles.cartImage}
            source={require('../assets/icon/search.png')}
          />
        </View>

    {/* CHART ICONS */}
        <View style={styles.viewCartIcons}>
          <TouchableOpacity onPress={() => { props.navigation.navigate('Cart') }}>
            <Image style={styles.imageBasket}
              source={require('../assets/icon/basket.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    {/* FEATURE APPS */}
      <View style={styles.viewFeature}>
        <View style={styles.viewLogo}>
            <Image style={styles.imageLogo} source={require('../assets/images/pixos-logo.png')} />
            <Text style={styles.textLogo}> ORDER</Text>
        </View>

        <View style={styles.viewMenu}>
          <View style={styles.viewMenuBlue}>
            <TouchableOpacity>
              <View style = {styles.TouchableOpacity}>
                <Text style = {styles.textMenu}>List</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMenuBlue}>
            <TouchableOpacity>
              <View style = {styles.TouchableOpacity}>
                <Text style = {styles.textMenu}>New</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMenuBlue}>
          <TouchableOpacity>
            <View style = {styles.TouchableOpacityCategory}>
              <Text style = {styles.textMenu}>Category</Text>
            </View>
          </TouchableOpacity>
          </View>
          <View style={styles.viewMenuBlue}>
          <TouchableOpacity>
            <View style = {styles.TouchableOpacityName}>
              <Text style = {styles.textMenu}>Name</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>

    {/* PRODUCT APPS */}
      <ScrollView style={styles.scrollMargin} showsVerticalScrollIndicator={false}>
        {props.setProduct.map((data, index) => (
          <View key={index}>
            <View key={index} style={styles.viewContentImage}>
              <Image
                 style={styles.imageContent}
                 source={{uri: data.image}}
               />
               <View style={styles.viewContentText}>
                 <Text style={styles.contentTitle}>{data.name}</Text>
                 <Text style={styles.contentDesc}>{data.description}</Text>
                 <View style={styles.viewContentPrice}>
                   <Text style={styles.textContent}>{data.price}</Text>
                     <TouchableOpacity onPress={() => {alert('You tapped the button!')}}
                       style={styles.contentTouchable}
                     >
                     <Text style={styles.textCart}> Add Cart </Text>
                   </TouchableOpacity>
                 </View>
               </View>
            </View>
            </View>
          )
        )}
      </ScrollView>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  inputText:{
    borderWidth:1,
    borderColor:'#E8E8E8',
    borderRadius: 25,
    height: 50,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor:'white',
    marginRight: 9
  },
  viewBody: {
    flex: 1,
    backgroundColor:'white'
  },
  viewSearchCart: {
    marginHorizontal: 17,
    flexDirection:'row',
    paddingTop:15
  },
  viewSearch: {
    position:'relative',
    flex:1
  },
  cartImage: {
    width:25,
    height:25,
    position:'absolute',
    top: 12,
    left: 12
  },
  viewCartIcons: {
    width:35,
    alignItems:'center',
    justifyContent:'center'
  },
  imageBasket: {
    width: 28,
    height: 28
  },

// FEATURE APPS STYLE
  viewFeature: {
    marginHorizontal:17,
    marginTop: 15
  },
  viewLogo: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'#0DAC50',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    padding:13
  },
  imageLogo: {
    width: 115,
    height: 20
  },
  textLogo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  viewMenu: {
    flexDirection: 'row',
    paddingTop:20,
    paddingBottom: 14,
    backgroundColor:'#1DBC60',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },

// MENU BLUE STYLE
  viewMenuBlue: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  TouchableOpacity:{
    backgroundColor: 'white',
    paddingRight:25,
    paddingLeft:25,
    paddingTop:3,
    paddingBottom:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  TouchableOpacityCategory:{
    backgroundColor: 'white',
    paddingRight:15,
    paddingLeft:15,
    paddingTop:3,
    paddingBottom:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  TouchableOpacityName:{
    backgroundColor: 'white',
    paddingRight:19,
    paddingLeft:19,
    paddingTop:3,
    paddingBottom:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  textMenu:{
    color: 'green'
  },

// CONTENT APP STYLE
  scrollMargin: {
    marginTop:10,
  },
  viewContentImage: {
    marginHorizontal:17,
    marginTop: 10,
    flexDirection:'row',
    position:'relative'
  },
  imageContent: {
    width: 100,
    height:100,
    borderRadius:5
  },
  viewContentText:{
    marginHorizontal:17,
    width:'69%'
  },
  contentTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop:5
  },
  contentDesc:{
    fontSize: 15,
    paddingTop:5
  },
  viewContentPrice:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textContent:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop:15
  },
  contentTouchable:{
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0DAC50',
    padding: 5,
    paddingLeft:20,
    paddingRight:20
  },
  textCart:{
    fontWeight: 'bold',
    color:'white'
  }
});

const mapStateToProps = state => {
    return {
        item: state.auth.resultsItem,
        setProduct: state.product.viewProduct,
        userDetail: state.auth.resultsLogin
    };
};

export default connect(mapStateToProps) (Main)
