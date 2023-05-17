import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StartScreen = ({navigation}) => {
    useEffect(()=>{
        (async()=>{
            try {
                const value = await AsyncStorage.getItem('@storage_Key')
                if(value !== null) {
                  navigation.navigate("Home")
                }
                else{
                    navigation.navigate("Login")
                }
              } catch(e) {
                console.log();
              }
        })()
    })

  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <Text>StartScreen</Text>
    </View>
  )
}

export default StartScreen