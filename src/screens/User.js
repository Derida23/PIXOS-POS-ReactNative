import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

const User = (props) => {

  const deleteToken = async () => {
    try {
      await AsyncStorage.removeItem('user')
      props.navigation.navigate('Login')
    } catch (err) {
      console.log(`The error is: ${err}`)
    }
  }

  return (
    <>
        <View style={{backgroundColor:'#43AB4A', height:150}}></View>
        <View style={{height:80}}></View>

        <View style={{marginHorizontal: 17,flexDirection:'row', paddingTop: 10}}>

          <View style={{ alignItems:'center', flex:1}}>
            <Text style={{color:'#43AB4A', fontSize: 20, fontWeight:'bold'}}> Username </Text>
            <Text> Jonathan Patricson</Text>
          </View>

          <View style={{ alignItems:'center', flex:1}}>
            <Text style={{color:'#43AB4A', fontSize: 20, fontWeight:'bold'}}> Last Login </Text>
            <Text> 20.00 : 09-11-2019</Text>
          </View>

        </View>

        <View style={{marginHorizontal:17, marginTop:35}}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="shirt" />
              </Button>
            </Left>
            <Body>
              <Text>Theme</Text>
            </Body>
            <Right>
              <Text>Green Nature</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#252525" }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
              <Text>Night Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="settings" />
              </Button>
            </Left>
            <Body>
              <Text>Setting App</Text>
            </Body>
            <Right>
              <Icon active name="arrow-dropdown" />
            </Right>
          </ListItem>
        </View>

        <View style={{marginHorizontal:17, marginTop:15}}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "grey" }}>
                <Icon active name="contact" />
              </Button>
            </Left>
            <Body>
              <Text>Contact</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "grey" }}>
                <Icon active name="paper-plane" />
              </Button>
            </Left>
            <Body>
              <Text>Feedback</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "grey" }}>
                <Icon active name="star" />
              </Button>
            </Left>
            <Body>
              <Text>Grade</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "grey" }}>
                <Icon active name="happy" />
              </Button>
            </Left>
            <Body>
              <Text>About us</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

        </View>

        <View style={{marginHorizontal:17, marginTop:25}}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "red" }}>
                <Icon active name="contact" />
              </Button>
            </Left>
            <Body>
              <TouchableOpacity onPress = {() =>{ deleteToken() }}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </Body>
            <Right>
              <Icon active name="log-out" />
            </Right>
          </ListItem>
        </View>

        <Image source={{uri: 'https://static.elcorreo.com/www/pre2017/multimedia/RC/201605/02/media/cortadas/david-beckham--575x323.JPG'}}
          style={{width: 150, height: 150, borderRadius:100, position: 'absolute', right: 130, top: 70, flexDirection: 'row', justifyContent: 'center',}}
        />
    </>
  )
}

export default User;
