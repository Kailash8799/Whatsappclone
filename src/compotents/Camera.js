import { View, Text, Platform, BackHandler, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Number = ({navigation}) => {

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const Logout = async()=>{
    navigation.navigate("Login")
    await AsyncStorage.removeItem("@storage_Key")
  }
  
  return (
    <>
    <View style={{height:39,backgroundColor:"#fff"}}></View>
    <View >
      <Text>Numer</Text>
      <TouchableOpacity onPress={Logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default Number