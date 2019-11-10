import React, {useState} from 'react';
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
   AsyncStorage
} from 'react-native';

import { Item, Input, Form, Label, Toast } from 'native-base';

import bgImage from '../assets/images/bgImage.jpg';
import logoLogin from '../assets/images/pixos-login.png';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import { register } from '../Redux/Actions/auth';

const { width: WIDTH } = Dimensions.get('window')

{/* READY FUNCTION SIGNUP */}
const Signup = (props) => {
  const [data, setData] = useState({username: '', password: ''});
  const [showPass, setShowPass] = useState(true)
  const [press, setPress] = useState(false)

  const dispatch = useDispatch();

{/* READY FUNCTION HANDLE REGISTER */}
  const handleRegister = async() => {
    await dispatch(register(data))
    .then(response => {
      if (response.value.data.status === 200) {
          showToast("Success Create New User", "success");
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 500);
      } else {
      showToast(response.value.data.error, "warning");
      }
    })
    .catch(error => alert(error.value.data.message));
  };

{/* READY FUNCTION PASS */}
  const pass = () => {
    if (press == false){
      setShowPass(false)
      setPress(true)
    } else {
      setShowPass(true)
      setPress(false)
    }
  }

{/* READY FUNCTION HANDLE INFO */}
  const showToast = (message, types) => {
    Toast.show({
      text: message,
      buttonText: "Okay",
      type: types == "warning" ? "warning":"success",
      duration: 10000,
      position: "bottom"
    })
  }

  return (
    <>
    {/* READY LOGO */}
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logoLogin} style={styles.logoLogin} />
          <Text style={styles.logoText}>Move Fast and Get Rich</Text>
          <Text style={styles.textLogin}>SIGN UP</Text>
        </View>

    {/* READY INPUT */}
        <View>
          <Icon name={'md-person'} size={28} color={'black'}
            style={styles.inputIcon}/>
          <TextInput
            onChangeText={(text) => {setData({...data, username: text})}}
            value={data.username}
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
            onChangeText={(text) => {setData({...data, password: text})}}
            value={data.password}
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
        <TouchableOpacity style={styles.btnLogin} onPress={()=> handleRegister()} >
          <Text style={styles.textsubmit}> CREATE ACCOUNT </Text>
        </TouchableOpacity>

      {/* READY CHANGE LOGIN */}
        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={{ fontSize: 15}}>Already Have Account?</Text>
          <TouchableOpacity onPress = {() =>{ props.navigation.navigate('Login') }}>
            <Text style={{ fontSize: 15, fontWeight:'bold', color:'#2bb358'}}> Login Now </Text>
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
    marginTop: 30
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

export default Signup;
