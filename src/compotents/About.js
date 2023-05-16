import { View, Text } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View>
      <Text onPress={()=>{navigation.push('Home')}}>About</Text>
    </View>
  )
}

export default About