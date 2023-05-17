import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

const About = ({navigation}) => {
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
  return (
    <View>
      <Text onPress={()=>{navigation.push('Home')}}>About</Text>
    </View>
  )
}

export default About