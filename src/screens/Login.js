import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { Item, Input, Form, Label, Toast} from 'native-base';

import bgImage from '../assets/images/bgImage.jpg'
import logoLogin from '../assets/images/pixos-login.png'
import Icon from 'react-native-vector-icons/Ionicons'

import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { login, getItem } from '../Redux/Actions/auth';

const { width: WIDTH } = Dimensions.get('window')

{/* READY FUNCTION LOGIN */}
const Login = (props) => {
  const [dataLogin, setDataLogin] = useState({username: '', password: ''});
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(true)
  const [press, setPress] = useState(false)

{/* READY FUNCTION HANDLE LOGIN */}
  const handleLogin = () => {
    dispatch(login(dataLogin))
      .then(response => {
        if (response.value.data.status === 200) {
          AsyncStorage.setItem('user', JSON.stringify(response.value.data.data), () => {});
          showToast("Login Success", "success");
          checkUser();
          setTimeout(() => {
            props.navigation.navigate('CobaTab');
          }, 500);
        } else {
          showToast(response.value.data.data, "warning");
        }
      })
      .catch(error => alert(error.value.data.error));
    };

{/* READY FUNCTION LOGIN AUTH */}
  const checkUser = () => {
    dispatch(getItem())
    .then(response => { console.log('asdasd',response.value);
      if (response.value != null) {
        props.navigation.navigate('CobaTab')
        showToast("Login Success, success")
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    const check = setTimeout(() => {
      checkUser()
    }, 0)

    return () => {
      clearTimeout(check)
    }
  },[])
{/* READY FUNCTION HANDLE INFO */}
    const showToast = (message, types) => {
      Toast.show({
        text: message,
        buttonText: "Okay",
        type: types == "warning" ? "warning":"success",
        duration: 5000,
        position: "bottom"
      })
    }

{/* READY FUNCTION SHOW PASSWORD */}
  const pass = () => {
    if (press == false){
      setShowPass(false)
      setPress(true)
    } else {
      setShowPass(true)
      setPress(false)
    }
  }
  return (
    <>
    {/* READY LOGO */}
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logoLogin} style={styles.logoLogin} />
          <Text style={styles.logoText}>Move Fast and Get Rich</Text>
          <Text style={styles.textLogin}>LOGIN</Text>
        </View>

    {/* READY INPUT */}
        <View>
          <Icon name={'md-person'} size={28} color={'black'}
            style={styles.inputIcon}/>
          <TextInput
            onChangeText={(text) => { setDataLogin({...dataLogin, username: text})}}
            value={dataLogin.username}
            style={styles.inputUsername}
            placeholder={'Username'}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View>
          <Icon name={'ios-lock'} size={28} color={'black'}
            style={styles.inputIcon}/>
          <TextInput
            onChangeText={(text) => {setDataLogin({...dataLogin, password: text})}}
            value={dataLogin.password}
            style={styles.inputUsername}
            placeholder={'Password'}
            secureTextEntry={showPass}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btnEye}
            onPress={() => pass()}>
            <Icon name={press == false ? 'ios-eye' : 'ios-eye-off'}
                  size={26} color={'grey'}/>
          </TouchableOpacity>
        </View>

      {/* READY BUTTOM SUBMIT */}
        <TouchableOpacity activeOpacity={.7} style={styles.btnLogin} onPress={()=> handleLogin()}>
          <Text style={styles.textsubmit} > LOGIN </Text>
        </TouchableOpacity>

      {/* READY ACCESS DASBOARD */}
        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={{ fontSize: 15}}>Dont Have Account?</Text>
          <TouchableOpacity onPress = {() =>{ props.navigation.navigate('Signup') }}>
            <Text style={{ fontSize: 15, fontWeight:'bold', color:'#2bb358'}}> Register Now </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLogin:{
    width: 120,
    height: 120,
  },
  logoContainer:{
    alignItems:'center',
    marginBottom: 50
  },
  logoText:{
    color: 'white',
    fontSize: 26,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8
  },
  inputUsername:{
    width: WIDTH - 75,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#e3e3e3',
    color: 'black',
    paddingLeft: 48,
    marginTop: 15,
    marginHorizontal: 25,
    opacity: 0.5
  },
  inputIcon:{
    position: 'absolute',
    top: 21,
    left: 43
  },
  btnEye:{
    position: 'absolute',
    top: 24,
    right: 43
  },
  btnLogin:{
    width: WIDTH - 75,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#2bb358',
    justifyContent: 'center',
    marginTop: 30,
  },
  textsubmit: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textLogin:{
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
  }
});

export default connect()(Login);
